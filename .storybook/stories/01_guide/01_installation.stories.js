//----------------------------------------------------
// Installation
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import pkg from "../../../package.json"
import DemoCode from "../../demo/components/demo-code"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babylon"
import parserScss from "prettier/parser-postcss"

export default {
  title: "Guide | Installation",
  decorators: [withKnobs]
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / npm
//----------------------------------------------------

export const npm = () => {
  const codeNpmScripts = `
    {
      "scripts": {
        "build": "node-sass ./src/scss -o ./dist/assets/css --include-path ./node_modules --output-style expanded"
      }
    }
  `
  const formattedCodeNpmScripts = prettier.format(codeNpmScripts, {
    parser: "json",
    plugins: [parserBabel]
  })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">npm</h2>
      <p className="demo-p">
        MUSUBii のインストールは npm または Yarn で行います。
      </p>
      <DemoCode language="bash" code={`npm install musubii`} />
      <DemoCode language="bash" code={`yarn add musubii`} />
      <h3 className="demo-h3">CSS Path</h3>
      <p className="demo-p">
        CSS ファイルは <code>package.json</code> で main
        に設定されています。※CSS Variables は有効化できません
      </p>
      <DemoCode language="bash" code={`musubii/dist/musubii.css`} />
      <DemoCode language="bash" code={`musubii/dist/musubii.min.css`} />
      <h3 className="demo-h3">SCSS Path</h3>
      <p className="demo-p">
        SCSS ファイルは、全体用のコンフィグとスタイルを分けて読み込めます。
      </p>
      <DemoCode
        language="bash"
        code={`musubii/src/scss/configs/_import.scss`}
      />
      <DemoCode language="bash" code={`musubii/src/scss/styles/_import.scss`} />
      <p className="demo-p">分ける必要が無ければ一括で読み込みます。</p>
      <DemoCode language="bash" code={`musubii/src/scss/musubii.scss`} />
      <h3 className="demo-h3">CLI Build</h3>
      <p className="demo-p">
        npm scripts でビルドするには <code>node-sass</code> を利用します。
      </p>
      <DemoCode language="bash" code={formattedCodeNpmScripts} />
    </div>
  )
}

npm.story = {
  name: "npm",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / gulp
//----------------------------------------------------

export const gulp = () => {
  const codeConfig = `
    const gulp = require("gulp")
    const sass = require("gulp-sass")

    const sassOptions = {
      includePaths: "./node_modules/"
    }

    function buildSCSS() {
      return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass(sassOptions))
        .pipe(gulp.dest("dist/assets/css"))
    }

    gulp.task("default", buildSCSS)
  `
  const formattedCodeConfig = prettier.format(codeConfig, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeScss = `
    // Configs
    // 変数をオーバーライドする場合は configs より先に同名で定義します
    // 例えば $option-css-variables: true で CSS Variables を有効化
    @import "musubii/src/scss/configs/_import.scss";

    // Styles
    @import "musubii/src/scss/styles/_import.scss";
  `
  const formattedCodeScss = prettier.format(codeScss, {
    parser: "postcss",
    plugins: [parserScss]
  })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">gulp</h2>
      <p className="demo-p">
        MUSUBii を gulp
        で使う場合は、必要なライブラリをインストールして設定を行います。
      </p>
      <DemoCode
        language="bash"
        code={`npm install --save-dev gulp gulp-sass`}
      />
      <DemoCode language="bash" code={`yarn add --dev gulp gulp-sass`} />
      <h3 className="demo-h3">Setting</h3>
      <p className="demo-p">
        <code>gulpfile.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeConfig} />
      <h3 className="demo-h3">SCSS</h3>
      <p className="demo-p">
        <code>src/scss/project.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScss} />
    </div>
  )
}

gulp.story = {
  name: "gulp",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / Nuxt
//----------------------------------------------------

export const nuxt = () => {
  const codeConfig = `
    module.exports = {
      srcDir: "src",
      modules: [
        "@nuxtjs/style-resources"
      ],
      styleResources: {
        scss: ["~/assets/scss/configs.scss"]
      },
      css: [
        "~/assets/scss/styles.scss"
      ]
    }
  `
  const formattedCodeConfig = prettier.format(codeConfig, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeScssConfigs = `
    // Configs
    // 変数をオーバーライドする場合は configs より先に同名で定義します
    // 例えば $option-css-variables: true で CSS Variables を有効化
    @import "~musubii/src/scss/configs/_import.scss";
  `
  const formattedCodeScssConfigs = prettier.format(codeScssConfigs, {
    parser: "postcss",
    plugins: [parserScss]
  })
  const codeScssStyles = `
    // Styles
    @import "~musubii/src/scss/styles/_import.scss";
  `
  const formattedCodeScssStyles = prettier.format(codeScssStyles, {
    parser: "postcss",
    plugins: [parserScss]
  })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">Nuxt</h2>
      <p className="demo-p">
        MUSUBii を Nuxt.js
        で使う場合は、必要なライブラリをインストールして設定を行います。
      </p>
      <DemoCode
        language="bash"
        code={`npm install --save-dev nuxt @nuxtjs/style-resources node-sass sass-loader`}
      />
      <DemoCode
        language="bash"
        code={`yarn add --dev nuxt @nuxtjs/style-resources node-sass sass-loader`}
      />
      <h3 className="demo-h3">Setting</h3>
      <p className="demo-p">
        <code>nuxt.config.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeConfig} />
      <h3 className="demo-h3">SCSS</h3>
      <p className="demo-p">
        <code>src/assets/scss/configs.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssConfigs} />
      <p className="demo-p">
        <code>src/assets/scss/styles.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssStyles} />
    </div>
  )
}

