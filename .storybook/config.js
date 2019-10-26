import { configure, addDecorator, addParameters } from "@storybook/html"
import { withRootAttribute } from "storybook-addon-root-attribute"

import "../src/scss/musubii.scss"
import "../src/stories/demo.scss"
import "highlight.js/styles/monokai-sublime.css"

addDecorator(withRootAttribute)

addParameters({
  options: {
    panelPosition: "right" // or "bottom"
  },
  rootAttribute: {
    root: "body",
    attribute: "data-theme",
    defaultState: {
      name: "Light",
      value: "light"
    },
    states: [
      {
        name: "Dark",
        value: "dark"
      }
    ]
  }
})

configure(require.context("../src/stories", true, /\.stories\.js$/), module)
