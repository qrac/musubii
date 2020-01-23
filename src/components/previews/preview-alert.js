import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

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

const tails = [
  { id: 0, text: "Top Left", value: "is-tail-top-left" },
  { id: 1, text: "Top Center", value: "is-tail-top-center" },
  { id: 2, text: "Top Right", value: "is-tail-top-right" },
  { id: 3, text: "Right Top", value: "is-tail-right-top" },
  { id: 4, text: "Right Middle", value: "is-tail-right-middle" },
  { id: 5, text: "Right Bottom", value: "is-tail-right-bottom" },
  { id: 6, text: "Bottom Right", value: "is-tail-bottom-right" },
  { id: 7, text: "Bottom Center", value: "is-tail-bottom-center" },
  { id: 8, text: "Bottom Left", value: "is-tail-bottom-left" },
  { id: 9, text: "Left Bottom", value: "is-tail-left-bottom" },
  { id: 10, text: "Left Middle", value: "is-tail-left-middle" },
  { id: 11, text: "Left Top", value: "is-tail-left-top" }
]

const beautifyHtmlOptions = {
  inline: ["s"],
  indent_size: 2
}

export class PreviewAlertRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(
        item =>
          `<div class="alert ${item.role}">
            <i aria-hidden="true" class="fas fa-${item.icon} ${item.role} is-fit is-margin-right-xxs"></i>
            <span class="text ${item.role}">${item.text}</span>
          </div>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-line">
          <div
            className="box is-space-sm"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewAlertTail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tail: "is-tail-top-left"
    }
    this.changeTail = this.changeTail.bind(this)
  }
  changeTail(value) {
    this.setState({ tail: value })
  }
  render() {
    const tail = this.state.tail
    const contents = items
      .map(
        item =>
          `<div class="alert ${item.role} ${tail}">
            <i aria-hidden="true" class="fas fa-${item.icon} ${item.role} is-fit is-margin-right-xxs"></i>
            <span class="text ${item.role}">${item.text}</span>
          </div>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Tail"}>
              <DemoOptionBoxRadios
                patterns={tails}
                parentChange={value => this.changeTail(value)}
                checked={this.state.tail}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-space-sm"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
