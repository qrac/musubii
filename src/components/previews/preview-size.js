import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const sizes = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-xxs" },
  { id: 6, text: "XS", value: "is-xs" },
  { id: 5, text: "Small", value: "is-sm" },
  { id: 4, text: "Medium", value: "is-md" },
  { id: 3, text: "Large", value: "is-lg" },
  { id: 2, text: "XL", value: "is-xl" },
  { id: 1, text: "XXL", value: "is-xxl" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewSizeBasic extends React.Component {
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
    const contents = `<button class="button is-plain is-primary ${size}" type="button">ボタンA</button>
    <button class="button is-outline is-danger ${size}" type="button">ボタンB</button>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Size"}>
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
            className="box is-flex is-space-right-xs is-space-bottom-xs is-margin-bottom-minus-xs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
