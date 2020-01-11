import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Baseline", value: "is-baseline" },
  { id: 2, text: "Middle", value: "is-middle" },
  { id: 3, text: "Bottom", value: "is-bottom" },
  { id: 4, text: "Center", value: "is-center" },
  { id: 5, text: "Right", value: "is-right" },
  { id: 6, text: "Between", value: "is-between" },
  { id: 7, text: "Around", value: "is-around" }
]

const gaps = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "XXL", value: "is-gap-xxl" },
  { id: 2, text: "XL", value: "is-gap-xl" },
  { id: 3, text: "Large", value: "is-gap-lg" },
  { id: 4, text: "Middle", value: "is-gap-md" },
  { id: 5, text: "Small", value: "is-gap-sm" },
  { id: 6, text: "XS", value: "is-gap-xs" },
  { id: 7, text: "XXS", value: "is-gap-xxs" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewGridBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnsNum: 4,
      align: "",
      gap: ""
    }
    this.changeColumnsNum = this.changeColumnsNum.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
    this.changeGap = this.changeGap.bind(this)
  }
  changeColumnsNum(value) {
    this.setState({ columnsNum: value })
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  changeGap(value) {
    this.setState({ gap: value })
  }
  render() {
    const columnsNum = this.state.columnsNum
    const align = this.state.align
    const gap = this.state.gap
    const gridTagBefore = `<div class="grid ${align} ${gap}">`
    const gridTagAfter = `</div>`
    const columns = [...Array(columnsNum)]
      .map(() => `<div class="column"></div>`)
      .join("")
    const contents = (gridTagBefore + columns + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Align"}>
              <DemoOptionBoxRadios
                patterns={aligns}
                parentChange={value => this.changeAlign(value)}
                checked={this.state.align}
              />
            </DemoOption>
            <DemoOption title={"Gap"}>
              <DemoOptionBoxRadios
                patterns={gaps}
                parentChange={value => this.changeGap(value)}
                checked={this.state.gap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className={
              this.state.customHeight
                ? "box is-custom-grid-demo is-custom-height"
                : "box is-custom-grid-demo"
            }
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
