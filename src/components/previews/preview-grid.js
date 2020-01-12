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
  { id: 13, text: "伸縮幅", value: "is-mobile-0" },
  { id: 1, text: "1/12幅", value: "is-mobile-1" },
  { id: 2, text: "2/12幅", value: "is-mobile-2" },
  { id: 3, text: "3/12幅", value: "is-mobile-3" },
  { id: 4, text: "4/12幅", value: "is-mobile-4" },
  { id: 5, text: "5/12幅", value: "is-mobile-5" },
  { id: 6, text: "6/12幅", value: "is-mobile-6" },
  { id: 7, text: "7/12幅", value: "is-mobile-7" },
  { id: 8, text: "8/12幅", value: "is-mobile-8" },
  { id: 9, text: "9/12幅", value: "is-mobile-9" },
  { id: 10, text: "10/12幅", value: "is-mobile-10" },
  { id: 11, text: "11/12幅", value: "is-mobile-11" },
  { id: 12, text: "12/12幅", value: "is-mobile-12" }
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
  { id: 4, text: "Middle", value: "is-gap-md" },
  { id: 3, text: "Large", value: "is-gap-lg" },
  { id: 2, text: "XL", value: "is-gap-xl" },
  { id: 1, text: "XXL", value: "is-gap-xxl" }
]

const topBottomGaps = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-gap-top-bottom-xxs" },
  { id: 6, text: "XS", value: "is-gap-top-bottom-xs" },
  { id: 5, text: "Small", value: "is-gap-top-bottom-sm" },
  { id: 4, text: "Middle", value: "is-gap-top-bottom-md" },
  { id: 3, text: "Large", value: "is-gap-top-bottom-lg" },
  { id: 2, text: "XL", value: "is-gap-top-bottom-xl" },
  { id: 1, text: "XXL", value: "is-gap-top-bottom-xxl" }
]

const rightLeftGaps = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-gap-right-left-xxs" },
  { id: 6, text: "XS", value: "is-gap-right-left-xs" },
  { id: 5, text: "Small", value: "is-gap-right-left-sm" },
  { id: 4, text: "Middle", value: "is-gap-right-left-md" },
  { id: 3, text: "Large", value: "is-gap-right-left-lg" },
  { id: 2, text: "XL", value: "is-gap-right-left-xl" },
  { id: 1, text: "XXL", value: "is-gap-right-left-xxl" }
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
      stretch: false,
      columnNum: 4,
      columnSize: "",
      align: "",
      gap: "is-gap-md",
      topBottomGap: "",
      rightLeftGap: ""
    }
    this.toggleSplitGap = this.toggleSplitGap.bind(this)
    this.toggleStretch = this.toggleStretch.bind(this)
    this.changeColumnNum = this.changeColumnNum.bind(this)
    this.changeColumnSize = this.changeColumnSize.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
    this.changeGap = this.changeGap.bind(this)
    this.changeTopBottomGap = this.changeTopBottomGap.bind(this)
    this.changeRightLeftGap = this.changeRightLeftGap.bind(this)
  }
  toggleSplitGap() {
    this.setState({ splitGap: !this.state.splitGap })
    if (this.state.splitGap) {
      this.setState({ gap: "is-gap-md" })
      this.setState({ topBottomGap: "" })
      this.setState({ rightLeftGap: "" })
    } else {
      this.setState({ gap: "" })
      this.setState({ topBottomGap: "is-gap-top-bottom-md" })
      this.setState({ rightLeftGap: "is-gap-right-left-md" })
    }
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
    this.setState({ topBottomGap: "" })
    this.setState({ rightLeftGap: "" })
  }
  changeTopBottomGap(value) {
    this.setState({ topBottomGap: value })
    this.setState({ gap: "" })
  }
  changeRightLeftGap(value) {
    this.setState({ rightLeftGap: value })
    this.setState({ gap: "" })
  }
  render() {
    const stretch = this.state.stretch ? "is-stretch" : ""
    const columnNum = this.state.columnNum
    const columnSize = this.state.columnSize
    const align = this.state.align
    const gap = this.state.gap
    const topBottomGap = this.state.topBottomGap
    const rightLeftGap = this.state.rightLeftGap
    const gridTagBefore = `<div class="grid
      ${align} ${gap} ${topBottomGap} ${rightLeftGap} ${stretch}">`
    const gridTagAfter = `</div>`
    const columns = []
    for (let i = 0; i < columnNum; i++) {
      columns.push(`<div class="column ${columnSize}"></div>`)
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
                  <DemoOption title={"Gap (All)"}>
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
                    <DemoOption title={"Gap (Top-Bottom)"}>
                      <DemoOptionBoxRadios
                        patterns={topBottomGaps}
                        parentChange={value => this.changeTopBottomGap(value)}
                        checked={this.state.topBottomGap}
                      />
                    </DemoOption>
                    <DemoOption title={"Gap (Right-Left)"}>
                      <DemoOptionBoxRadios
                        patterns={rightLeftGaps}
                        parentChange={value => this.changeRightLeftGap(value)}
                        checked={this.state.rightLeftGap}
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
