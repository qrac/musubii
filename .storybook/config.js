import { configure } from "@storybook/html"
import "../src/scss/musubii.scss"
import "../src/stories/demo.scss"
import "prismjs/themes/prism-tomorrow.css"

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module)
