# Installation

## Gatsby

MUSUBii を Gatsby.js で使う場合は、必要なライブラリをインストールして設定を行います。

```bash
npm install --save-dev gatsby gatsby-plugin-sass gatsby-plugin-sass-resources node-sass
```

```bash
yarn add --dev gatsby gatsby-plugin-sass gatsby-plugin-sass-resources node-sass
```

### Setting

`gatsby-config.js`

```js
module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-sass-resources",
      options: {
        resources: ["src/assets/scss/configs.scss"]
      }
    }
  ]
}
```

`gatsby-browser.js`

```js
// Import Styles
import("src/assets/scss/styles.scss")
```

### SCSS

`src/assets/scss/configs.scss`

```scss
// Configs
// 変数をオーバーライドする場合は configs より先に同名で定義します
// 例えば $option-css-variables: true で CSS Variables を有効化
@import "~musubii/src/scss/configs/_import.scss";
```

`src/assets/scss/styles.scss`

```scss
// Styles
@import "~musubii/src/scss/styles/_import.scss";
```
