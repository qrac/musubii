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
  title: "Components | Modules / Button",
  decorators: [withKnobs]
}

const styles = {
  Plain: "is-plain",
  Outline: "is-outline",
  Melt: "is-melt"
}

const items = [
  { id: 0, role: "", text: "戻る", icon: "angle-left" },
  { id: 1, role: "is-primary", text: "決定", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info-circle" },
  { id: 3, role: "is-success", text: "登録", icon: "save" },
  { id: 4, role: "is-warning", text: "注意", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", text: "削除", icon: "times" }
]

const beautifyHtmlOptions = {
  inline: ["span", "i"],
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
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contentsView = items.map(item => (
    <button
      key={item.id}
      className={["button", style, item.role, strong, round, floating]
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/g, "")}
      type="button"
      disabled={disabled}
    >
      {item.text}
    </button>
  ))
  const contentsCode = items
    .map(
      item =>
        `<button
          class="button ${style} ${item.role} ${strong} ${round} ${floating}"
          type="button"
          ${disabled}
        >${item.text}</button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  /*const formattedCode = prettier.format(contentsCode, {
    parser: "html",
    plugins: [parserHtml],
    htmlWhitespaceSensitivity: "ignore"
  })*/
  const formattedCode = beautify.html(contentsCode, beautifyHtmlOptions)
  const highlightCode = copyCodeBlock(formattedCode, { lang: "html" })
  return (
    <div className="box is-space-sm">
      <div className="box is-flex is-space-row-xs is-space-column-xs">
        {contentsView}
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlightCode }}
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
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contentsView = items.map(item => (
    <button
      key={item.id}
      className={["button", style, "is-square", item.role, floating]
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/g, "")}
      type="button"
      disabled={disabled}
    >
      <i
        aria-hidden="true"
        className={["fas", "fa-" + item.icon].join(" ")}
      ></i>
    </button>
  ))
  const contentsCode = items
    .map(
      item =>
        `<button
          class="button ${style} is-square ${item.role} ${floating}"
          type="button"
          ${disabled}
        ><i aria-hidden="true" class="fas fa-${item.icon}"></i></button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formattedCode = beautify.html(contentsCode, beautifyHtmlOptions)
  const highlightCode = copyCodeBlock(formattedCode, { lang: "html" })
  return (
    <div className="box is-space-sm">
      <div className="box is-flex is-space-row-xs is-space-column-xs">
        {contentsView}
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlightCode }}
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
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contentsView = items.map(item => (
    <button
      key={item.id}
      className={["button", style, "is-circle", item.role, floating]
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/g, "")}
      type="button"
      disabled={disabled}
    >
      <i
        aria-hidden="true"
        className={["fas", "fa-" + item.icon].join(" ")}
      ></i>
    </button>
  ))
  const contentsCode = items
    .map(
      item =>
        `<button
          class="button ${style} is-circle ${item.role} ${floating}"
          type="button"
          ${disabled}
        ><i aria-hidden="true" class="fas fa-${item.icon}"></i></button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formattedCode = beautify.html(contentsCode, beautifyHtmlOptions)
  const highlightCode = copyCodeBlock(formattedCode, { lang: "html" })
  return (
    <div className="box is-space-sm">
      <div className="box is-flex is-space-row-xs is-space-column-xs">
        {contentsView}
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlightCode }}
      ></div>
    </div>
  )
}
circle.story = { name: "Circle" }
