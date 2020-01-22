import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "任意", icon: "tag" },
  { id: 1, role: "is-primary", text: "推奨", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info" },
  { id: 3, role: "is-success", text: "重要", icon: "check" },
  { id: 4, role: "is-warning", text: "注意", icon: "info" },
  { id: 5, role: "is-danger", text: "必須", icon: "minus" }
]

const tags = [
  { id: 0, text: "Span", value: "span" },
  { id: 1, text: "Div", value: "div" }
]

const patterns = [
  { id: 0, text: "Plain", value: "is-plain" },
  { id: 1, text: "Outline", value: "is-outline" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewBadgeBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "is-plain",
      strong: false,
      round: false,
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleStrong() {
    this.setState({ strong: !this.state.strong })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="badge ${pattern} ${item.role} ${strong} ${round} ${disabledClass}"
          >${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="demo-options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Strong"}
                parentChange={() => this.toggleStrong()}
                checked={this.state.strong}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-flex is-space-right-xs is-space-bottom-xs is-margin-right-minus-xs is-margin-bottom-minus-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewBadgeSquare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "is-plain",
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="badge ${pattern} is-square ${item.role} ${disabledClass}"
          ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="demo-options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-flex is-space-right-xs is-space-bottom-xs is-margin-bottom-minus-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewBadgeCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "span",
      pattern: "is-plain",
      disabled: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="badge ${pattern} is-circle ${item.role} ${disabledClass}"
          ><i aria-hidden="true" class="fas fa-${item.icon}"></i></${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
          </div>
          <div className="demo-options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-flex is-space-right-xs is-space-bottom-xs is-margin-bottom-minus-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
