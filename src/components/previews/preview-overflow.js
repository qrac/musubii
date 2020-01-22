import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
//import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const overflows = [
  { id: 0, text: "Hidden", value: "hidden" },
  { id: 1, text: "Scroll X", value: "scroll-x" },
  { id: 2, text: "Scroll Y", value: "scroll-y" },
  { id: 3, text: "Ellipsis", value: "ellipsis" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewOverflowBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overflow: "hidden"
    }
    this.changeOverflow = this.changeOverflow.bind(this)
  }
  changeOverflow(value) {
    this.setState({ overflow: value })
  }
  render() {
    const overflow = this.state.overflow
    const wrapStyle = overflow === "scroll-x" ? " white-space: nowrap;" : ""
    const text =
      "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
    const contents = `<p class="text is-overflow-${overflow}" style="max-height: 4.25em; padding: 1em 0;${wrapStyle}">${text}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Overflow"}>
              <DemoOptionBoxRadios
                patterns={overflows}
                parentChange={value => this.changeOverflow(value)}
                checked={this.state.overflow}
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
