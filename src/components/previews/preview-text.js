import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const items = [
  { id: 0, role: "", text: "基本です" },
  { id: 1, role: "is-primary", text: "重要かも" },
  { id: 2, role: "is-info", text: "情報あり" },
  { id: 3, role: "is-success", text: "成功した" },
  { id: 4, role: "is-warning", text: "注意する" },
  { id: 5, role: "is-danger", text: "禁止する" }
]

const weights = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Normal", value: "is-normal" },
  { id: 2, text: "Strong", value: "is-strong" },
  { id: 3, text: "W100", value: "is-weight-100" },
  { id: 4, text: "W200", value: "is-weight-200" },
  { id: 5, text: "W300", value: "is-weight-300" },
  { id: 6, text: "W400", value: "is-weight-400" },
  { id: 7, text: "W500", value: "is-weight-500" },
  { id: 8, text: "W600", value: "is-weight-600" },
  { id: 9, text: "W700", value: "is-weight-700" },
  { id: 10, text: "W800", value: "is-weight-800" },
  { id: 11, text: "W900", value: "is-weight-900" }
]

const lineHeights = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-line-height-xxs" },
  { id: 6, text: "XS", value: "is-line-height-xs" },
  { id: 5, text: "Small", value: "is-line-height-sm" },
  { id: 4, text: "Middle", value: "is-line-height-md" },
  { id: 3, text: "Large", value: "is-line-height-lg" },
  { id: 2, text: "XL", value: "is-line-height-xl" },
  { id: 1, text: "XXL", value: "is-line-height-xxl" }
]

const transforms = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Italic", value: "is-italic" },
  { id: 2, text: "Delete", value: "is-delete" },
  { id: 3, text: "Capitalize", value: "is-capitalize" },
  { id: 4, text: "Lowercase", value: "is-lowercase" },
  { id: 5, text: "Uppercase", value: "is-uppercase" }
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "is-left" },
  { id: 2, text: "Center", value: "is-center" },
  { id: 3, text: "Right", value: "is-right" }
]

const verticalAligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "baseline", value: "is-baseline" },
  { id: 2, text: "top", value: "is-top" },
  { id: 3, text: "middle", value: "is-middle" },
  { id: 4, text: "bottom", value: "is-bottom" }
]

const wraps = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "No Wrap", value: "is-nowrap" },
  { id: 2, text: "Break", value: "is-break" }
]

const longTextJa =
  "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"

const longTextEn =
  "While climbing the mountain path, I thought like this. If you work on Ji, the corner will stand. It will be washed away if you let your heart stick. It's cramped if you can do it. Anyway, the world of people is hard to live. If you have difficulty living, you will want to move to a cheap place. When you realize that it is difficult to live wherever you go, poetry is born and you can paint."

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewTextDark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : "-" + i
      texts.push(`<span class="text is-dark${suffix}">ダーク</span>`)
    }
    const contents = texts
      .join("")
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

export class PreviewTextLight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const texts = []
    for (let i = 0; i < 10; i++) {
      const suffix = i === 0 ? "" : "-" + i
      texts.push(`<span class="text is-light${suffix}">ライト</span>`)
    }
    const contents = texts
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-box is-paint">
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

export class PreviewTextRole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = items
      .map(item => `<span class="text ${item.role}">${item.text}</span>`)
      .join("")
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

