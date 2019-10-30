import { configure, addParameters, addDecorator } from "@storybook/html"

import theme from "./theme"

import "../src/scss/musubii.scss"
import "./style/demo.scss"

configure(require.context("./stories", true, /\.stories\.js$/), module)

addParameters({
  options: {
    theme: theme
    //panelPosition: "bottom" // or "right"
  }
})

//addDecorator(withRootAttribute)
