//----------------------------------------------------
// Installation
//----------------------------------------------------

import React from "react"
import ReactMarkdown from "react-markdown"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import pkg from "../../../../package.json"

export default {
  title: "Guide | Installation",
  decorators: [withKnobs]
}

//----------------------------------------------------
// / npm
//----------------------------------------------------

import mdNpm from "./npm.md"

export const npm = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdNpm} />
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
// / Nuxt
//----------------------------------------------------

import mdNuxt from "./nuxt.md"

export const nuxt = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdNuxt} />
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

import mdGridsome from "./gridsome.md"

export const gridsome = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdGridsome} />
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

import mdGatsby from "./gatsby.md"

export const gatsby = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdGatsby} />
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
// / gulp
//----------------------------------------------------

import mdGulp from "./gulp.md"

export const gulp = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdGulp} />
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
// / CDN
//----------------------------------------------------

import mdCdn from "./cdn.md"

export const cdn = () => {
  return (
    <div className="demo-space-box">
      <ReactMarkdown source={mdCdn} />
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
