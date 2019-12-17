const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})

module.exports = withCSS(
  withSass(
    withMDX({
      pageExtensions: ["js", "jsx", "mdx", "md"]
    })
  )
)
