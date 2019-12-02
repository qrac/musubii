//----------------------------------------------------
// iframe
//----------------------------------------------------

import React from "react"
import { withKnobs, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / iframe",
  decorators: [withKnobs]
}

const aspects = {
  "16 x 9": "is-aspect-16x9"
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
  const aspect = radios("Aspect Ratio", aspects, "is-aspect-16x9")
  const content = `<div
    class="iframe-wrap ${aspect}">
      <iframe class="iframe" width="560" height="315"
        src="https://www.youtube.com/embed/r5UJN4j9FQY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
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
