import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const listPatterns = [
  { id: 0, text: "Unordered", value: "ul" },
  { id: 1, text: "Ordered", value: "ol" }
]

const beautifyHtmlOptions = {
  inline: ["small", "strong", "em", "del", "code"],
  indent_size: 2
}

export class PreviewWysiwygHeading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const texts = []
    for (let i = 1; i < 7; i++) {
      texts.push(`<h${i}>${i}番目に大きな見出し</h${i}>`)
    }
    const contents = (wysiwygBefore + texts.join("") + wysiwygAfter)
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

export class PreviewWysiwygText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const texts = `<p>WYSIWYGには、<small>小さい文字</small>・<strong>強調</strong
    >・<em>イタリック</em>・<del>打ち消し線</del
    >などのデフォルトスタイルが使えます。</p>`
    const contents = (wysiwygBefore + texts + wysiwygAfter)
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

export class PreviewWysiwygLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reverse: false
    }
    this.toggleReverse = this.toggleReverse.bind(this)
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  render() {
    const reverse = this.state.reverse
    const linkClass = reverse ? "is-link-reverse" : ""
    const wysiwygBefore = `<div class="wysiwyg ${linkClass}">`
    const wysiwygAfter = `</div>`
    const texts = `<p>WYSIWYG内の<a href="#">アンカータグ</a>は自動的に装飾されます。下線効果は反転可能です。</p>`
    const contents = (wysiwygBefore + texts + wysiwygAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Link"}>
              <DemoOptionBoxCheckbox
                text={"Reverse"}
                parentChange={() => this.toggleReverse()}
                checked={this.state.reverse}
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

export class PreviewWysiwygBlockquote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const texts = `<blockquote>WYSIWYG内で引用のblockquoteタグを使った場合の装飾。</blockquote>`
    const contents = (wysiwygBefore + texts + wysiwygAfter)
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

export class PreviewWysiwygCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const texts = `<p>WYSIWYG内に<code>code</code>を表示させる。</p>`
    const contents = (wysiwygBefore + texts + wysiwygAfter)
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

export class PreviewWysiwygPre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const texts = `<pre><code>.my-css { color: red; }</code></pre>`
    const contents = (wysiwygBefore + texts + wysiwygAfter)
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

export class PreviewWysiwygList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listPattern: "ul",
      nested: false
    }
    this.changeListPattern = this.changeListPattern.bind(this)
    this.toggleNested = this.toggleNested.bind(this)
  }
  changeListPattern(value) {
    this.setState({ listPattern: value })
  }
  toggleNested() {
    this.setState({ nested: !this.state.nested })
  }
  render() {
    const listPattern = this.state.listPattern
    const nested = this.state.nested
    const tagBefore = `<${listPattern}>`
    const tagAfter = `</${listPattern}>`
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
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const contents = (
      wysiwygBefore +
      tagBefore +
      lists.join("") +
      tagAfter +
      wysiwygAfter
    )
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={listPatterns}
                parentChange={value => this.changeListPattern(value)}
                checked={this.state.listPattern}
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

export class PreviewWysiwygTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const table = `<table>
      <thead>
        <tr><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th><th>見出しセル</th></tr>
      </thead>
      <tbody>
        <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
        <tr><td>データセル</td><td>データセル</td><td>データセル</td><td>データセル</td></tr>
      </tbody>
    </table>`
    const contents = (wysiwygBefore + table + wysiwygAfter)
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

export class PreviewWysiwygDefinitionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const dl = `<dl>
      <dt>定義リストタイトル</dt>
      <dd>これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。</dd>
      <dt>定義リストタイトル</dt>
      <dd>これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。</dd>
      <dt>定義リストタイトル</dt>
      <dd>これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。</dd>
      <dt>定義リストタイトル</dt>
      <dd>これは定義リスト。物事、領域、何かについての意味の正確な文章や説明です。</dd>
    </dl>`
    const contents = (wysiwygBefore + dl + wysiwygAfter)
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

export class PreviewWysiwygFigure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const wysiwygBefore = `<div class="wysiwyg">`
    const wysiwygAfter = `</div>`
    const figure = `<figure>
        <img src="https://i.gyazo.com/a21c7b01996b7640ff84a1d6788135ea.png"
          alt="MUSIBii site in dark theme">
        <figcaption>MUSUBiiのダークテーマ</figcaption>
      </figure>`
    const contents = (wysiwygBefore + figure + wysiwygAfter)
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
