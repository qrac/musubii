import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", icon: "angle-left" },
  { id: 1, role: "is-primary", icon: "check" },
  { id: 2, role: "is-info", icon: "info-circle" },
  { id: 3, role: "is-success", text: "登録", icon: "save" },
  { id: 4, role: "is-warning", text: "注意", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", text: "削除", icon: "times" }
]

const beautifyHtmlOptions = {
  inline: ["span"],
  indent_size: 2
}

export class PreviewIconDark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : "-" + i
      texts.push(
        `<i aria-hidden="true" class="fas fa-adjust is-dark${suffix}"></i>`
      )
    }
    const contents = texts
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-line">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewIconLight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : "-" + i
      texts.push(
        `<i aria-hidden="true" class="fas fa-adjust is-light${suffix}"></i>`
      )
    }
    const contents = texts
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-paint">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewIconRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(
        item =>
          `<i aria-hidden="true" class="fas fa-${item.icon} ${item.role}"></i>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-line">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewIconFit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fit: true
    }
    this.toggleFit = this.toggleFit.bind(this)
  }
  toggleFit() {
    this.setState({ fit: !this.state.fit })
  }
  render() {
    const fit = this.state.fit ? "is-fit" : ""
    const contents = items
      .map(
        item =>
          `<i aria-hidden="true" class="fas fa-${item.icon} ${item.role} ${fit}"></i>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Fit"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleFit()}
                checked={this.state.fit}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
