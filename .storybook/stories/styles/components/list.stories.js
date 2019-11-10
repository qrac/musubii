//----------------------------------------------------
// List
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / List",
  decorators: [withKnobs]
}

const listStyles = {
  disc: "is-disc",
  circle: "is-circle",
  decimal: "is-decimal"
}

const beautifyHtmlOptions = {
  inline: ["i", "span"],
  indent_size: 2
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const style = radios("Style", listStyles, "is-disc")
  const nest = boolean("Nest", false)
  const tagBefore = `<ul class="list ${style}">`
  const tagAfter = `</ul>`
  const nestContents = [...Array(4)]
    .map(
      () =>
        `<li class="item">リストを入れ子にした場合は、その分インデントを追加して構造を見せる</li>`
    )
    .join("")
  const contents = [...Array(4)]
    .map(
      (_, i) =>
        `<li class="item">リストはインデントしてテキストが折り返した場合に読みやすくする${
          nest && i === 3 ? tagBefore + nestContents + tagAfter : ""
        }</li>`
    )
    .join("")
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">List</h1>
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

//----------------------------------------------------
// / Note
//----------------------------------------------------

export const note = () => {
  const nest = boolean("Nest", false)
  const tagBefore = `<ul class="list is-note">`
  const tagAfter = `</ul>`
  const nestContents = [...Array(4)]
    .map(
      () =>
        `<li class="item"><span>※</span><span>米印など自由な見出しをインラインで置きつつインデント</span></li>`
    )
    .join("")
  const contents = [...Array(4)]
    .map(
      (_, i) =>
        `<li class="item"><span>※</span><span>米印など自由な見出しをインラインで置きつつインデント</span>${
          nest && i === 3 ? tagBefore + nestContents + tagAfter : ""
        }</li>`
    )
    .join("")
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">List</h1>
      <h2 className="demo-h2">Note</h2>
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

note.story = { name: "Note" }
