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

const monotoneItems = [
  { id: 0, suffix: "" },
  { id: 1, suffix: "-1" },
  { id: 2, suffix: "-2" },
  { id: 3, suffix: "-3" },
  { id: 4, suffix: "-4" },
  { id: 5, suffix: "-5" },
  { id: 6, suffix: "-6" },
  { id: 7, suffix: "-7" },
  { id: 8, suffix: "-8" },
  { id: 9, suffix: "-9" }
]

const tones = { dark: "is-dark", light: "is-light" }

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

//----------------------------------------------------
// / Monotone
//----------------------------------------------------

export const monotone = () => {
  const tone = radios("Tone", tones, "is-dark")
  const toneText = tone === "is-dark" ? "ダーク" : "ライト"
  const toneWrap = tone === "is-dark" ? "demo-line-box" : "demo-paint-box"
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const align = radios("Align", alignStyles, "")
  const tagBefore = align != "" ? `<p class="text ${align}">` : ""
  const tagAfter = align != "" ? `</p>` : ""
  const contents = monotoneItems
    .map(
      item =>
        `<span class="text ${tone}${item.suffix} ${strong}"
        >${toneText}</span>`
    )
    .join("")
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
      <h2 className="demo-h2">Monotone</h2>
      <div className={toneWrap}>
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

monotone.story = { name: "Monotone" }

//----------------------------------------------------
// / Ellipsis
//----------------------------------------------------

export const ellipsis = () => {
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const tagBefore = `<p class="text is-ellipsis ${strong}">`
  const tagAfter = `</p>`
  const contents = [...Array(5)]
    .map(
      () => `テキストを端で折り返さずに、三点リーダーで省略するスタイリング。`
    )
    .join("")
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
      <h2 className="demo-h2">Ellipsis</h2>
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

ellipsis.story = { name: "Ellipsis" }

//----------------------------------------------------
// / Blockquote
//----------------------------------------------------

export const blockquote = () => {
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const align = radios("Align", alignStyles, "")
  const tagBefore = `<blockquote class="blockquote ${strong} ${align}">`
  const tagAfter = `</blockquote>`
  const contents = `引用の「blockquote」を使う場合。border-left と background-color を用いた装飾。`
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
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
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const tagBefore = `<p class="text">`
  const tagAfter = `</p>`
  const contents = `テキストの途中に<code class="code ${strong}">code</code>を表示させる。`
  const contentsWrap = (tagBefore + contents + tagAfter)
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
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
  const tagBefore = `<pre class="pre">`
  const tagAfter = `</pre>`
  const contents = `<code class="code">.my-css {
  box-sizing: border-box;
  font-family: sans-serif;
  overflow-y: scroll;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}</code>`
  const contentsWrap = tagBefore + contents + tagAfter
  const formatted = beautify.html(contentsWrap, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Text</h1>
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
