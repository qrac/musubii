import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const sizes = [
  { id: 0, text: "未設定", value: "" },
  { id: 13, text: "伸縮幅", value: "is-0" },
  { id: 1, text: "1/12", value: "is-1" },
  { id: 2, text: "2/12", value: "is-2" },
  { id: 3, text: "3/12", value: "is-3" },
  { id: 4, text: "4/12", value: "is-4" },
  { id: 5, text: "5/12", value: "is-5" },
  { id: 6, text: "6/12", value: "is-6" },
  { id: 7, text: "7/12", value: "is-7" },
  { id: 8, text: "8/12", value: "is-8" },
  { id: 9, text: "9/12", value: "is-9" },
  { id: 10, text: "10/12", value: "is-10" },
  { id: 11, text: "11/12", value: "is-11" },
  { id: 12, text: "12/12", value: "is-12" },
  { id: 14, text: "Full", value: "is-full" },
  { id: 15, text: "Auto", value: "is-auto" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewFlexBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: ""
    }
    this.changeSize = this.changeSize.bind(this)
  }
  changeSize(value) {
    this.setState({ size: value })
  }
  render() {
    const size = this.state.size
    const contents = `<div class="grid is-gap-xs">
        <div class="column ${size}">
          <button class="button is-plain is-primary is-full" type="button">ボタンA</button>
        </div>
        <div class="column ${size}">
          <button class="button is-outline is-danger is-full" type="button">ボタンB</button>
        </div>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Flex"}>
              <DemoOptionBoxRadios
                patterns={sizes}
                parentChange={value => this.changeSize(value)}
                checked={this.state.size}
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
