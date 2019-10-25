import { configure } from "@storybook/html"
import "../src/scss/musubii.scss"
import "../src/stories/demo.scss"
import "highlight.js/styles/monokai-sublime.css"

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module)
