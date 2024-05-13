import type { PromptObject } from "prompts"
import fs from "fs-extra"
import fg from "fast-glob"
import { cac } from "cac"
import prompts from "prompts"
import pc from "picocolors"

import { listShort, listFlex, listMedia } from "./list.js"

type Options = {
  short: boolean
  flex: boolean
  media: boolean
}
type FileObject = {
  filePath: string
  absolutePath: string
  data: string
  modifiedData: string
  changeLogs: string[]
}

function pkgVersion() {
  const pkgURL = new URL("../package.json", import.meta.url)
  const data = JSON.parse(fs.readFileSync(pkgURL, "utf8"))
  return data.version as string
}

async function getFlieObject(
  filePath: string,
  replacementMap: { [key: string]: string }
) {
  const absolutePath = filePath.replace(process.cwd(), "")
  const data: string = await fs.readFile(filePath, "utf8")

  let modifiedData = data
  let changeLogs: string[] = []

  for (const [oldClass, newClass] of Object.entries(replacementMap)) {
    const classRegex = new RegExp(
      `(class(?:Name)?="[^"]*?)\\b${oldClass}\\b([^"]*")`,
      "g"
    )
    modifiedData = modifiedData.replace(classRegex, (match, prefix, suffix) => {
      const old = `${prefix}${oldClass}${suffix}`
      const newString = `${prefix}${newClass}${suffix}`
      changeLogs.push(`${old} -> ${newString}`)
      return newString
    })
  }
  return { filePath, absolutePath, data, modifiedData, changeLogs }
}

async function rewriteFiles(fileObjects: FileObject[]) {
  console.log(pc.bold(pc.green("✔") + " Detecting..."))

  fileObjects.forEach((fileObject) => {
    console.log("\n" + fileObject.absolutePath)
    fileObject.changeLogs.forEach((changeLog) => {
      console.log(pc.gray(changeLog))
    })
  })

  console.log("")

  const question: PromptObject = {
    type: "select",
    name: "override",
    message: "Start overwriting?",
    choices: [
      { title: "Yes", value: true },
      { title: "No", value: false },
    ],
    initial: 0,
  }
  const res = (await prompts(question)) as { override: boolean }

  if (res.override) {
    await Promise.all(
      fileObjects.map(async (fileObject) => {
        await fs
          .outputFile(fileObject.filePath, fileObject.modifiedData)
          .then(() => {})
          .catch((err) => {
            console.error(err)
          })
      })
    )
    console.log(pc.bold(pc.green("✔ Done")))
  } else {
    console.log(pc.bold(pc.red("Cancelled")))
  }
}

async function main(files: string, options: Options) {
  const { short, flex, media } = options

  if (!short && !flex && !media) {
    return console.log(pc.red("Please have one or more options."))
  }

  const globFiles = await fg(files)

  if (!globFiles.length) {
    return console.log(pc.red("Target file not found."))
  }

  const replacementMap: { [key: string]: string } = Object.assign(
    short ? listShort : {},
    flex ? listFlex : {},
    media ? listMedia : {}
  )

  let fileObjects: FileObject[] = await Promise.all(
    globFiles.map(async (item) => await getFlieObject(item, replacementMap))
  )
  fileObjects = fileObjects.filter((item) => item.changeLogs.length)

  if (!fileObjects.length) {
    return console.log(pc.red("There is no target file with class."))
  }

  await rewriteFiles(fileObjects)
}

const cli = cac("musubii-optimize")

cli
  .command("[files]", "Target files")
  .option("--short", "[boolean] Replace shortened class names")
  .option("--flex", "[boolean] Optimize class names for flex")
  .option("--media", "[boolean] Optimize class names for media queries")
  .action(async (files: string, options: Options) => {
    try {
      await main(files, options)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  })

cli.help()
cli.version(pkgVersion())
cli.parse()
