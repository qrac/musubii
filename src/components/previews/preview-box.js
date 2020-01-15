import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const outlines = [
  { id: 0, text: "Outline None", value: "" },
  { id: 1, text: "Outline All", value: "is-outline" },
  { id: 2, text: "Outline Top", value: "is-outline-top" },
  { id: 3, text: "Outline Right", value: "is-outline-right" },
  { id: 4, text: "Outline Bottom", value: "is-outline-bottom" },
  { id: 5, text: "Outline Left", value: "is-outline-left" }
]

const separates = [
  { id: 0, text: "Separate None", value: "" },
  { id: 1, text: "Separate All", value: "is-separate" },
  { id: 2, text: "Separate Parent", value: "is-separate-parent" }
]

const boxNums = [
  { id: 1, text: "1行", value: 1 },
  { id: 2, text: "2行", value: 2 },
  { id: 3, text: "3行", value: 3 },
  { id: 4, text: "4行", value: 4 },
  { id: 5, text: "5行", value: 5 },
  { id: 6, text: "6行", value: 6 },
  { id: 7, text: "7行", value: 7 },
  { id: 8, text: "8行", value: 8 },
  { id: 9, text: "9行", value: 9 },
  { id: 10, text: "10行", value: 10 },
  { id: 11, text: "11行", value: 11 },
  { id: 12, text: "12行", value: 12 }
]

const tags = [
  { id: 0, text: "Div", value: "div" },
  { id: 1, text: "Anchor", value: "a" }
]

const flexPatterns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Flex", value: "is-flex" },
  { id: 2, text: "Inline Flex", value: "is-inline-flex" }
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

export class PreviewBoxDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      outline: "is-outline",
      separate: "is-separate",
      boxNum: 3,
      tag: "div",
      flexPattern: "is-flex",
      verticalAlign: "is-middle",
      horizontalAlign: "",
      angle: "",
      withIcon: true,
      withGrow: true,
      bgLight: true,
      link: false,
      disabled: false,
      externalLink: false
    }
    this.changeOutline = this.changeOutline.bind(this)
    this.changeSeparate = this.changeSeparate.bind(this)
    this.changeBoxNum = this.changeBoxNum.bind(this)
    this.changeTag = this.changeTag.bind(this)
    this.changeFlexPattern = this.changeFlexPattern.bind(this)
    this.changeVerticalAlign = this.changeVerticalAlign.bind(this)
    this.changeHorizontalAlign = this.changeHorizontalAlign.bind(this)
    this.changeAngle = this.changeAngle.bind(this)
    this.toggleWithIcon = this.toggleWithIcon.bind(this)
    this.toggleWithGrow = this.toggleWithGrow.bind(this)
    this.toggleBgLight = this.toggleBgLight.bind(this)
    this.toggleLink = this.toggleLink.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeOutline(value) {
    this.setState({ outline: value })
  }
  changeSeparate(value) {
    this.setState({ separate: value })
  }
  changeBoxNum(value) {
    this.setState({ boxNum: value })
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changeFlexPattern(value) {
    this.setState({ flexPattern: value })
  }
  changeVerticalAlign(value) {
    this.setState({ verticalAlign: value })
  }
  changeAngle(value) {
    this.setState({ angle: value })
  }
  changeHorizontalAlign(value) {
    this.setState({ horizontalAlign: value })
  }
  toggleWithIcon() {
    this.setState({ withIcon: !this.state.withIcon })
  }
  toggleWithGrow() {
    this.setState({ withGrow: !this.state.withGrow })
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  toggleLink() {
    this.setState({ link: !this.state.link })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const outline = this.state.outline
    const separate = this.state.separate
    const boxNum = this.state.boxNum
    const tag = this.state.tag
    const angle = this.state.angle
    const flexPattern = this.state.flexPattern
    const verticalAlign = this.state.verticalAlign
    const horizontalAlign = this.state.horizontalAlign
    const withIcon = this.state.withIcon
      ? '<i aria-hidden="true" class="fas fa-archive is-margin-right-md is-lg"></i>'
      : ""
    const withGrow = this.state.withGrow ? "is-mobile-0" : ""
    const bgLight = this.state.bgLight ? "is-bg-light" : ""
    const link = this.state.link ? "is-link" : ""
    const disabled = this.state.disabled
    const separateChildClass =
      separate === "is-separate-parent" ? "is-separate-child" : ""
    const tagAttr = tag === "a" ? 'href="#"' : ""
    const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
    const angleLeft = angle.startsWith("is-angle-left")
      ? `${angle} is-padding-left-xxl`
      : ""
    const angleRight = angle.startsWith("is-angle-right")
      ? `${angle} is-padding-right-xxl`
      : ""
    const wrapAngleLeft = angle.startsWith("is-angle-left")
      ? `${angle} is-padding-left-xxl`
      : "is-padding-left-md"
    const wrapAngle =
      separate != "is-separate-parent"
        ? `${wrapAngleLeft} ${angleRight}`
        : `${wrapAngleLeft}`
    const childAngle = separate === "is-separate-parent" ? `${angleRight}` : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const boxTagBefore = `<ul class="box ${outline} ${bgLight} ${separate}">`
    const boxTagAfter = `</ul>`
    const boxes = []
    for (let i = 0; i < boxNum; i++) {
      boxes.push(
        `<li>
          <${tag} class="box ${flexPattern} ${verticalAlign} ${horizontalAlign}
            ${link} ${disabledClass} ${wrapAngle}"
            ${tagAttr} ${externalLink}>${withIcon}
            <div class="box ${separateChildClass} ${childAngle}
            is-padding-vertical-md ${withGrow}">children ${i + 1}</div>
          </${tag}>
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
            <DemoOption title={"Border"}>
              <DemoOptionBoxSelect
                patterns={outlines}
                parentChange={value => this.changeOutline(value)}
                checked={this.state.outline}
              />
              <DemoOptionBoxSelect
                patterns={separates}
                parentChange={value => this.changeSeparate(value)}
                checked={this.state.separate}
              />
            </DemoOption>
            <DemoOption title={"Row"}>
              <DemoOptionBoxSelect
                patterns={boxNums}
                parentChange={value => this.changeBoxNum(value)}
                checked={this.state.boxNum}
              />
            </DemoOption>
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Flex"}>
              <DemoOptionBoxRadios
                patterns={flexPatterns}
                parentChange={value => this.changeFlexPattern(value)}
                checked={this.state.flexPattern}
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
            <DemoOption title={"Angle"}>
              <DemoOptionBoxRadios
                patterns={angles}
                parentChange={value => this.changeAngle(value)}
                checked={this.state.angle}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Icon"}
                parentChange={() => this.toggleWithIcon()}
                checked={this.state.withIcon}
              />
              <DemoOptionBoxCheckbox
                text={"Grow"}
                parentChange={() => this.toggleWithGrow()}
                checked={this.state.withGrow}
              />
              <DemoOptionBoxCheckbox
                text={"Background Light"}
                parentChange={() => this.toggleBgLight()}
                checked={this.state.bgLight}
              />
              <DemoOptionBoxCheckbox
                text={"Link"}
                parentChange={() => this.toggleLink()}
                checked={this.state.link}
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
            className="box"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
