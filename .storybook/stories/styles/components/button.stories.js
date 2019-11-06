//----------------------------------------------------
// Button
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"

//import prettier from "prettier/standalone"
//import parserHtml from "prettier/parser-html"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Button",
  decorators: [withKnobs]
}

const items = [
  { id: 0, role: "", text: "戻る", icon: "angle-left" },
  { id: 1, role: "is-primary", text: "決定", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info-circle" },
  { id: 3, role: "is-success", text: "登録", icon: "save" },
  { id: 4, role: "is-warning", text: "注意", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", text: "削除", icon: "times" }
]

const styles = {
  plain: "is-plain",
  outline: "is-outline",
  melt: "is-melt"
}

const angles = {
  none: "",
  right: "is-angle-right",
  left: "is-angle-left",
  "right up": "is-angle-right is-angle-up",
  "right down": "is-angle-right is-angle-down",
  "left up": "is-angle-left is-angle-up",
  "left down": "is-angle-left is-angle-down"
}

const tags = {
  anchor: "a",
  button: "button"
}

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const style = radios("Style", styles, "is-plain")
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const round = boolean("Round", false) ? "is-round" : ""
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false)
  const angle = radios("Angle", angles, "")
  const tag = radios("Tag", tags, "a")
  const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
  const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
  const disabledAttr = disabled && tag === "button" ? "disabled" : ""
  const externalLink =
    boolean("External Link", false) && tag === "a"
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
  const contents = items
    .map(
      item =>
        `<${tag} class="button ${style} ${item.role} ${strong} ${round} ${floating} ${angle} ${disabledClass}"
          ${tagAttr} ${externalLink} ${disabledAttr}>${item.text}</${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  /*const formattedCode = prettier.format(contentsCode, {
    parser: "html",
    plugins: [parserHtml],
    htmlWhitespaceSensitivity: "ignore"
  })*/
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Button</h1>
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
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false)
  const tag = radios("Tag", tags, "a")
  const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
  const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
  const disabledAttr = disabled && tag === "button" ? "disabled" : ""
  const externalLink =
    boolean("External Link", false) && tag === "a"
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
  const contents = items
    .map(
      item =>
        `<${tag} class="button ${style} is-square ${item.role} ${floating} ${disabledClass}"
          ${tagAttr} ${externalLink} ${disabledAttr}
          ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Button</h1>
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
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false)
  const tag = radios("Tag", tags, "a")
  const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
  const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
  const disabledAttr = disabled && tag === "button" ? "disabled" : ""
  const externalLink =
    boolean("External Link", false) && tag === "a"
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
  const contents = items
    .map(
      item =>
        `<${tag} class="button ${style} is-circle ${item.role} ${floating} ${disabledClass}"
          ${tagAttr} ${externalLink} ${disabledAttr}
          ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Button</h1>
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
