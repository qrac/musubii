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

const beautifyHtmlOptions = {
  inline: ["i", "span"],
  indent_size: 2
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const column = number("Column", 4)
  const row = number("Row", 4)
  const style = radios("Style", tableStyles, "is-border")
  const paint = boolean("Paint", false) ? 'class="is-paint"' : ""
  const tableTagBefore = `<table class="table ${style}">`
  const tableTagAfter = `</table>`
  const theadTagBefore = `<thead>`
  const theadTagAfter = `</thead>`
  const tbodyTagBefore = `<tbody>`
  const tbodyTagAfter = `</tbody>`
  const trTagBefore = `<tr>`
  const trTagAfter = `</tr>`
  const theadTrContents = [...Array(column)]
    .map(() => `<th ${paint}>見出しセル</th>`)
    .join("")
  const theadTr = trTagBefore + theadTrContents + trTagAfter
  const thead = theadTagBefore + theadTr + theadTagAfter
  const tbodyTrContents = [...Array(column)]
    .map(() => `<td>データセル</td>`)
    .join("")
  const tbodyTr = [...Array(row)]
    .map(() => `${trTagBefore}${tbodyTrContents}${trTagAfter}`)
    .join("")
  const tbody = tbodyTagBefore + tbodyTr + tbodyTagAfter
  const contentsWrap = (tableTagBefore + thead + tbody + tableTagAfter)
    .replace(/\s+/g, " ")
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
