import { addParameters, configure } from "@storybook/html"

import "../src/scss/musubii.scss"
import "../src/stories/demo.scss"
import "highlight.js/styles/monokai-sublime.css"

addParameters({
  options: {
    panelPosition: "right" // or "bottom"
  }
})

configure(require.context("../src/stories", true, /\.stories\.js$/), module)
