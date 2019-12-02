//----------------------------------------------------
// WYSIWYG
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / WYSIWYG",
  decorators: [withKnobs]
}

const listStyles = {
  disc: "ul",
  decimal: "ol"
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
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const content = `<p
    >WYSIWYGには、<strong>強調表示</strong>・<em>イタリック表示</em
    >・<del>打ち消し線</del>などのデフォルトスタイルを用いれます。</p>`
  const contents = (wysiwygBefore + content + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Basic</h2>
      <div className="demo-line-box">
        <div
          className="box is-space-sm"
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
// / Link
//----------------------------------------------------

export const link = () => {
  const reverse = boolean("Link Reverse", false) ? "is-link-reverse" : ""
  const wysiwygBefore = `<div class="wysiwyg ${reverse}">`
  const wysiwygAfter = `</div>`
  const content = `<p
    >WYSIWYG内の<a href="#"
    >Aタグ</a>は自動的に装飾され、下線効果は反転させられます。</p>`
  const contents = (wysiwygBefore + content + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Link</h2>
      <div className="demo-line-box">
        <div
          className="box is-space-sm"
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

link.story = { name: "Link" }

//----------------------------------------------------
// / Blockquote
//----------------------------------------------------

export const blockquote = () => {
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const content = `<blockquote
    >WYSIWYG内で引用のblockquoteタグを使った場合の装飾。</blockquote>`
  const contents = (wysiwygBefore + content + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Blockquote</h2>
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

blockquote.story = { name: "Blockquote" }

//----------------------------------------------------
// / Code
//----------------------------------------------------

export const code = () => {
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const content = `<p
    >WYSIWYG内に<code>code</code>を表示させる。</p>`
  const contents = (wysiwygBefore + content + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Code</h2>
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

code.story = { name: "Code" }

//----------------------------------------------------
// / Pre
//----------------------------------------------------

export const pre = () => {
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const content = `<pre><code>.my-css {
  box-sizing: border-box;
  font-family: sans-serif;
  overflow-y: scroll;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}</code></pre>`
  const contents = wysiwygBefore + content + wysiwygAfter
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Pre</h2>
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

pre.story = { name: "Pre" }

//----------------------------------------------------
// / Heading
//----------------------------------------------------

export const heading = () => {
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const content = [...Array(6)]
    .map((_, i) => `<h${i + 1}>${i + 1}番目に大きな見出し</h${i + 1}>`)
    .join("")
  const contents = (wysiwygBefore + content + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Heading</h2>
      <div className="demo-line-box">
        <div
          className="box is-space-sm"
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

heading.story = { name: "Heading" }

//----------------------------------------------------
// / List
//----------------------------------------------------

export const list = () => {
  const style = radios("Style", listStyles, "ul")
  const nest = boolean("Nest", false)
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const tagBefore = `<${style}>`
  const tagAfter = `</${style}>`
  const nestContent = [...Array(4)]
    .map(
      () =>
        `<li>リストを入れ子にした場合は、その分インデントを追加して構造を見せる</li>`
    )
    .join("")
  const content = [...Array(4)]
    .map(
      (_, i) =>
        `<li>リストはインデントしてテキストが折り返した場合に読みやすくする${
          nest && i === 3 ? tagBefore + nestContent + tagAfter : ""
        }</li>`
    )
    .join("")
  const contentWrap = (tagBefore + content + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const contents = (wysiwygBefore + contentWrap + wysiwygAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">List</h2>
      <div className="demo-line-box">
        <div
          className="box is-space-sm"
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

list.story = { name: "List" }

//----------------------------------------------------
// / Description
//----------------------------------------------------

export const descriptionList = () => {
  const row = number("Row", 4, { min: 1 })
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const dlTagBefore = `<dl>`
  const dlTagAfter = `</dl>`
  const content = [...Array(row)]
    .map(
      () => `<dt>定義リストタイトル</dt><dd
      >これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。</dd>`
    )
    .join("")
  const contents = (
    wysiwygBefore +
    dlTagBefore +
    content +
    dlTagAfter +
    wysiwygAfter
  )
    .replace(/\s+/g, " ")
    .replace(/\"\s/g, '"')
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Description List</h2>
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

descriptionList.story = { name: "Description List" }

//----------------------------------------------------
// / Table
//----------------------------------------------------

export const table = () => {
  const column = number("Column", 4, { min: 1 })
  const row = number("Row", 4, { min: 1 })
  const wysiwygBefore = `<div class="wysiwyg">`
  const wysiwygAfter = `</div>`
  const tableTagBefore = `<table>`
  const tableTagAfter = `</table>`
  const theadTrContents = [...Array(column)]
    .map(() => `<th>見出しセル</th>`)
    .join("")
  const theadTr = `<tr>${theadTrContents}</tr>`
  const thead = `<thead>${theadTr}</thead>`
  const tbodyTrContents = [...Array(column)]
    .map(() => `<td>データセル</td>`)
    .join("")
  const tbodyTr = [...Array(row)]
    .map(() => `<tr>${tbodyTrContents}</tr>`)
    .join("")
  const tbody = `<tbody>${tbodyTr}</tbody>`
  const contents = (
    wysiwygBefore +
    tableTagBefore +
    thead +
    tbody +
    tableTagAfter +
    wysiwygAfter
  )
    .replace(/\s+/g, " ")
    .replace(/\"\s/g, '"')
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">WYSIWYG</h1>
      <h2 className="demo-h2">Table</h2>
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

table.story = { name: "Table" }
