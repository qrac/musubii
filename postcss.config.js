const pkg = require("./package.json")
const pjt = require("./project.json")

module.exports = {
  plugins: [
    require("postcss-flexbugs-fixes"),
    require("postcss-sort-media-queries"),
    require("autoprefixer"),
    require("postcss-header")({
      header: `/* ${pjt.name} v${pkg.version} ${pkg.license} by ${pkg.author.name} */`
    })
  ]
}
