import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const patterns = [
  { id: 0, text: "Disc", value: "is-disc" },
  { id: 1, text: "Circle", value: "is-circle" },
  { id: 2, text: "Square", value: "is-square" },
  { id: 3, text: "Kome", value: "is-kome" },
  { id: 4, text: "Decimal", value: "is-decimal" }
]

const beautifyHtmlOptions = {
  inline: ["span", "div"],
  indent_size: 2
}

export class PreviewListBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-disc",
      nested: false
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleNested = this.toggleNested.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleNested() {
    this.setState({ nested: !this.state.nested })
  }
  render() {
    const pattern = this.state.pattern
    const nested = this.state.nested
    const tagBefore = `<ul class="list ${pattern}">`
    const tagAfter = `</ul>`
    const nestedLists = []
    for (let i = 0; i < 4; i++) {
      nestedLists.push(
        `<li class="item">リストを入れ子にした場合は、その分インデントを追加して構造を見せる</li>`
      )
    }
    const lists = []
    for (let i = 0; i < 4; i++) {
      lists.push(
        `<li class="item">リストはインデントしてテキストが折り返した場合に読みやすくする${
          nested && i === 3 ? tagBefore + nestedLists.join("") + tagAfter : ""
        }</li>`
      )
    }
    const contents = (tagBefore + lists.join("") + tagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Nested"}
                parentChange={() => this.toggleNested()}
                checked={this.state.nested}
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

export class PreviewListNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nested: false
    }
    this.toggleNested = this.toggleNested.bind(this)
  }
  toggleNested() {
    this.setState({ nested: !this.state.nested })
  }
  render() {
    const nested = this.state.nested
    const tagBefore = `<ul class="list is-note">`
    const tagAfter = `</ul>`
    const nestedLists = []
    for (let i = 0; i < 4; i++) {
      nestedLists.push(
        `<li class="item"><span>※${i + 1}</span><div class="text is-0"
        >自由な見出しをインラインで置きつつインデント</div></li>`
      )
    }
    const lists = []
    for (let i = 0; i < 4; i++) {
      lists.push(
        `<li class="item"><span>※${i + 1}</span><div class="text is-0"
        >自由な見出しをインラインで置きつつインデント${
          nested && i === 3 ? tagBefore + nestedLists.join("") + tagAfter : ""
        }</div></li>`
      )
    }
    const contents = (tagBefore + lists.join("") + tagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Nested"}
                parentChange={() => this.toggleNested()}
                checked={this.state.nested}
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
