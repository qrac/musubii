module.exports = () => {
  //const frontmatter = require("remark-frontmatter")

  const withCSS = require("@zeit/next-css")
  const withSass = require("@zeit/next-sass")
  const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
      //remarkPlugins: [frontmatter]
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
