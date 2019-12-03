//----------------------------------------------------
// Installation
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import pkg from "../../../package.json"
import DemoCode from "../../demo/components/demo-code"

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
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Installation</h1>
      <h2 className="demo-h2">Basic</h2>
      <p className="demo-p">
        MUSUBii のインストールは npm または Yarn で行います。
      </p>
      <DemoCode language="bash" code={`npm install musubii`} />
      <DemoCode language="bash" code={`yarn add musubii`} />
      <h2 className="demo-h3">CDN</h2>
      <p className="demo-p">
        手っ取り早く使うなら CDN。※CSS Variablesは含みません
      </p>
      <DemoCode
        language="html"
        code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/musubii@${pkg.version}/dist/musubii.min.css">`}
      />
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
