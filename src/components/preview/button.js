import React from "react"
import beautify from "js-beautify"

import DemoOptionRadio from "~/components/parts/demo-option-radio"
import DemoOptionCheckbox from "~/components/parts/demo-option-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "戻る", icon: "angle-left" },
  { id: 1, role: "is-primary", text: "決定", icon: "check" },
  { id: 2, role: "is-info", text: "情報", icon: "info-circle" },
  { id: 3, role: "is-success", text: "登録", icon: "save" },
  { id: 4, role: "is-warning", text: "注意", icon: "exclamation-triangle" },
  { id: 5, role: "is-danger", text: "削除", icon: "times" }
]

const tags = [
  { id: 0, text: "Button", value: "button" },
  { id: 1, text: "Anchor", value: "a" }
]

const patterns = [
  { id: 0, text: "Plain", value: "is-plain" },
  { id: 1, text: "Outline", value: "is-outline" },
  { id: 2, text: "Melt", value: "is-melt" }
]

const angles = [
  { id: 0, text: "Right", value: "is-angle-right" },
  { id: 1, text: "Left", value: "is-angle-left" },
  { id: 2, text: "Right Up", value: "is-angle-right is-angle-up" },
  { id: 3, text: "Right Down", value: "is-angle-right is-angle-down" },
  { id: 4, text: "Left Up", value: "is-angle-left is-angle-up" },
  { id: 5, text: "Left Down", value: "is-angle-left is-angle-down" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewButtonBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "is-plain",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
      externalLink: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
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
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
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
          `<${tag} class="button ${pattern} ${item.role} ${strong} ${round} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}>${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOptionRadio
              patterns={tags}
              parentChange={value => this.changeTag(value)}
              checked={this.state.tag}
            />
            <DemoOptionRadio
              patterns={patterns}
              parentChange={value => this.changePattern(value)}
              checked={this.state.pattern}
            />
          </div>
          <div className="demo-options">
            <DemoOptionCheckbox
              text={"Strong"}
              parentChange={() => this.toggleStrong()}
              checked={this.state.strong}
            />
            <DemoOptionCheckbox
              text={"Round"}
              parentChange={() => this.toggleRound()}
              checked={this.state.round}
            />
            <DemoOptionCheckbox
              text={"Floating"}
              parentChange={() => this.toggleFloating()}
              checked={this.state.floating}
            />
            <DemoOptionCheckbox
              text={"Disabled"}
              parentChange={() => this.toggleDisabled()}
              checked={this.state.disabled}
            />
            <DemoOptionCheckbox
              text={"External Link"}
              parentChange={() => this.toggleExternalLink()}
              checked={this.state.externalLink}
            />
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

export class PreviewButtonSquare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "is-plain",
      floating: false,
      disabled: false,
      externalLink: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
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
          `<${tag} class="button ${pattern} is-square ${item.role} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}
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
            <DemoOptionRadio
              patterns={tags}
              parentChange={value => this.changeTag(value)}
              checked={this.state.tag}
            />
            <DemoOptionRadio
              patterns={patterns}
              parentChange={value => this.changePattern(value)}
              checked={this.state.pattern}
            />
          </div>
          <div className="demo-options">
            <DemoOptionCheckbox
              text={"Floating"}
              parentChange={() => this.toggleFloating()}
              checked={this.state.floating}
            />
            <DemoOptionCheckbox
              text={"Disabled"}
              parentChange={() => this.toggleDisabled()}
              checked={this.state.disabled}
            />
            <DemoOptionCheckbox
              text={"External Link"}
              parentChange={() => this.toggleExternalLink()}
              checked={this.state.externalLink}
            />
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

export class PreviewButtonCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "is-plain",
      floating: false,
      disabled: false,
      externalLink: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const pattern = this.state.pattern
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
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
          `<${tag} class="button ${pattern} is-circle ${item.role} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledAttr}
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
            <DemoOptionRadio
              patterns={tags}
              parentChange={value => this.changeTag(value)}
              checked={this.state.tag}
            />
            <DemoOptionRadio
              patterns={patterns}
              parentChange={value => this.changePattern(value)}
              checked={this.state.pattern}
            />
          </div>
          <div className="demo-options">
            <DemoOptionCheckbox
              text={"Floating"}
              parentChange={() => this.toggleFloating()}
              checked={this.state.floating}
            />
            <DemoOptionCheckbox
              text={"Disabled"}
              parentChange={() => this.toggleDisabled()}
              checked={this.state.disabled}
            />
            <DemoOptionCheckbox
              text={"External Link"}
              parentChange={() => this.toggleExternalLink()}
              checked={this.state.externalLink}
            />
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
