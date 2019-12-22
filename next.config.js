module.exports = () => {
  const slug = require("remark-slug")
  const toc = require("remark-toc")

  const withCSS = require("@zeit/next-css")
  const withSass = require("@zeit/next-sass")
  const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [slug, toc]
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
