import { addParameters, addDecorator, configure } from "@storybook/react"
import { withDarkModeAttribute } from "./addon/storybook-dark-mode-attribute"

import * as themes from "./themes"

import "../src/scss/musubii.scss"
import "./style/demo.scss"

addParameters({ darkMode: themes })

addDecorator(withDarkModeAttribute)

configure(require.context("./stories", true, /\.stories\.js$/), module)
