import fs from "fs-extra"
import sass from "sass"
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import postcssFlexbugsFixes from "postcss-flexbugs-fixes"
import postcssSortMediaQueries from "postcss-sort-media-queries"
import CleanCSS from "clean-css"

const pkg = JSON.parse(await fs.readFile("./package.json", "utf8"))
const pjt = JSON.parse(await fs.readFile("./project.json", "utf8"))
const header = `/*! ${pjt.name} v${pkg.version} ${pkg.license} by ${pkg.author.name} */`

const configPaths = [
  "./src/scss/configs/variables/_option.scss",
  "./src/scss/configs/variables/_breakpoint.scss",
  "./src/scss/configs/variables/_color.scss",
  "./src/scss/configs/variables/_font.scss",
  "./src/scss/configs/variables/_radius.scss",
  "./src/scss/configs/variables/_meter.scss",
  "./src/scss/configs/variables/_global.scss",
  "./src/scss/configs/mixins/_mediaquery.scss",
  "./src/scss/configs/mixins/_placeholder.scss",
  "./src/scss/configs/mixins/_safearea.scss",
  "./src/scss/configs/mixins/_generate.scss",
  "./src/scss/configs/themes/_theme-common.scss",
  "./src/scss/configs/themes/_theme-light.scss",
  "./src/scss/configs/themes/_theme-dark.scss",
  "./src/scss/configs/themes/_convert.scss",
]

const stylePaths = [
  "./src/scss/styles/bases/_root-light.scss",
  "./src/scss/styles/bases/_root-dark.scss",
  "./src/scss/styles/bases/_reset.scss",
  "./src/scss/styles/bases/_html.scss",
  "./src/scss/styles/layouts/_section.scss",
  "./src/scss/styles/layouts/_grid.scss",
  "./src/scss/styles/layouts/_card.scss",
  "./src/scss/styles/layouts/_box.scss",
  "./src/scss/styles/layouts/_joint.scss",
  "./src/scss/styles/elements/_text.scss",
  "./src/scss/styles/elements/_button.scss",
  "./src/scss/styles/elements/_badge.scss",
  "./src/scss/styles/elements/_list.scss",
  "./src/scss/styles/elements/_table.scss",
  "./src/scss/styles/elements/_form.scss",
  "./src/scss/styles/elements/_iframe.scss",
  "./src/scss/styles/elements/_icon.scss",
  "./src/scss/styles/elements/_alert.scss",
  "./src/scss/styles/elements/_wysiwyg.scss",
  "./src/scss/styles/utilities/_display.scss",
  "./src/scss/styles/utilities/_size.scss",
  "./src/scss/styles/utilities/_flex.scss",
  "./src/scss/styles/utilities/_space.scss",
  "./src/scss/styles/utilities/_margin.scss",
  "./src/scss/styles/utilities/_padding.scss",
  "./src/scss/styles/utilities/_overflow.scss",
  "./src/scss/styles/utilities/_clearfix.scss",
]

function sortObjects(objects) {
  const sortedObjects = objects.sort((a, b) => {
    const idA = a.id
    const idB = b.id
    if (idA < idB) {
      return -1
    }
    if (idA > idB) {
      return 1
    }
    return 0
  })
  return sortedObjects
}

async function getCodeObjects(paths) {
  const configObects = []
  await Promise.all(
    paths.map(async (path, index) => {
      const code = await fs.readFile(path, "utf8")
      return configObects.push({ id: index, path: path, code: code })
    })
  )
  const sortedObjects = sortObjects(configObects)
  return sortedObjects
}

function fixDartSassCode(code) {
  const useMath = `@use "sass:math";`
  const replacedCode = code
    .replaceAll(
      "padding-top: 9 / 16 * 100%",
      "padding-top: math.div(9, 16) * 100%"
    )
    .replaceAll(
      "padding-top: 3 / 4 * 100%",
      "padding-top: math.div(3, 4) * 100%"
    )
    .replaceAll(
      "(100% / $flex-split * $i)",
      "(math.div(100%, $flex-split) * $i)"
    )
  const fixedCode = useMath + "\n\n" + replacedCode
  return fixedCode
}

async function buildCode(code, output, minify) {
  const sassResult = sass.compileString(code, {
    outputStyle: "expanded",
  }).css
  const postcssResult = await postcss([
    autoprefixer,
    postcssFlexbugsFixes,
    postcssSortMediaQueries,
  ]).process(sassResult, { from: undefined })
  const rerultStr = header + "\n\n" + postcssResult
  const result = minify ? new CleanCSS().minify(rerultStr).styles : rerultStr
  await fs.outputFile(output, result)
}

await fs.emptyDir("./dist")

const configCodeObjects = await getCodeObjects(configPaths)
const configCode = configCodeObjects.map((item) => item.code).join("\n\n")
const styleCodeObjects = await getCodeObjects(stylePaths)
const styleCode = styleCodeObjects.map((item) => item.code).join("\n\n")

const musubiiCode = configCode + "\n\n" + styleCode
const fixedMusubiiCode = fixDartSassCode(musubiiCode)

await Promise.all([
  buildCode(fixedMusubiiCode, "./dist/musubii.css", false),
  buildCode(fixedMusubiiCode, "./dist/musubii.min.css", true),
])
