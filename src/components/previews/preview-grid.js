import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const columnNums = [
  { id: 1, text: "1カラム", value: 1 },
  { id: 2, text: "2カラム", value: 2 },
  { id: 3, text: "3カラム", value: 3 },
  { id: 4, text: "4カラム", value: 4 },
  { id: 5, text: "5カラム", value: 5 },
  { id: 6, text: "6カラム", value: 6 },
  { id: 7, text: "7カラム", value: 7 },
  { id: 8, text: "8カラム", value: 8 },
  { id: 9, text: "9カラム", value: 9 },
  { id: 10, text: "10カラム", value: 10 },
  { id: 11, text: "11カラム", value: 11 },
  { id: 12, text: "12カラム", value: 12 }
]

const columnSizes = [
  { id: 0, text: "自動幅", value: "" },
  { id: 13, text: "伸縮幅", value: "is-0" },
  { id: 1, text: "1/12幅", value: "is-1" },
  { id: 2, text: "2/12幅", value: "is-2" },
  { id: 3, text: "3/12幅", value: "is-3" },
  { id: 4, text: "4/12幅", value: "is-4" },
  { id: 5, text: "5/12幅", value: "is-5" },
  { id: 6, text: "6/12幅", value: "is-6" },
  { id: 7, text: "7/12幅", value: "is-7" },
  { id: 8, text: "8/12幅", value: "is-8" },
  { id: 9, text: "9/12幅", value: "is-9" },
  { id: 10, text: "10/12幅", value: "is-10" },
  { id: 11, text: "11/12幅", value: "is-11" },
  { id: 12, text: "12/12幅", value: "is-12" }
]

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
  { id: 7, text: "XXS", value: "is-gap-xxs" },
  { id: 6, text: "XS", value: "is-gap-xs" },
  { id: 5, text: "Small", value: "is-gap-sm" },
  { id: 4, text: "Medium", value: "is-gap-md" },
  { id: 3, text: "Large", value: "is-gap-lg" },
  { id: 2, text: "XL", value: "is-gap-xl" },
  { id: 1, text: "XXL", value: "is-gap-xxl" }
]

const verticalGaps = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-gap-vertical-xxs" },
  { id: 6, text: "XS", value: "is-gap-vertical-xs" },
  { id: 5, text: "Small", value: "is-gap-vertical-sm" },
  { id: 4, text: "Medium", value: "is-gap-vertical-md" },
  { id: 3, text: "Large", value: "is-gap-vertical-lg" },
  { id: 2, text: "XL", value: "is-gap-vertical-xl" },
  { id: 1, text: "XXL", value: "is-gap-vertical-xxl" }
]

const horizontalGaps = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-gap-horizontal-xxs" },
  { id: 6, text: "XS", value: "is-gap-horizontal-xs" },
  { id: 5, text: "Small", value: "is-gap-horizontal-sm" },
  { id: 4, text: "Medium", value: "is-gap-horizontal-md" },
  { id: 3, text: "Large", value: "is-gap-horizontal-lg" },
  { id: 2, text: "XL", value: "is-gap-horizontal-xl" },
  { id: 1, text: "XXL", value: "is-gap-horizontal-xxl" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewGridBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      splitGap: false,
      reverse: false,
      stretch: false,
      columnNum: 4,
      columnSize: "",
      align: "",
      gap: "is-gap-md",
      verticalGap: "",
      horizontalGap: ""
    }
    this.toggleSplitGap = this.toggleSplitGap.bind(this)
    this.toggleReverse = this.toggleReverse.bind(this)
    this.toggleStretch = this.toggleStretch.bind(this)
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
    this.changeGap = this.changeGap.bind(this)
    this.changeVerticalGap = this.changeVerticalGap.bind(this)
    this.changeHorizontalGap = this.changeHorizontalGap.bind(this)
  }
  toggleSplitGap() {
    this.setState({ splitGap: !this.state.splitGap })
    if (this.state.splitGap) {
      this.setState({ gap: "is-gap-md" })
      this.setState({ verticalGap: "" })
      this.setState({ horizontalGap: "" })
    } else {
      this.setState({ gap: "" })
      this.setState({ verticalGap: "is-gap-vertical-md" })
      this.setState({ horizontalGap: "is-gap-horizontal-md" })
    }
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  toggleStretch() {
    this.setState({ stretch: !this.state.stretch })
  }
  changeColumnNum(value) {
    this.setState({ columnNum: value })
  }
  changeColumnSize(value) {
    this.setState({ columnSize: value })
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  changeGap(value) {
    this.setState({ gap: value })
    this.setState({ verticalGap: "" })
    this.setState({ horizontalGap: "" })
  }
  changeVerticalGap(value) {
    this.setState({ verticalGap: value })
    this.setState({ gap: "" })
  }
  changeHorizontalGap(value) {
    this.setState({ horizontalGap: value })
    this.setState({ gap: "" })
  }
  render() {
    const reverse = this.state.reverse ? "is-reverse" : ""
    const stretch = this.state.stretch ? "is-stretch" : ""
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const align = this.state.align
    const gap = this.state.gap
    const verticalGap = this.state.verticalGap
    const horizontalGap = this.state.horizontalGap
    const gridTagBefore = `<div class="grid
      ${align} ${gap} ${verticalGap} ${horizontalGap} ${reverse} ${stretch}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(
        `<div class="column ${columnSize}"><div>children ${i + 1}</div></div>`
      )
    }
    const contents = (gridTagBefore + columns.join("") + gridTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Grid"}>
              <DemoOptionBoxCheckbox
                text={"Split Gap"}
                parentChange={() => this.toggleSplitGap()}
                checked={this.state.splitGap}
              />
              <DemoOptionBoxCheckbox
                text={"Reverse"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
              />
              <DemoOptionBoxCheckbox
                text={"Stretch"}
                parentChange={() => this.toggleStretch()}
                checked={this.state.stretch}
              />
            </DemoOption>
            <DemoOption title={"Column"}>
              <DemoOptionBoxSelect
                patterns={columnNums}
                parentChange={value => this.changeColumnNum(value)}
                checked={this.state.columnNum}
              />
              <DemoOptionBoxSelect
                patterns={columnSizes}
                parentChange={value => this.changeColumnSize(value)}
                checked={this.state.columnSize}
              />
            </DemoOption>
            <DemoOption title={"Align"}>
              <DemoOptionBoxRadios
                patterns={aligns}
                parentChange={value => this.changeAlign(value)}
                checked={this.state.align}
              />
            </DemoOption>
            {(() => {
              if (!this.state.splitGap) {
                return (
                  <DemoOption title={"Gap - All"}>
                    <DemoOptionBoxRadios
                      patterns={gaps}
                      parentChange={value => this.changeGap(value)}
                      checked={this.state.gap}
                    />
                  </DemoOption>
                )
              } else {
                return (
                  <>
                    <DemoOption title={"Gap - Vertical"}>
                      <DemoOptionBoxRadios
                        patterns={verticalGaps}
                        parentChange={value => this.changeVerticalGap(value)}
                        checked={this.state.verticalGap}
                      />
                    </DemoOption>
                    <DemoOption title={"Gap - Horizontal"}>
                      <DemoOptionBoxRadios
                        patterns={horizontalGaps}
                        parentChange={value => this.changeHorizontalGap(value)}
                        checked={this.state.horizontalGap}
                      />
                    </DemoOption>
                  </>
                )
              }
            })()}
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-custom-grid-demo"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
