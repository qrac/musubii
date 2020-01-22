import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const tags = [
  { id: 0, text: "Div", value: "div" },
  { id: 1, text: "Anchor", value: "a" }
]

const radiusPatterns = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-radius-xxs" },
  { id: 6, text: "XS", value: "is-radius-xs" },
  { id: 5, text: "Small", value: "is-radius-sm" },
  { id: 4, text: "Medium", value: "is-radius-md" },
  { id: 3, text: "Large", value: "is-radius-lg" },
  { id: 2, text: "XL", value: "is-radius-xl" },
  { id: 1, text: "XXL", value: "is-radius-xxl" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewCardBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgLight: true,
      outline: false,
      floating: true
    }
    this.toggleBgLight = this.toggleBgLight.bind(this)
    this.toggleOutline = this.toggleOutline.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  toggleOutline() {
    this.setState({ outline: !this.state.outline })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  render() {
    const bgLight = this.state.bgLight ? "is-bg-light" : ""
    const outline = this.state.outline ? "is-outline" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const contents = `<div class="card ${bgLight} ${outline} ${floating}">
        <div class="box is-padding-md">children</div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Attached"}>
              <DemoOptionBoxCheckbox
                text={"Background Light"}
                parentChange={() => this.toggleBgLight()}
                checked={this.state.bgLight}
              />
              <DemoOptionBoxCheckbox
                text={"Outline"}
                parentChange={() => this.toggleOutline()}
                checked={this.state.outline}
              />
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
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

export class PreviewCardRadius extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radiusPattern: "is-radius-md"
    }
    this.changeRadiusPattern = this.changeRadiusPattern.bind(this)
  }
  changeRadiusPattern(value) {
    this.setState({ radiusPattern: value })
  }
  render() {
    const radiusPattern = this.state.radiusPattern
    const contents = `<div class="card ${radiusPattern} is-bg-light is-floating">
        <div class="box is-padding-md">children</div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Radius"}>
              <DemoOptionBoxRadios
                patterns={radiusPatterns}
                parentChange={value => this.changeRadiusPattern(value)}
                checked={this.state.radiusPattern}
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

export class PreviewCardLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      externalLink: false
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = `<a class="card is-link is-bg-light is-floating is-radius-md
        ${disabledClass}" href="#" ${disabledTabIndex} ${externalLink}>
          <div class="box is-padding-md">children</div></a>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Link"}>
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
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewCardZoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      externalLink: false
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = `<a class="card is-zoom is-bg-light is-floating is-radius-md
        ${disabledClass}" href="#" ${disabledTabIndex} ${externalLink}>
          <div class="box is-padding-md">children</div></a>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Zoom"}>
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
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
