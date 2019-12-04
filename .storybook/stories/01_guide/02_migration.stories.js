//----------------------------------------------------
// Migtarion
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import DemoCode from "../../demo/components/demo-code"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babylon"
import parserScss from "prettier/parser-postcss"

export default {
  title: "Guide | Migtarion",
  decorators: [withKnobs]
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / v6.6.0 → v7.0.0
//----------------------------------------------------

export const v6tov7 = () => {
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Migtarion</h1>
      <h2 className="demo-h2">v6.6.0 → v7.0.0</h2>
      <p className="demo-p">※執筆中</p>
    </div>
  )
}

v6tov7.story = {
  name: "v6.6.0 → v7.0.0",
  parameters: {
    options: {
      showPanel: false
    }
  }
}

//----------------------------------------------------
// / v7.0.0-alpha.42 → v7.0.0
//----------------------------------------------------

export const v7alphatov7 = () => {
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Migtarion</h1>
      <h2 className="demo-h2">v7.0.0-alpha.42 → v7.0.0</h2>
      <p className="demo-p">※執筆中</p>
    </div>
  )
}

v7alphatov7.story = {
  name: "v7.0.0-α → v7.0.0",
  parameters: {
    options: {
      showPanel: false
    }
  }
}
