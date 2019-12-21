import React from "react"
import beautify from "js-beautify"

import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "戻る", icon: "angle-left" },
  { id: 1, role: "is-primary", text: "決定", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info-circle" },
  { id: 3, role: "is-success", text: "登録", icon: "save" },
  { id: 4, role: "is-warning", text: "注意", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", text: "削除", icon: "times" }
]

const patterns = [
  { id: 0, text: "Plain", value: "is-plain" },
  { id: 1, text: "Outline", value: "is-outline" },
  { id: 2, text: "Melt", value: "is-melt" }
]

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
  button: "button",
  anchor: "a"
}

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewButtonBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-plain",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
      angle: "",
      tag: "button",
      externalLink: false
    }
  }
  render() {
    const pattern = this.state.pattern
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
    const angle = this.state.angle
    const tag = this.state.tag
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="button ${pattern} ${item.role} ${strong} ${round} ${floating} ${angle} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}>${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options">
          <div className="demo-option">
            {patterns.map(patternEl => (
              <div className="box is-margin-right-md" key={patternEl.id}>
                <input
                  className="input is-hidden"
                  type="radio"
                  onChange={() => this.setState({ pattern: patternEl.value })}
                  checked={this.state.pattern === patternEl.value}
                />
                <label
                  className="label is-middle"
                  onClick={() => this.setState({ pattern: patternEl.value })}
                >
                  <span className="radio is-margin-right-xxs"></span>
                  <span className="text">{patternEl.text}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-flex is-space-row-xs is-space-column-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
