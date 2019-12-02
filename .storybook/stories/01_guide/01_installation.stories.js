//----------------------------------------------------
// Installation
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import pkg from "../../../package.json"

import copyCodeBlock from "@pickra/copy-code-block"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Guide | Installation",
  decorators: [withKnobs]
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const installNpm = copyCodeBlock(`npm install musubii`, {
    lang: "bash"
  })
  const installYarn = copyCodeBlock(`yarn add musubii`, {
    lang: "bash"
  })
  const installCdn = copyCodeBlock(
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/musubii@${pkg.version}/dist/musubii.min.css">`,
    {
      lang: "html"
    }
  )
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">Basic</h2>
      <p class="demo-p">
        MUSUBii のインストールは npm または Yarn で行います。
      </p>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: installNpm }}
      ></div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: installYarn }}
      ></div>
      <h2 className="demo-h3">CDN</h2>
      <p class="demo-p">手っ取り早く使うなら CDN。※CSS Variablesは含みません</p>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: installCdn }}
      ></div>
    </div>
  )
}

basic.story = {
  name: "Basic",
  parameters: {
    options: {
      showPanel: false
    }
  }
}
