import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const aspects = [
  { id: 0, text: "16:9", value: "is-aspect-16x9" },
  { id: 1, text: "4:3", value: "is-aspect-4x3" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewIframeBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aspect: "is-aspect-16x9"
    }
    this.changeAspect = this.changeAspect.bind(this)
  }
  changeAspect(value) {
    this.setState({ aspect: value })
  }
  render() {
    const aspect = this.state.aspect
    const contents = `<div class="iframe ${aspect}">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/llQkSr6fzXg"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Aspect"}>
              <DemoOptionBoxRadios
                patterns={aspects}
                parentChange={value => this.changeAspect(value)}
                checked={this.state.aspect}
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
