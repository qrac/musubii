import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const HEX_CSS = path.resolve(ROOT, "packages/musubii/src/bases/color/hex.css")
const MIX_CSS = path.resolve(ROOT, "packages/musubii/src/bases/color/mix.css")

/**
 * @param {string[]} argv
 * @returns {Record<string, string|boolean>}
 */
function parseArgs(argv) {
  /** @type {Record<string, string|boolean>} */
  const args = {}
  for (const a of argv.slice(2)) {
    const m = a.match(/^--([^=]+)=(.+)$/)
    if (m) args[m[1]] = m[2]
    else if (a.startsWith("--")) args[a.slice(2)] = true
  }
  return args
}

/** @typedef {{r:number,g:number,b:number,a:number}} RGBA */
/** @typedef {'r'|'g'|'b'|'a'} RGBAKey */

/**
 * @param {string} hex
 * @returns {RGBA}
 */
function hexToRgba(hex) {
  let h = hex.replace(/^#/, "").toLowerCase()
  if (h.length === 3)
    h = h
      .split("")
      .map((ch) => ch + ch)
      .join("")
  if (h.length === 4)
    h = h
      .split("")
      .map((ch) => ch + ch)
      .join("")
  if (h.length !== 6 && h.length !== 8)
    throw new Error(`Unsupported hex: ${hex}`)
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) : 255
  return { r, g, b, a }
}

/**
 * @param {RGBA} c
 * @param {boolean} withAlpha
 * @returns {string}
 */
function rgbaToHex(c, withAlpha = false) {
  /**
   * @param {number} n
   * @returns {string}
   */
  const to2 = (n) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, "0")
  const body = `${to2(c.r)}${to2(c.g)}${to2(c.b)}`
  return `#${withAlpha ? body + to2(c.a) : body}`
}

/**
 * @param {string} hex1
 * @param {string} hex2
 * @param {number} [t=0.5]
 * @returns {string}
 */
function lerpColor(hex1, hex2, t = 0.5) {
  const c1 = hexToRgba(hex1)
  const c2 = hexToRgba(hex2)
  /**
   * @param {RGBAKey} k
   * @returns {number}
   */
  const mix = (k) => c1[k] * (1 - t) + c2[k] * t
  const aPresent = hex1.length >= 9 || hex2.length >= 9
  return rgbaToHex(
    { r: mix("r"), g: mix("g"), b: mix("b"), a: mix("a") },
    aPresent
  )
}

/**
 * @param {string} cssText
 * @returns {Map<string,string>}
 */
function extractCssVarHexMap(cssText) {
  const map = new Map()
  const re = /^\s*(--[a-z0-9\-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/gm
  let m
  while ((m = re.exec(cssText))) {
    map.set(m[1], m[2].toLowerCase())
  }
  return map
}

/**
 * @param {string} mixText
 * @param {Map<string,string>} hexMap
 * @param {number} ratio
 * @returns {{out:string, missing: Array<{varName:string,leftVar:string,rightVar:string, tried:string[]}>}}
 */
function rewriteMixCss(mixText, hexMap, ratio) {
  const re = /^(\s*)(--[a-z0-9\-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;\s*$/gm
  /** @type {Array<{varName:string,leftVar:string,rightVar:string,tried:string[]}>} */
  const missing = []

  const out = mixText.replace(re, (full, indent, varName) => {
    if (!varName.includes("-x-")) return full

    const [lhs, rhsRaw] = varName.split("-x-")
    const leftVar = lhs
    const tried = []

    const leftPrefixMatch = leftVar.match(/^--[a-z0-9]+-/)
    const leftPrefix = leftPrefixMatch ? leftPrefixMatch[0] : "--"

    /** @type {string[]} */
    const rightCandidates = []
    if (rhsRaw.startsWith("--")) {
      rightCandidates.push(rhsRaw)
    } else {
      rightCandidates.push(`${leftPrefix}${rhsRaw}`)
      rightCandidates.push(`--${rhsRaw}`)
    }

    let rightVar = ""
    for (const cand of rightCandidates) {
      tried.push(cand)
      if (hexMap.has(cand)) {
        rightVar = cand
        break
      }
    }

    const leftHex = hexMap.get(leftVar)
    const rightHex = rightVar ? hexMap.get(rightVar) : undefined

    if (!leftHex || !rightHex) {
      missing.push({
        varName,
        leftVar,
        rightVar: rightVar || "(not found)",
        tried,
      })
      return full
    }

    const mixed = lerpColor(leftHex, rightHex, ratio).toLowerCase()
    return `${indent}${varName}: ${mixed};`
  })

  return { out, missing }
}

async function main() {
  const args = parseArgs(process.argv)
  const ratio = Math.max(0, Math.min(1, Number(args.ratio ?? 0.5)))

  const [hexCss, mixCss] = await Promise.all([
    fs.readFile(HEX_CSS, "utf8"),
    fs.readFile(MIX_CSS, "utf8"),
  ])

  const hexMap = extractCssVarHexMap(hexCss)
  const { out, missing } = rewriteMixCss(mixCss, hexMap, ratio)

  if (missing.length) {
    console.warn("[build-color-mix] ⚠ 未解決の参照があります：")
    for (const m of missing) {
      console.warn(`  ${m.varName} -> ${m.leftVar} / ${m.rightVar}`)
    }
  }

  if (out !== mixCss) {
    await fs.writeFile(MIX_CSS, out, "utf8")
    console.log(`[build-color-mix] ✅ 完了: ratio=${ratio}`)
  } else {
    console.log("[build-color-mix] 変更なし")
  }
}

main().catch((err) => {
  console.error("[build-color-mix] ❌ エラー:", err)
  process.exit(1)
})
