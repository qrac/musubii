import React from "react"
import beautify from "js-beautify"

import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, text: "ボタン A", classes: "is-plain" },
  { id: 1, text: "ボタン B", classes: "is-plain is-primary" },
  { id: 2, text: "ボタン C", classes: "is-plain is-info is-floating" },
  { id: 3, text: "ボタン D", classes: "is-outline is-success is-round is-sm" },
  { id: 4, text: "ボタン E", classes: "is-outline is-warning is-strong is-xs" },
  {
    id: 4,
    text: "ボタンF",
    classes: "is-outline is-danger is-0 is-angle-right is-lg"
  }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewBasicMarkup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(
        item =>
          `<button class="button ${item.classes}" type="button">${item.text}</button>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-line">
          <div
            className="box is-flex is-bottom is-space-right-xs is-space-bottom-xs is-margin-bottom-minus-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
