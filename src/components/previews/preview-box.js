import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const outlines = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "All", value: "is-outline" },
  { id: 2, text: "Top", value: "is-outline-top" },
  { id: 3, text: "Right", value: "is-outline-right" },
  { id: 4, text: "Bottom", value: "is-outline-bottom" },
  { id: 5, text: "Left", value: "is-outline-left" }
]

const separates = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "All", value: "is-separate" },
  { id: 2, text: "Parent & Child", value: "is-separate-parent" }
]

const verticalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Baseline", value: "is-baseline" },
  { id: 2, text: "Middle", value: "is-middle" },
  { id: 3, text: "Bottom", value: "is-bottom" }
]

const horizontalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Center", value: "is-center" },
  { id: 2, text: "Right", value: "is-right" },
  { id: 3, text: "Between", value: "is-between" },
  { id: 4, text: "Around", value: "is-around" }
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
  inline: ["span"],
  indent_size: 2
}

export class PreviewBoxBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outline: true,
      bgLight: true
    }
    this.toggleOutline = this.toggleOutline.bind(this)
    this.toggleBgLight = this.toggleBgLight.bind(this)
  }
  toggleOutline() {
    this.setState({ outline: !this.state.outline })
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  render() {
    const bgLight = this.state.bgLight ? "is-bg-light" : ""
    const outline = this.state.outline ? "is-outline" : ""
    const contents = `<div class="box ${bgLight} ${outline} is-padding-md">children</div>`
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

export class PreviewBoxFlexbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verticalAlign: "is-middle",
      horizontalAlign: "",
      reverse: false
    }
    this.changeVerticalAlign = this.changeVerticalAlign.bind(this)
    this.changeHorizontalAlign = this.changeHorizontalAlign.bind(this)
    this.toggleReverse = this.toggleReverse.bind(this)
  }
  changeVerticalAlign(value) {
    this.setState({ verticalAlign: value })
  }
  changeHorizontalAlign(value) {
    this.setState({ horizontalAlign: value })
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  render() {
    const verticalAlign = this.state.verticalAlign
    const horizontalAlign = this.state.horizontalAlign
    const reverse = this.state.reverse ? "is-reverse" : ""
    const contents = `<div class="box is-flex ${verticalAlign} ${horizontalAlign} ${reverse}
        is-bg-light is-outline is-padding-md">
        <i aria-hidden="true" class="fas fa-archive is-margin-right-md is-lg"></i>
        <div class="box">children</div>
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
                text={"Reverse"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
              />
            </DemoOption>
            <DemoOption title={"Vertical Align"}>
              <DemoOptionBoxRadios
                patterns={verticalAligns}
                parentChange={value => this.changeVerticalAlign(value)}
                checked={this.state.verticalAlign}
              />
            </DemoOption>
            <DemoOption title={"Horizontal Align"}>
              <DemoOptionBoxRadios
                patterns={horizontalAligns}
                parentChange={value => this.changeHorizontalAlign(value)}
                checked={this.state.horizontalAlign}
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

export class PreviewBoxOutline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outline: "is-outline"
    }
    this.changeOutline = this.changeOutline.bind(this)
  }
  changeOutline(value) {
    this.setState({ outline: value })
  }
  render() {
    const outline = this.state.outline
    const contents = `<div class="box is-flex ${outline}
        is-bg-light is-padding-md">children</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Outline"}>
              <DemoOptionBoxRadios
                patterns={outlines}
                parentChange={value => this.changeOutline(value)}
                checked={this.state.outline}
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

export class PreviewBoxSeparate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      separate: "is-separate",
      boxNum: 3
    }
    this.changeSeparate = this.changeSeparate.bind(this)
    this.changeBoxNum = this.changeBoxNum.bind(this)
  }
  changeSeparate(value) {
    this.setState({ separate: value })
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  render() {
    const separate = this.state.separate
    const boxNum = this.state.boxNum
    const separateChildClass =
      separate === "is-separate-parent" ? "is-separate-child" : ""
    const boxTagBefore = `<ul class="box is-outline is-bg-light ${separate}">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <div class="box is-flex is-middle is-padding-left-md">
            <i aria-hidden="true" class="fas fa-archive is-margin-right-md is-lg"></i>
            <div class="box ${separateChildClass}
            is-padding-vertical-md is-0">children ${i + 1}</div>
          </div>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Separate"}>
              <DemoOptionBoxRadios
                patterns={separates}
                parentChange={value => this.changeSeparate(value)}
                checked={this.state.separate}
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

export class PreviewBoxLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxNum: 3,
      disabled: false,
      externalLink: false
    }
    this.changeBoxNum = this.changeBoxNum.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const boxNum = this.state.boxNum
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const boxTagBefore = `<ul class="box is-outline is-bg-light is-separate-parent">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <a class="box is-link is-flex is-middle is-padding-left-md ${disabledClass}"
            href="#" ${externalLink} ${disabledTabIndex}>
            <i aria-hidden="true" class="fas fa-archive is-margin-right-md is-lg"></i>
            <div class="box is-separate-child
            is-padding-vertical-md is-0">children ${i + 1}</div>
          </a>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
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

export class PreviewBoxAngle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxNum: 3,
      angle: "is-angle-right",
      disabled: false,
      externalLink: false
    }
    this.changeBoxNum = this.changeBoxNum.bind(this)
    this.changeAngle = this.changeAngle.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  changeAngle(value) {
    this.setState({ angle: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const boxNum = this.state.boxNum
    const angle = this.state.angle
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const angleRight = angle.startsWith("is-angle-right")
      ? `${angle} is-padding-right-xxl`
      : ""
    const wrapAngleLeft = angle.startsWith("is-angle-left")
      ? `${angle} is-padding-left-xxl`
      : "is-padding-left-md"
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const boxTagBefore = `<ul class="box is-outline is-bg-light is-separate-parent">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <a class="box is-link is-flex is-middle ${wrapAngleLeft} ${disabledClass}"
            href="#" ${externalLink} ${disabledTabIndex}>
            <i aria-hidden="true" class="fas fa-archive is-margin-right-md is-lg"></i>
            <div class="box is-separate-child ${angleRight}
            is-padding-vertical-md is-0">children ${i + 1}</div>
          </a>
        </li>`
      )
    }
    const contents = (boxTagBefore + boxes.join("") + boxTagAfter)
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
            <DemoOption title={"Other"}>
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
