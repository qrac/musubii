import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
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
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Right", value: "is-angle-right" },
  { id: 2, text: "Left", value: "is-angle-left" },
  { id: 3, text: "Right Up", value: "is-angle-right is-angle-up" },
  { id: 4, text: "Right Down", value: "is-angle-right is-angle-down" },
  { id: 5, text: "Left Up", value: "is-angle-left is-angle-up" },
  { id: 6, text: "Left Down", value: "is-angle-left is-angle-down" }
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
    const disabledTabIndex = disabled && tag === "a" ? 'tabindex="-1"' : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="button ${pattern} ${item.role} ${strong} ${round} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledTabIndex} ${disabledAttr}>${item.text}</${tag}>`
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewButtonAngle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "button",
      pattern: "is-plain",
      angle: "is-angle-right",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
      externalLink: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.changeAngle = this.changeAngle.bind(this)
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
  changeAngle(value) {
    this.setState({ angle: value })
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
    const angle = this.state.angle
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "button" ? 'type="button"' : 'href="#"'
    const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
    const disabledAttr = disabled && tag === "button" ? "disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = items
      .map(
        item =>
          `<${tag} class="button ${pattern} ${item.role} is-0 ${angle} ${strong} ${round} ${floating} ${disabledClass}"
            ${tagAttr} ${externalLink} ${disabledTabIndex} ${disabledAttr}>${item.text}</${tag}>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Angle"}>
              <DemoOptionBoxRadios
                patterns={angles}
                parentChange={value => this.changeAngle(value)}
                checked={this.state.angle}
              />
            </DemoOption>
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
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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
