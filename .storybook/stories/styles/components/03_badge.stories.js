//----------------------------------------------------
// Badge
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Badge",
  decorators: [withKnobs]
}

const items = [
  { id: 0, role: "", text: "任意", icon: "tag" },
  { id: 1, role: "is-primary", text: "推奨", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info" },
  { id: 3, role: "is-success", text: "重要", icon: "check" },
  { id: 4, role: "is-warning", text: "注意", icon: "info" },
  { id: 5, role: "is-danger", text: "必須", icon: "minus" }
]

const styles = {
  plain: "is-plain",
  outline: "is-outline"
}

const tags = {
  span: "span",
  div: "div"
}

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const style = radios("Style", styles, "is-plain")
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "is-disabled" : ""
  const tag = radios("Tag", tags, "span")
  const contents = items
    .map(
      item =>
        `<${tag} class="badge ${style} ${item.role} ${strong} ${round} ${disabled}"
        >${item.text}</${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Badge</h1>
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

//----------------------------------------------------
// / Square
//----------------------------------------------------

export const square = () => {
  const style = radios("Style", styles, "is-plain")
  const disabled = boolean("Disabled", false) ? "is-disabled" : ""
  const tag = radios("Tag", tags, "span")
  const contents = items
    .map(
      item =>
        `<${tag} class="badge ${style} is-square ${item.role} ${disabled}"
        ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Badge</h1>
      <h2 className="demo-h2">Square</h2>
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

square.story = { name: "Square" }

//----------------------------------------------------
// / Circle
//----------------------------------------------------

export const circle = () => {
  const style = radios("Style", styles, "is-plain")
  const disabled = boolean("Disabled", false) ? "is-disabled" : ""
  const tag = radios("Tag", tags, "span")
  const contents = items
    .map(
      item =>
        `<${tag} class="badge ${style} is-circle ${item.role} ${disabled}"
        ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Badge</h1>
      <h2 className="demo-h2">Circle</h2>
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

circle.story = { name: "Circle" }
