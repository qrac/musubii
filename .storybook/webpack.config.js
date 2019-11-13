const path = require("path")

module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
          loader: "postcss-loader",
          options: {
            config: {
              path: "postcss.config.js"
            }
          }
        },
        { loader: "sass-loader" }
      ],
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
