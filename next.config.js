const withSass = require("@zeit/next-sass")
module.exports = withSass()

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"]
})
