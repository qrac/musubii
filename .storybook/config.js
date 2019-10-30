import { configure, addDecorator, addParameters } from "@storybook/html"
import { withRootAttribute } from "storybook-addon-root-attribute"

import theme from "./theme"

import "../src/scss/musubii.scss"
import "./demo.scss"

addDecorator(withRootAttribute)

addParameters({
  options: {
    theme: theme,
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
