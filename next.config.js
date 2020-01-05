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

//const ThemesGeneratorPlugin = require("themes-switch/ThemesGeneratorPlugin")
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const nextConfig = {
  /*webpack: config => {
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }),
      config.plugins.push(
        new ThemesGeneratorPlugin({
          srcDir: "src",
          themesDir: "src/assets/scss",
          outputDir: "static/css",
          defaultStyleName: "project.scss"
        })
      )
    return config
  }*/
}

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
