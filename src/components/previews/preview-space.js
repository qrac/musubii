import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const spaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "xxs" },
  { id: 6, text: "XS", value: "xs" },
  { id: 5, text: "Small", value: "sm" },
  { id: 4, text: "Middle", value: "md" },
  { id: 3, text: "Large", value: "lg" },
  { id: 2, text: "XL", value: "xl" },
  { id: 1, text: "XXL", value: "xxl" }
]

const ways = [
  { id: 0, text: "Top", value: "top" },
  { id: 1, text: "Right", value: "right" },
  { id: 2, text: "Bottom", value: "bottom" },
  { id: 3, text: "Left", value: "left" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewSpaceBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      space: "md"
    }
    this.changeSpace = this.changeSpace.bind(this)
  }
  changeSpace(value) {
    this.setState({ space: value })
  }
  render() {
    const space = this.state.space
    const spaceClass = space ? "is-space-" + space : ""
    const text =
      "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
    const contents = `<div class="box ${spaceClass}">
        <p class="text">${text}</p>
        <p class="text">${text}</p>
        <p class="text">${text}</p>
        <p class="text">${text}</p>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Space"}>
              <DemoOptionBoxRadios
                patterns={spaces}
                parentChange={value => this.changeSpace(value)}
                checked={this.state.space}
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

export class PreviewSpaceWay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      way: "top",
      space: "md",
      minus: false
    }
    this.changeWay = this.changeWay.bind(this)
    this.changeSpace = this.changeSpace.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
  }
  changeSpace(value) {
    this.setState({ space: value })
  }
  toggleMinus() {
    this.setState({ minus: !this.state.minus })
  }
  render() {
    const way = this.state.way
    const space = this.state.space
    const spaceClass = space ? "is-space-" + way + "-" + space : ""
    const minus = this.state.minus
    const minusClass =
      minus && space ? "is-margin-" + way + "-minus-" + space : ""
    const fullClass = way === "top" || way === "bottom" ? "is-full" : ""
    const contents = `<div class="box is-flex ${spaceClass} ${minusClass}">
        <button class="button is-plain is-primary ${fullClass}" type="button">ボタンA</button>
        <button class="button is-outline is-danger ${fullClass}" type="button">ボタンB</button>
      </div>`
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
            <DemoOption title={"Fix"}>
              <DemoOptionBoxCheckbox
                text={"Add Margin Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
              />
            </DemoOption>
            <DemoOption title={"Space"}>
              <DemoOptionBoxRadios
                patterns={spaces}
                parentChange={value => this.changeSpace(value)}
                checked={this.state.space}
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