export class PreviewTextWeight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: ""
    }
    this.changeWeight = this.changeWeight.bind(this)
  }
  changeWeight(value) {
    this.setState({ weight: value })
  }
  render() {
    const weight = this.state.weight
    const contents = items
      .map(
        item => `<span class="text ${item.role} ${weight}">${item.text}</span>`
      )
      .join("")
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Weight"}>
              <DemoOptionBoxRadios
                patterns={weights}
                parentChange={value => this.changeWeight(value)}
                checked={this.state.weight}
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

export class PreviewTextLineHeight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lineHeight: ""
    }
    this.changeLineHeight = this.changeLineHeight.bind(this)
  }
  changeLineHeight(value) {
    this.setState({ lineHeight: value })
  }
  render() {
    const lineHeight = this.state.lineHeight
    const contents = `<p class="text ${lineHeight}">${longTextJa}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Line Height"}>
              <DemoOptionBoxRadios
                patterns={lineHeights}
                parentChange={value => this.changeLineHeight(value)}
                checked={this.state.lineHeight}
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

export class PreviewTextTransform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: ""
    }
    this.changeTransform = this.changeTransform.bind(this)
  }
  changeTransform(value) {
    this.setState({ transform: value })
  }
  render() {
    const transform = this.state.transform
    const tag = (() => {
      switch (transform) {
        case "is-italic":
          return "em"
        case "is-delete":
          return "del"
        default:
          return "span"
      }
    })()
    const contents = `<${tag} class="text ${transform}">Test text</${tag}>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Transform"}>
              <DemoOptionBoxRadios
                patterns={transforms}
                parentChange={value => this.changeTransform(value)}
                checked={this.state.transform}
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

export class PreviewTextAlign extends React.Component {
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
    const contents = `<p class="text ${align}">${longTextJa}</p>`
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

export class PreviewTextAlignJustify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      justify: true
    }
    this.toggleJustify = this.toggleJustify.bind(this)
  }
  toggleJustify() {
    this.setState({ justify: !this.state.justify })
  }
  render() {
    const justify = this.state.justify ? "is-justify" : ""
    const contents = `<p class="text ${justify} is-sm">${longTextJa}</p>
      <p class="text ${justify} is-sm">${longTextEn}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Justify"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJustify()}
                checked={this.state.justify}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-space"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewTextVerticalAlign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verticalAlign: ""
    }
    this.changeVerticalAlign = this.changeVerticalAlign.bind(this)
  }
  changeVerticalAlign(value) {
    this.setState({ verticalAlign: value })
  }
  render() {
    const verticalAlign = this.state.verticalAlign
    const contents = `<span class="text ${verticalAlign}">小さいテキスト</span>
      <span class="text is-xl">大きいテキスト</span>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Vertical Align"}>
              <DemoOptionBoxRadios
                patterns={verticalAligns}
                parentChange={value => this.changeVerticalAlign(value)}
                checked={this.state.verticalAlign}
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

export class PreviewTextWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wrap: ""
    }
    this.changeWrap = this.changeWrap.bind(this)
  }
  changeWrap(value) {
    this.setState({ wrap: value })
  }
  render() {
    const wrap = this.state.wrap
    const contents = `<p class="text ${wrap} is-lg">${longTextEn}</p>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Wrap"}>
              <DemoOptionBoxRadios
                patterns={wraps}
                parentChange={value => this.changeWrap(value)}
                checked={this.state.wrap}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-overflow-hidden"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}

export class PreviewTextLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reverse: false,
      disabled: false,
      externalLink: false
    }
    this.toggleReverse = this.toggleReverse.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  toggleReverse() {
    this.setState({ reverse: !this.state.reverse })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const reverse = this.state.reverse
    const disabled = this.state.disabled
    const linkClass = reverse ? "is-link-reverse" : "is-link"
    const disabledClass = disabled ? "is-disabled" : ""
    const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const externalLink = this.state.externalLink
      ? 'target="_blank" rel="noopener noreferrer"'
      : ""
    const contents = items
      .map(
        item =>
          `<a class="text ${item.role} ${linkClass} ${disabledClass}"
          href="#" ${externalLink} ${disabledTabIndex}>${item.text}</a>`
      )
      .join("")
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
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"External Link"}
                parentChange={() => this.toggleExternalLink()}
                checked={this.state.externalLink}
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

export class PreviewTextBlockquote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<blockquote class="blockquote"
      >引用の「blockquote」を使う場合。border-left と background-color を用いた装飾。</blockquote>`
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

export class PreviewTextCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<p class="text">テキストの途中に<code class="code">code</code>を表示させる。</p>`
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

export class PreviewTextPre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<pre class="pre"><code class="code">.my-css { color: red; }</code></pre>`
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
