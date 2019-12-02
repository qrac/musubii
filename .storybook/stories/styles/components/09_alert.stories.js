//----------------------------------------------------
// Alert
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Alert",
  decorators: [withKnobs]
}

const items = [
  {
    id: 0,
    role: "",
    text: "WordPressプラグインの設定へようこそ！",
    icon: "thumbs-up"
  },
  {
    id: 1,
    role: "is-primary",
    text: "WordPressプラグインの設定へようこそ！",
    icon: "thumbs-up"
  },
  {
    id: 2,
    role: "is-info",
    text: "プラグインに関するチュートリアルはこちら。",
    icon: "info-circle"
  },
  {
    id: 3,
    role: "is-success",
    text: "プラグインの設定は自動的に保存されました。",
    icon: "check"
  },
  {
    id: 4,
    role: "is-warning",
    text: "プラグインはアクティベートされていません。",
    icon: "exclamation-triangle"
  },
  {
    id: 5,
    role: "is-danger",
    text: "プラグインは削除されました。",
    icon: "times"
  }
]

const tags = {
  div: "div",
  anchor: "a"
}

const beautifyHtmlOptions = {
  inline: ["strong"],
  indent_size: 2
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Basic
//----------------------------------------------------

export const basic = () => {
  const tag = radios("Tag", tags, "div")
  const tagAttr = tag === "a" ? 'href="#"' : ""
  const externalLink =
    boolean("External Link", false) && tag === "a"
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
  const contents = items
    .map(
      item =>
        `<${tag} class="alert ${item.role}"
          ${tagAttr} ${externalLink}
          ><i aria-hidden="true" class="fas fa-${item.icon} is-fit ${item.role}"></i
          ><span class="text ${item.role}">${item.text}</span></${tag}>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Alert</h1>
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
