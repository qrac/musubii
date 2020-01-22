import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const patterns = [
  { id: 2, text: "Border", value: "is-border" },
  { id: 0, text: "Line", value: "is-line" },
  { id: 1, text: "Outline", value: "is-outline" }
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "is-left" },
  { id: 2, text: "Center", value: "is-center" },
  { id: 3, text: "Right", value: "is-right" },
  { id: 4, text: "middle", value: "is-middle" }
]

const beautifyHtmlOptions = {
  inline: ["th", "td", "br", "span"],
  indent_size: 2
}

export class PreviewTableBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-border"
    }
    this.changePattern = this.changePattern.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  render() {
    const pattern = this.state.pattern
    const contents = `<table class="table ${pattern}">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
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

export class PreviewTableBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="table is-border">
        <thead>
          <tr class="box is-paint"><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td class="box is-spot">データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td class="box is-danger">データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
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

export class PreviewTableBackgroundStripe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="table is-border is-stripe">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
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

export class PreviewTableAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      align: ""
    }
    this.changeAlign = this.changeAlign.bind(this)
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  render() {
    const align = this.state.align
    const contents = `<table class="table is-border ${align}">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセル</td><td>データセル<br/>データセル</td><td>データセル</td><td>データセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセル<br/>データセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
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

export class PreviewTableFixed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<table class="table is-border is-fixed">
        <thead>
          <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
        </thead>
        <tbody>
          <tr><td>データセルデータセル</td><td>データセル</td><td>データセル</td><td>データセルデータセルデータセル</td></tr>
          <tr><td>データセル</td><td>データセル</td><td>データセルデータセルデータセル</td><td>データセル</td></tr>
        </tbody>
      </table>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
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

export class PreviewTableWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="table-wrap">
        <table class="table is-border is-stripe">
          <thead>
            <tr class="box is-paint"><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
          </thead>
          <tbody>
            <tr
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
            <tr
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td
            ><td><span class="text is-nowrap">折り返さないテキスト＋折り返さないテキスト</span></td></tr
            >
          </tbody>
        </table>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
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
