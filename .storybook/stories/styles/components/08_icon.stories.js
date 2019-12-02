//----------------------------------------------------
// Icon
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Icon",
  decorators: [withKnobs]
}

const items = [
  { id: 0, role: "", icon: "angle-left" },
  { id: 1, role: "is-primary", icon: "check" },
  { id: 2, role: "is-info", icon: "info-circle" },
  { id: 3, role: "is-success", icon: "save" },
  { id: 4, role: "is-warning", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", icon: "times" }
]

const beautifyHtmlOptions = {
  inline: ["span"],
  indent_size: 2
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const fit = boolean("Fit", false) ? "is-fit" : ""
  const contents = items
    .map(
      item =>
        `<i aria-hidden="true" class="fas fa-${item.icon} ${item.role} ${fit}"></i>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Icon</h1>
      <h2 className="demo-h2">Basic</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-row-xs is-space-column-xs"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

basic.story = { name: "Basic" }
