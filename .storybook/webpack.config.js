const path = require("path")

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    },
    {
      test: /\.html$/,
      loaders: ["extract-loader", "html-loader"],
      include: path.resolve(__dirname, "../")
    }
  )

  return config
}
