import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const tags = [
  { id: 0, text: "Div", value: "div" },
  { id: 1, text: "Anchor", value: "a" }
]

const radiusPatterns = [
  { id: 0, text: "None", value: "" },
  { id: 7, text: "XXS", value: "is-radius-xxs" },
  { id: 6, text: "XS", value: "is-radius-xs" },
  { id: 5, text: "Small", value: "is-radius-sm" },
  { id: 4, text: "Medium", value: "is-radius-md" },
  { id: 3, text: "Large", value: "is-radius-lg" },
  { id: 2, text: "XL", value: "is-radius-xl" },
  { id: 1, text: "XXL", value: "is-radius-xxl" }
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

export class PreviewCardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: "div",
      radiusPattern: "is-radius-md",
      bgLight: true,
      outline: false,
      link: false,
      zoom: false,
      floating: true,
      disabled: false,
      externalLink: false
    }
    this.changeTag = this.changeTag.bind(this)
    this.changeRadiusPattern = this.changeRadiusPattern.bind(this)
    this.toggleBgLight = this.toggleBgLight.bind(this)
    this.toggleOutline = this.toggleOutline.bind(this)
    this.toggleLink = this.toggleLink.bind(this)
    this.toggleZoom = this.toggleZoom.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleExternalLink = this.toggleExternalLink.bind(this)
  }
  changeTag(value) {
    this.setState({ tag: value })
  }
  changeRadiusPattern(value) {
    this.setState({ radiusPattern: value })
  }
  toggleBgLight() {
    this.setState({ bgLight: !this.state.bgLight })
  }
  toggleOutline() {
    this.setState({ outline: !this.state.outline })
  }
  toggleLink() {
    this.setState({ link: !this.state.link })
  }
  toggleZoom() {
    this.setState({ zoom: !this.state.zoom })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleExternalLink() {
    this.setState({ externalLink: !this.state.externalLink })
  }
  render() {
    const tag = this.state.tag
    const radiusPattern = this.state.radiusPattern
    const bgLight = this.state.bgLight ? "is-bg-light" : ""
    const outline = this.state.outline ? "is-outline" : ""
    const link = this.state.link ? "is-link" : ""
    const zoom = this.state.zoom ? "is-zoom" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
    const tagAttr = tag === "a" ? 'href="#"' : ""
    const disabledClass = disabled && tag === "a" ? "is-disabled" : ""
    const externalLink =
      this.state.externalLink && tag === "a"
        ? 'target="_blank" rel="noopener noreferrer"'
        : ""
    const contents = `<${tag} class="card ${bgLight} ${outline} ${link} ${zoom} ${floating}
      ${radiusPattern} ${disabledClass}" ${tagAttr} ${externalLink}
      ><div class="box is-padding-md">children</div></${tag}>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Tag"}>
              <DemoOptionBoxRadios
                patterns={tags}
                parentChange={value => this.changeTag(value)}
                checked={this.state.tag}
              />
            </DemoOption>
            <DemoOption title={"Attached"}>
              <DemoOptionBoxCheckbox
                text={"Background Light"}
                parentChange={() => this.toggleBgLight()}
                checked={this.state.bgLight}
              />
              <DemoOptionBoxCheckbox
                text={"Outline"}
                parentChange={() => this.toggleOutline()}
                checked={this.state.outline}
              />
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
            </DemoOption>
            <DemoOption title={"Radius"}>
              <DemoOptionBoxRadios
                patterns={radiusPatterns}
                parentChange={value => this.changeRadiusPattern(value)}
                checked={this.state.radiusPattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Link"}
                parentChange={() => this.toggleLink()}
                checked={this.state.link}
              />
              <DemoOptionBoxCheckbox
                text={"Zoom"}
                parentChange={() => this.toggleZoom()}
                checked={this.state.zoom}
              />
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
