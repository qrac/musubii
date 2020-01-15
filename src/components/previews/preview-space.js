import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const spaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-space-xxs" },
  { id: 6, text: "XS", value: "is-space-xs" },
  { id: 5, text: "Small", value: "is-space-sm" },
  { id: 4, text: "Middle", value: "is-space-md" },
  { id: 3, text: "Large", value: "is-space-lg" },
  { id: 2, text: "XL", value: "is-space-xl" },
  { id: 1, text: "XXL", value: "is-space-xxl" }
]

const ways = [
  { id: 0, text: "Top", value: "top" },
  { id: 1, text: "Right", value: "right" },
  { id: 2, text: "Bottom", value: "bottom" },
  { id: 3, text: "Left", value: "left" }
]

const topSpaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-space-top-xxs" },
  { id: 6, text: "XS", value: "is-space-top-xs" },
  { id: 5, text: "Small", value: "is-space-top-sm" },
  { id: 4, text: "Middle", value: "is-space-top-md" },
  { id: 3, text: "Large", value: "is-space-top-lg" },
  { id: 2, text: "XL", value: "is-space-top-xl" },
  { id: 1, text: "XXL", value: "is-space-top-xxl" }
]

const rightSpaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-space-right-xxs" },
  { id: 6, text: "XS", value: "is-space-right-xs" },
  { id: 5, text: "Small", value: "is-space-right-sm" },
  { id: 4, text: "Middle", value: "is-space-right-md" },
  { id: 3, text: "Large", value: "is-space-right-lg" },
  { id: 2, text: "XL", value: "is-space-right-xl" },
  { id: 1, text: "XXL", value: "is-space-right-xxl" }
]

const bottomSpaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-space-bottom-xxs" },
  { id: 6, text: "XS", value: "is-space-bottom-xs" },
  { id: 5, text: "Small", value: "is-space-bottom-sm" },
  { id: 4, text: "Middle", value: "is-space-bottom-md" },
  { id: 3, text: "Large", value: "is-space-bottom-lg" },
  { id: 2, text: "XL", value: "is-space-bottom-xl" },
  { id: 1, text: "XXL", value: "is-space-bottom-xxl" }
]

