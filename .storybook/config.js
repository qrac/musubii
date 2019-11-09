import { addParameters, addDecorator, configure } from "@storybook/react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withDarkModeAttribute } from "./addon/storybook-dark-mode-attribute"

import * as themes from "./themes"

import "../src/scss/musubii.scss"
import "./style/demo.scss"

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  darkMode: themes
})

addDecorator(withDarkModeAttribute)

configure(require.context("./stories", true, /\.stories\.js$/), module)
