import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
//import DemoOptionBoxSelect from "~/components/parts/demo-option-box-select"
import DemoPre from "~/components/parts/demo-pre"

const buttonItems = [
  { id: 0, text: "左揃え", icon: "align-left" },
  { id: 1, text: "中央揃え", icon: "align-center" },
  { id: 2, text: "右揃え", icon: "align-right" }
]

const badgeItems = [
  { id: 0, role: "", text: "Build" },
  { id: 1, role: "is-success", text: "Passing" }
]

const patterns = [
  { id: 0, text: "Plain", value: "is-plain" },
  { id: 1, text: "Outline", value: "is-outline" }
]

const beautifyHtmlOptions = {
  inline: ["img"],
  indent_size: 2
}

export class PreviewJointButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-outline",
      joint: true,
      grow: false,
      round: false
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleGrow = this.toggleGrow.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleGrow() {
    this.setState({ grow: !this.state.grow })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const pattern = this.state.pattern
    const joint = this.state.joint ? "joint" : ""
    const grow = this.state.grow ? "is-0" : ""
    const round = this.state.round ? "is-round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = buttonItems
      .map(
        item =>
          `<button class="button ${pattern} ${grow} ${round}" type="button">
          <i aria-hidden="true" class="fas fa-${item.icon} is-fit is-margin-right-xxs"></i>
          <span class="text">${item.text}</span>
        </button>`
      )
      .join("")
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={value => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Grow"}
                parentChange={() => this.toggleGrow()}
                checked={this.state.grow}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
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

export class PreviewJointBadge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joint: true,
      round: false
    }
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const joint = this.state.joint ? "joint" : ""
    const round = this.state.round ? "is-round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = badgeItems
      .map(
        item => `<span class="badge is-plain ${item.role}
        ${round}">${item.text}</span>`
      )
      .join("")
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
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

export class PreviewJointForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joint: true,
      grow: false,
      round: false
    }
    this.toggleJoint = this.toggleJoint.bind(this)
    this.toggleGrow = this.toggleGrow.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
  }
  toggleGrow() {
    this.setState({ grow: !this.state.grow })
  }
  toggleJoint() {
    this.setState({ joint: !this.state.joint })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  render() {
    const joint = this.state.joint ? "joint" : ""
    const grow = this.state.grow ? "is-0" : ""
    const round = this.state.round ? "is-round" : ""
    const jointTagBefore = `<div class="${joint}">`
    const jointTagAfter = `</div>`
    const items = `<div class="select ${round}">
        <select>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
        </select>
      </div>
      <input type="text" class="input ${grow} ${round}" name="text" placeholder="キーワード">
      <button type="submit" class="button is-plain is-info ${round}">
        <i class="fas fa-search" aria-hidden="true"></i>
      </button>`
    const contents = (jointTagBefore + items + jointTagAfter)
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Joint"}>
              <DemoOptionBoxCheckbox
                text={"Active"}
                parentChange={() => this.toggleJoint()}
                checked={this.state.joint}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Grow (Text Input)"}
                parentChange={() => this.toggleGrow()}
                checked={this.state.grow}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
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