const leftSpaces = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-space-left-xxs" },
  { id: 6, text: "XS", value: "is-space-left-xs" },
  { id: 5, text: "Small", value: "is-space-left-sm" },
  { id: 4, text: "Middle", value: "is-space-left-md" },
  { id: 3, text: "Large", value: "is-space-left-lg" },
  { id: 2, text: "XL", value: "is-space-left-xl" },
  { id: 1, text: "XXL", value: "is-space-left-xxl" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewSpaceBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      space: "is-space-md"
    }
    this.changeSpace = this.changeSpace.bind(this)
  }
  changeSpace(value) {
    this.setState({ space: value })
  }
  render() {
    const space = this.state.space
    const text =
      "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
    const contents = `<div class="box ${space}">
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
      topSpace: "is-space-top-md",
      rightSpace: "",
      bottomSpace: "",
      leftSpace: "",
      minus: false,
      marginMinus: "is-margin-top-minus-md"
    }
    this.changeWay = this.changeWay.bind(this)
    this.changeTopSpace = this.changeTopSpace.bind(this)
    this.changeRightSpace = this.changeRightSpace.bind(this)
    this.changeBottomSpace = this.changeBottomSpace.bind(this)
    this.changeLeftSpace = this.changeLeftSpace.bind(this)
    this.toggleMinus = this.toggleMinus.bind(this)
    this.changeMarginMinus = this.changeMarginMinus.bind(this)
  }
  changeWay(value) {
    this.setState({ way: value })
    switch (value) {
      case "top":
        this.setState({ topSpace: "is-space-top-md" })
        this.setState({ rightSpace: "" })
        this.setState({ bottomSpace: "" })
        this.setState({ leftSpace: "" })
        this.setState({ minus: false })
        this.setState({ marginMinus: "is-margin-top-minus-md" })
        break
      case "right":
        this.setState({ topSpace: "" })
        this.setState({ rightSpace: "is-space-right-md" })
        this.setState({ bottomSpace: "" })
        this.setState({ leftSpace: "" })
        this.setState({ minus: false })
        this.setState({ marginMinus: "is-margin-right-minus-md" })
        break
      case "bottom":
        this.setState({ topSpace: "" })
        this.setState({ rightSpace: "" })
        this.setState({ bottomSpace: "is-space-bottom-md" })
        this.setState({ leftSpace: "" })
        this.setState({ minus: false })
        this.setState({ marginMinus: "is-margin-bottom-minus-md" })
        break
      case "left":
        this.setState({ topSpace: "" })
        this.setState({ rightSpace: "" })
        this.setState({ bottomSpace: "" })
        this.setState({ leftSpace: "is-space-left-md" })
        this.setState({ minus: false })
        this.setState({ marginMinus: "is-margin-left-minus-md" })
        break
      default:
        break
    }
  }
  changeTopSpace(value) {
    this.setState({ topSpace: value })
    this.changeMarginMinus(value)
  }
  changeRightSpace(value) {
    this.setState({ rightSpace: value })
    this.changeMarginMinus(value)
  }
  changeBottomSpace(value) {
    this.setState({ bottomSpace: value })
    this.changeMarginMinus(value)
  }
  changeLeftSpace(value) {
    this.setState({ leftSpace: value })
    this.changeMarginMinus(value)
  }
  toggleMinus() {
    this.changeMarginMinus()
    this.setState({ minus: !this.state.minus })
  }
  changeMarginMinus(value) {
    switch (value) {
      case "is-space-top-xxs":
        this.setState({ marginMinus: "is-margin-top-minus-xxs" })
        break
      case "is-space-top-xs":
        this.setState({ marginMinus: "is-margin-top-minus-xs" })
        break
      case "is-space-top-sm":
        this.setState({ marginMinus: "is-margin-top-minus-sm" })
        break
      case "is-space-top-md":
        this.setState({ marginMinus: "is-margin-top-minus-md" })
        break
      case "is-space-top-lg":
        this.setState({ marginMinus: "is-margin-top-minus-lg" })
        break
      case "is-space-top-xl":
        this.setState({ marginMinus: "is-margin-top-minus-xl" })
        break
      case "is-space-top-xxl":
        this.setState({ marginMinus: "is-margin-top-minus-xxl" })
        break
      case "is-space-right-xxs":
        this.setState({ marginMinus: "is-margin-right-minus-xxs" })
        break
      case "is-space-right-xs":
        this.setState({ marginMinus: "is-margin-right-minus-xs" })
        break
      case "is-space-right-sm":
        this.setState({ marginMinus: "is-margin-right-minus-sm" })
        break
      case "is-space-right-md":
        this.setState({ marginMinus: "is-margin-right-minus-md" })
        break
      case "is-space-right-lg":
        this.setState({ marginMinus: "is-margin-right-minus-lg" })
        break
      case "is-space-right-xl":
        this.setState({ marginMinus: "is-margin-right-minus-xl" })
        break
      case "is-space-right-xxl":
        this.setState({ marginMinus: "is-margin-right-minus-xxl" })
        break
      case "is-space-bottom-xxs":
        this.setState({ marginMinus: "is-margin-bottom-minus-xxs" })
        break
      case "is-space-bottom-xs":
        this.setState({ marginMinus: "is-margin-bottom-minus-xs" })
        break
      case "is-space-bottom-sm":
        this.setState({ marginMinus: "is-margin-bottom-minus-sm" })
        break
      case "is-space-bottom-md":
        this.setState({ marginMinus: "is-margin-bottom-minus-md" })
        break
      case "is-space-bottom-lg":
        this.setState({ marginMinus: "is-margin-bottom-minus-lg" })
        break
      case "is-space-bottom-xl":
        this.setState({ marginMinus: "is-margin-bottom-minus-xl" })
        break
      case "is-space-bottom-xxl":
        this.setState({ marginMinus: "is-margin-bottom-minus-xxl" })
        break
      case "is-space-left-xxs":
        this.setState({ marginMinus: "is-margin-left-minus-xxs" })
        break
      case "is-space-left-xs":
        this.setState({ marginMinus: "is-margin-left-minus-xs" })
        break
      case "is-space-left-sm":
        this.setState({ marginMinus: "is-margin-left-minus-sm" })
        break
      case "is-space-left-md":
        this.setState({ marginMinus: "is-margin-left-minus-md" })
        break
      case "is-space-left-lg":
        this.setState({ marginMinus: "is-margin-left-minus-lg" })
        break
      case "is-space-left-xl":
        this.setState({ marginMinus: "is-margin-left-minus-xl" })
        break
      case "is-space-left-xxl":
        this.setState({ marginMinus: "is-margin-left-minus-xxl" })
        break
    }
  }
  render() {
    const way = this.state.way
    const topSpace = this.state.topSpace
    const rightSpace = this.state.rightSpace
    const bottomSpace = this.state.bottomSpace
    const leftSpace = this.state.leftSpace
    const minus = this.state.minus
    const marginMinus = this.state.marginMinus
    const addMinus = minus ? marginMinus : ""
    const full = way === "top" || way === "bottom" ? "is-full" : ""
    const contents = `<div class="box is-flex ${topSpace} ${rightSpace} ${bottomSpace} ${leftSpace} ${addMinus}">
          <button class="button is-plain is-primary ${full}" type="button">ボタンA</button>
          <button class="button is-outline is-danger ${full}" type="button">ボタンB</button>
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
                text={"Margin Minus"}
                parentChange={() => this.toggleMinus()}
                checked={this.state.minus}
              />
            </DemoOption>
            {(() => {
              if (this.state.way === "top") {
                return (
                  <DemoOption title={"Space"}>
                    <DemoOptionBoxRadios
                      patterns={topSpaces}
                      parentChange={value => this.changeTopSpace(value)}
                      checked={this.state.topSpace}
                    />
                  </DemoOption>
                )
              } else if (this.state.way === "right") {
                return (
                  <DemoOption title={"Space"}>
                    <DemoOptionBoxRadios
                      patterns={rightSpaces}
                      parentChange={value => this.changeRightSpace(value)}
                      checked={this.state.rightSpace}
                    />
                  </DemoOption>
                )
              } else if (this.state.way === "bottom") {
                return (
                  <DemoOption title={"Space"}>
                    <DemoOptionBoxRadios
                      patterns={bottomSpaces}
                      parentChange={value => this.changeBottomSpace(value)}
                      checked={this.state.bottomSpace}
                    />
                  </DemoOption>
                )
              } else if (this.state.way === "left") {
                return (
                  <DemoOption title={"Space"}>
                    <DemoOptionBoxRadios
                      patterns={leftSpaces}
                      parentChange={value => this.changeLeftSpace(value)}
                      checked={this.state.leftSpace}
                    />
                  </DemoOption>
                )
              }
            })()}
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