nuxt.story = {
  name: "Nuxt",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / Gridsome
//----------------------------------------------------

export const gridsome = () => {
  const codeConfig = `
    module.exports = {
      plugins: [
        {
          use: "gridsome-plugin-sass-resources-loader",
          options: {
            resources: "@/assets/scss/configs.scss"
          }
        }
      ]
    }
  `
  const formattedCodeConfig = prettier.format(codeConfig, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeMain = `
    // Import Styles
    import "~/assets/scss/styles.scss"

    // Layouts
    import DefaultLayout from "~/layouts/Default.vue"

    // Global components
    export default function(Vue, { router, head, isClient }) {
      Vue.component("Layout", DefaultLayout)
    }
  `
  const formattedCodeMain = prettier.format(codeMain, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeScssConfigs = `
    // Configs
    // 変数をオーバーライドする場合は configs より先に同名で定義します
    // 例えば $option-css-variables: true で CSS Variables を有効化
    @import "~musubii/src/scss/configs/_import.scss";
  `
  const formattedCodeScssConfigs = prettier.format(codeScssConfigs, {
    parser: "postcss",
    plugins: [parserScss]
  })
  const codeScssStyles = `
    // Styles
    @import "~musubii/src/scss/styles/_import.scss";
  `
  const formattedCodeScssStyles = prettier.format(codeScssStyles, {
    parser: "postcss",
    plugins: [parserScss]
  })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">Gridsome</h2>
      <p className="demo-p">
        MUSUBii を Gridsome
        で使う場合は、必要なライブラリをインストールして設定を行います。
      </p>
      <DemoCode
        language="bash"
        code={`npm install --save-dev gridsome gridsome-plugin-sass-resources-loader node-sass sass-loader`}
      />
      <DemoCode
        language="bash"
        code={`yarn add --dev gridsome gridsome-plugin-sass-resources-loader node-sass sass-loader`}
      />
      <h3 className="demo-h3">Setting</h3>
      <p className="demo-p">
        <code>gridsome.config.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeConfig} />
      <p className="demo-p">
        <code>src/main.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeMain} />
      <h3 className="demo-h3">SCSS</h3>
      <p className="demo-p">
        <code>src/assets/scss/configs.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssConfigs} />
      <p className="demo-p">
        <code>src/assets/scss/styles.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssStyles} />
    </div>
  )
}

gridsome.story = {
  name: "Gridsome",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / Gatsby
//----------------------------------------------------

export const gatsby = () => {
  const codeConfig = `
    module.exports = {
      plugins: [
        "gatsby-plugin-sass",
        {
          resolve: "gatsby-plugin-sass-resources",
          options: {
            resources: ['src/assets/scss/configs.scss']
          }
        }
      ]
    }
  `
  const formattedCodeConfig = prettier.format(codeConfig, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeBrowser = `
    // Import Styles
    import("src/assets/scss/styles.scss")
  `
  const formattedCodeBrowser = prettier.format(codeBrowser, {
    parser: "babel",
    plugins: [parserBabel],
    semi: false
  })
  const codeScssConfigs = `
    // Configs
    // 変数をオーバーライドする場合は configs より先に同名で定義します
    // 例えば $option-css-variables: true で CSS Variables を有効化
    @import "~musubii/src/scss/configs/_import.scss";
  `
  const formattedCodeScssConfigs = prettier.format(codeScssConfigs, {
    parser: "postcss",
    plugins: [parserScss]
  })
  const codeScssStyles = `
    // Styles
    @import "~musubii/src/scss/styles/_import.scss";
  `
  const formattedCodeScssStyles = prettier.format(codeScssStyles, {
    parser: "postcss",
    plugins: [parserScss]
  })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">Gatsby</h2>
      <p className="demo-p">
        MUSUBii を Gatsby.js
        で使う場合は、必要なライブラリをインストールして設定を行います。
      </p>
      <DemoCode
        language="bash"
        code={`npm install --save-dev gatsby gatsby-plugin-sass gatsby-plugin-sass-resources node-sass`}
      />
      <DemoCode
        language="bash"
        code={`yarn add --dev gatsby gatsby-plugin-sass gatsby-plugin-sass-resources node-sass`}
      />
      <h3 className="demo-h3">Setting</h3>
      <p className="demo-p">
        <code>gatsby-config.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeConfig} />
      <p className="demo-p">
        <code>gatsby-browser.js</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeBrowser} />
      <h3 className="demo-h3">SCSS</h3>
      <p className="demo-p">
        <code>src/assets/scss/configs.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssConfigs} />
      <p className="demo-p">
        <code>src/assets/scss/styles.scss</code>
      </p>
      <DemoCode language="javascript" code={formattedCodeScssStyles} />
    </div>
  )
}

gatsby.story = {
  name: "Gatsby",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / CDN
//----------------------------------------------------

export const cdn = () => {
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">CDN</h2>
      <p className="demo-p">
        MUSUBii を手っ取り早く使う場合は CDN リンクを HTML に貼ります。 ※CSS
        Variables は有効化できません
      </p>
      <DemoCode
        language="html"
        code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/musubii@${pkg.version}/dist/musubii.min.css">`}
      />
    </div>
  )
}

cdn.story = {
  name: "CDN",
  parameters: {
    options: {
      showPanel: false
    }
  }
}
