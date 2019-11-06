//----------------------------------------------------
// Text
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"

import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Text",
  decorators: [withKnobs]
}

const items = [
  { id: 0, role: "", text: "基本です" },
  { id: 1, role: "is-primary", text: "重要かも" },
  { id: 2, role: "is-info", text: "情報あり" },
  { id: 3, role: "is-success", text: "成功した" },
  { id: 4, role: "is-warning", text: "注意する" },
  { id: 5, role: "is-danger", text: "禁止する" }
]

const alignStyles = {
  none: "",
  left: "is-left",
  center: "is-center",
  right: "is-right"
}

const links = {
  none: "",
  normal: "is-link",
  reverse: "is-link-reverse"
}

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const align = radios("Align", alignStyles, "")
  const link = radios("Link", links, "")
  const tag = link != "" ? "a" : "span"
  const tagAttr = tag === "a" ? 'href="#"' : ""
  const alignTagBefore = align != "" ? `<p class="text ${align}">` : ""
  const alignTagAfter = align != "" ? `</p>` : ""
  const externalLink =
    boolean("External Link", false) && tag === "a"
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
  const contents = items
    .map(
      item =>
        `<${tag} class="text ${link} ${item.role} ${strong}"
        ${tagAttr} ${externalLink}>${item.text}</${tag}>`
    )
    .join("")
  const contentsWrap = (alignTagBefore + contents + alignTagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
      <h2 className="demo-h2">Basic</h2>
      <div className="demo-line-box">
        <div
          className="box"
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
