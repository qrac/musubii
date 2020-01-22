import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const paddings = [
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

export class PreviewPaddingBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      padding: "md"
    }
    this.changePadding = this.changePadding.bind(this)
  }
  changePadding(value) {
    this.setState({ padding: value })
  }
  render() {
    const padding = this.state.padding
    const paddingClass = padding ? "is-padding-" + padding : ""
    const contents = `<div class="card ${paddingClass} is-bg-light is-outline is-radius-md">カード</div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Padding"}>
              <DemoOptionBoxRadios
                patterns={paddings}
                parentChange={value => this.changePadding(value)}
                checked={this.state.padding}
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

export class PreviewPaddingWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      way: "top",
      padding: "md"
    }
    this.changeWay = this.changeWay.bind(this)
    this.changePadding = this.changePadding.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
  }
  changePadding(value) {
    this.setState({ padding: value })
  }
  render() {
    const way = this.state.way
    const wayConnect = way ? way + "-" : ""
    const padding = this.state.padding
    const paddingClass = padding ? "is-padding-" + wayConnect + padding : ""
    const contents = `<div class="card ${paddingClass} is-bg-light is-outline is-radius-md">カード</div>`
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
            <DemoOption title={"Padding"}>
              <DemoOptionBoxRadios
                patterns={paddings}
                parentChange={value => this.changePadding(value)}
                checked={this.state.padding}
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
