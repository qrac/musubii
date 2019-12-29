module.exports = () => {
  const slug = require("remark-slug")
  const toc = require("remark-toc")
  const customBlocks = require("remark-custom-blocks")

  const customBlocksTemplate = {
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

  const withCSS = require("@zeit/next-css")
  const withSass = require("@zeit/next-sass")
  const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [slug, toc, [customBlocks, customBlocksTemplate]]
    }
  })

  return withCSS(
    withSass(
      withMDX({
        pageExtensions: ["js", "jsx", "mdx", "md"]
      })
    )
  )
}
