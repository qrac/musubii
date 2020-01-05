const remarkSlug = require("remark-slug")
const remarkToc = require("remark-toc")
const remarkCustomBlocks = require("remark-custom-blocks")

const remarkTocOptions = {
  maxDepth: 2
}
const remarkCustomBlocksTemplate = {
  note: {
    classes: "demo-box is-note",
    title: "optional"
  },
  tips: {
    classes: "demo-box is-tips",
    title: "optional"
  },
  warning: {
    classes: "demo-box is-warning",
    title: "optional"
  }
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkSlug,
      [remarkToc, remarkTocOptions],
      [remarkCustomBlocks, remarkCustomBlocksTemplate]
    ]
  }
})
const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const withPlugins = require("next-compose-plugins")

const nextConfig = {}

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "mdx", "md"]
      }
    ],
    [withCSS],
    [withSass]
  ],
  nextConfig
)
