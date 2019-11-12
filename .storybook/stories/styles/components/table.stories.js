//----------------------------------------------------
// Table
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Table",
  decorators: [withKnobs]
}

const tableStyles = {
  border: "is-border",
  line: "is-line",
  outline: "is-outline"
}

const alignStyles = {
  none: "",
  left: "is-left",
  center: "is-center",
  right: "is-right"
}

const beautifyHtmlOptions = {
  inline: ["i", "span"],
  indent_size: 2
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const column = number("Column", 4, { min: 1 })
  const row = number("Row", 4, { min: 1 })
  const style = radios("Style", tableStyles, "is-border")
  const paint = boolean("Paint", false) ? "is-paint" : ""
  const stripe = boolean("Stripe", false) ? "is-stripe" : ""
  const align = radios("Align", alignStyles, "")
  const thAddClass = paint || align != "" ? `class="${paint} ${align}"` : ""
  const tdAddClass = paint || align != "" ? `class="${align}"` : ""
  const tableTagBefore = `<table class="table ${style} ${stripe}">`
  const tableTagAfter = `</table>`
  const theadTrContents = [...Array(column)]
    .map(() => `<th ${thAddClass}>見出しセル</th>`)
    .join("")
  const theadTr = `<tr>${theadTrContents}</tr>`
  const thead = `<thead>${theadTr}</thead>`
  const tbodyTrContents = [...Array(column)]
    .map(() => `<td ${tdAddClass}>データセル</td>`)
    .join("")
  const tbodyTr = [...Array(row)]
    .map(() => `<tr>${tbodyTrContents}</tr>`)
    .join("")
  const tbody = `<tbody>${tbodyTr}</tbody>`
  const contentsWrap = (tableTagBefore + thead + tbody + tableTagAfter)
    .replace(/\s+/g, " ")
    .replace(/\"\s/g, '"')
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Table</h1>
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
