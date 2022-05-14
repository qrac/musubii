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

function sortById(objects) {
  const result = objects.sort((a, b) => {
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
  return result
}

function ignoreByPath(objects, includesPath) {
  const result = objects.filter((item) => !item.path.includes(includesPath))
  return result
}

function matchByPath(objects, matchPath) {
  const result = objects.filter((item) => item.path === matchPath)
  return result
}

function concatCodeObjects(objects) {
  const result = objects.map((item) => item.code).join("\n\n")
  return result
}

async function getCodeObjects(paths) {
  const configObects = []
  await Promise.all(
    paths.map(async (path, index) => {
      const code = await fs.readFile(path, "utf8")
      return configObects.push({ id: index, path: path, code: code })
    })
  )
  const sortedObjects = sortById(configObects)
  return sortedObjects
}

function fixSass(code) {
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
  const rerultStr = [header, postcssResult].join("\n\n")
  const result = minify ? new CleanCSS().minify(rerultStr).styles : rerultStr
  await fs.outputFile(output, result)
}

await fs.emptyDir("./dist")

const configObjects = await getCodeObjects(configPaths)
const configCode = concatCodeObjects(configObjects)
const styleObjects = await getCodeObjects(stylePaths)
const styleCode = concatCodeObjects(styleObjects)

const rootPath = "./src/scss/styles/bases/_root-"
const lightPath = "./src/scss/styles/bases/_root-light.scss"
const darkPath = "./src/scss/styles/bases/_root-dark.scss"
const noRootObjects = ignoreByPath(styleObjects, rootPath)
const noRootCode = concatCodeObjects(noRootObjects)
const rootLightObjects = matchByPath(styleObjects, lightPath)
const rootLightCode = concatCodeObjects(rootLightObjects)
const rootDarkObjects = matchByPath(styleObjects, darkPath)
const rootDarkCode = concatCodeObjects(rootDarkObjects)

const useVar = `$option-css-variables: true;`
const useMedia = `$option-theme-trigger-media: true;`
const defDark = `$option-theme-default: "dark";`
const plainArray = [configCode, styleCode]
const plainCode = fixSass(plainArray.join("\n\n"))
const cssvarArray = [useVar, configCode, noRootCode]
const cssvarCode = fixSass(cssvarArray.join("\n\n"))
const defaultLightArray = [useVar, configCode, rootLightCode]
const defaultLightCode = fixSass(defaultLightArray.join("\n\n"))
const defaultDarkArray = [useVar, defDark, configCode, rootDarkCode]
const defaultDarkCode = fixSass(defaultDarkArray.join("\n\n"))
const mediaLightArray = [useVar, useMedia, defDark, configCode, rootLightCode]
const mediaLightCode = fixSass(mediaLightArray.join("\n\n"))
const mediaDarkArray = [useVar, useMedia, configCode, rootDarkCode]
const mediaDarkCode = fixSass(mediaDarkArray.join("\n\n"))
const dataLightArray = [useVar, defDark, configCode, rootLightCode]
const dataLightCode = fixSass(dataLightArray.join("\n\n"))
const dataDarkArray = [useVar, configCode, rootDarkCode]
const dataDarkCode = fixSass(dataDarkArray.join("\n\n"))

await Promise.all([
  buildCode(plainCode, "./dist/musubii.css", false),
  buildCode(plainCode, "./dist/musubii.min.css", true),
  buildCode(cssvarCode, "./dist/musubii-cssvar.css", false),
  buildCode(cssvarCode, "./dist/musubii-cssvar.min.css", true),
  buildCode(defaultLightCode, "./dist/theme-default-light.css", false),
  buildCode(defaultLightCode, "./dist/theme-default-light.min.css", true),
  buildCode(defaultDarkCode, "./dist/theme-default-dark.css", false),
  buildCode(defaultDarkCode, "./dist/theme-default-dark.min.css", true),
  buildCode(mediaLightCode, "./dist/theme-media-light.css", false),
  buildCode(mediaLightCode, "./dist/theme-media-light.min.css", true),
  buildCode(mediaDarkCode, "./dist/theme-media-dark.css", false),
  buildCode(mediaDarkCode, "./dist/theme-media-dark.min.css", true),
  buildCode(dataLightCode, "./dist/theme-data-light.css", false),
  buildCode(dataLightCode, "./dist/theme-data-light.min.css", true),
  buildCode(dataDarkCode, "./dist/theme-data-dark.css", false),
  buildCode(dataDarkCode, "./dist/theme-data-dark.min.css", true),
])
