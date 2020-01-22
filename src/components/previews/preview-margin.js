import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const margins = [
  { id: 7, text: "XXS", value: "xxs" },
  { id: 6, text: "XS", value: "xs" },
  { id: 5, text: "Small", value: "sm" },
  { id: 4, text: "Middle", value: "md" },
  { id: 3, text: "Large", value: "lg" },
  { id: 2, text: "XL", value: "xl" },
  { id: 1, text: "XXL", value: "xxl" }
]

const ways = [
  { id: 1, text: "Top", value: "top" },
  { id: 2, text: "Right", value: "right" },
  { id: 3, text: "Bottom", value: "bottom" },
  { id: 4, text: "Left", value: "left" },
  { id: 5, text: "Vertical", value: "vertical" },
  { id: 6, text: "Horizontal", value: "horizontal" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewMarginBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      margin: "md",
      minus: false
    }
    this.changeMargin = this.changeMargin.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
  }
  changeMargin(value) {
    this.setState({ margin: value })
  }
  toggleMinus() {
    this.setState({ minus: !this.state.minus })
  }
  render() {
    const minus = this.state.minus
    const minusConnect = minus ? "minus-" : ""
    const margin = this.state.margin
    const marginClass = margin ? "is-margin-" + minusConnect + margin : ""
    const contents = `<button class="button ${marginClass} is-plain is-warning" type="button">ボタンA</button>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Margin"}>
              <DemoOptionBoxRadios
                patterns={margins}
                parentChange={value => this.changeMargin(value)}
                checked={this.state.margin}
              />
            </DemoOption>
            <DemoOption title={"Fix"}>
              <DemoOptionBoxCheckbox
                text={"Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
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

export class PreviewMarginWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      way: "top",
      margin: "md",
      minus: false
    }
    this.changeWay = this.changeWay.bind(this)
    this.changeMargin = this.changeMargin.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
  }
  changeMargin(value) {
    this.setState({ margin: value })
  }
  toggleMinus() {
    this.setState({ minus: !this.state.minus })
  }
  render() {
    const way = this.state.way
    const wayConnect = way ? way + "-" : ""
    const minus = this.state.minus
    const minusConnect = minus ? "minus-" : ""
    const margin = this.state.margin
    const marginClass = margin
      ? "is-margin-" + wayConnect + minusConnect + margin
      : ""
    const contents = `<button class="button ${marginClass} is-plain is-warning" type="button">ボタンA</button>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Way"}>
              <DemoOptionBoxRadios
                patterns={ways}
                parentChange={value => this.changeWay(value)}
                checked={this.state.way}
              />
            </DemoOption>
            <DemoOption title={"Margin"}>
              <DemoOptionBoxRadios
                patterns={margins}
                parentChange={value => this.changeMargin(value)}
                checked={this.state.margin}
              />
            </DemoOption>
            <DemoOption title={"Fix"}>
              <DemoOptionBoxCheckbox
                text={"Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
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
