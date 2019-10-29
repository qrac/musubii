const path = require("path")

module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {}
        }
      ]
    }
  )

  return config
}
