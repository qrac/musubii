import { configure, addParameters, addDecorator } from "@storybook/react"
import { withDarkModeAttribute } from "./addon/storybook-dark-mode-attribute"

import * as themes from "./themes"

import "../src/scss/musubii.scss"
import "./style/demo.scss"

configure(require.context("./stories", true, /\.stories\.js$/), module)

addParameters({ darkMode: themes })

addDecorator(withDarkModeAttribute)
