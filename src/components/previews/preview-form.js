import React from "react"
import beautify from "js-beautify"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"
import DemoOptionBoxCheckbox from "~/components/parts/demo-option-box-checkbox"
import DemoPre from "~/components/parts/demo-pre"

const types = [
  { id: 0, text: "Text", value: "text" },
  { id: 1, text: "Password", value: "password" },
  { id: 2, text: "URL", value: "url" },
  { id: 3, text: "TEL", value: "tel" },
  { id: 4, text: "Number", value: "number" },
  { id: 5, text: "Date", value: "date" },
  { id: 6, text: "Time", value: "time" },
]

const patterns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Plain", value: "is-plain" },
  { id: 2, text: "Underline", value: "is-underline" },
  { id: 3, text: "Inside", value: "is-inside" },
]

const multiplePatterns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Plain", value: "is-plain" },
  { id: 3, text: "Inside", value: "is-inside" },
]

const buttonPatterns = [
  { id: 0, text: "Plain", value: "is-plain" },
  { id: 1, text: "Outline", value: "is-outline" },
  { id: 2, text: "Melt", value: "is-melt" },
]

const roles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Success", value: "is-success" },
  { id: 2, text: "Danger", value: "is-danger" },
]

const buttonRoles = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "Primary", value: "is-primary" },
  { id: 2, text: "Info", value: "is-info" },
  { id: 3, text: "Success", value: "is-success" },
  { id: 4, text: "Warning", value: "is-warning" },
  { id: 5, text: "Danger", value: "is-danger" },
]

const aligns = [
  { id: 0, text: "None", value: "" },
  { id: 1, text: "left", value: "is-left" },
  { id: 2, text: "Center", value: "is-center" },
  { id: 3, text: "Right", value: "is-right" },
]

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2,
}

export class PreviewFormBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "text",
      pattern: "",
      role: "",
      align: "",
      round: false,
      disabled: false,
      readonly: false,
    }
    this.changeType = this.changeType.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.changeAlign = this.changeAlign.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleReadonly = this.toggleReadonly.bind(this)
  }
  changeType(value) {
    this.setState({ type: value })
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  changeAlign(value) {
    this.setState({ align: value })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleReadonly() {
    this.setState({ readonly: !this.state.readonly })
  }
  render() {
    const type = this.state.type
    const pattern = this.state.pattern
    const role = this.state.role
    const round = this.state.round ? "is-round" : ""
    const align = this.state.align
    const disabled = this.state.disabled ? "disabled" : ""
    const readonly = this.state.readonly ? "readonly" : ""
    const subText = type === "text" ? 'placeholder="Text"' : ""
    const subUrl = type === "url" ? 'placeholder="https://example.com"' : ""
    const subEmal = type === "email" ? 'placeholder="example@gmail.com"' : ""
    const subTel = type === "tel" ? 'placeholder="000-0000-0000"' : ""
    const subNumber = type === "number" ? 'step="100" placeholder="10000"' : ""
    const subDate = type === "date" ? 'value="2020-01-01"' : ""
    const subTime = type === "time" ? 'value="09:30:00"' : ""
    const contents = `<input class="input ${pattern} ${role} ${align} ${round}"
      type="${type}" name="${type}"
      ${subText} ${subUrl} ${subEmal} ${subTel} ${subNumber} ${subDate} ${subTime}
      ${disabled} ${readonly} />`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Type"}>
              <DemoOptionBoxRadios
                patterns={types}
                parentChange={(value) => this.changeType(value)}
                checked={this.state.type}
              />
            </DemoOption>
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={patterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Align"}>
              <DemoOptionBoxRadios
                patterns={aligns}
                parentChange={(value) => this.changeAlign(value)}
                checked={this.state.align}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"Readonly"}
                parentChange={() => this.toggleReadonly()}
                checked={this.state.readonly}
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

export class PreviewFormTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
      readonly: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.toggleReadonly = this.toggleReadonly.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  toggleReadonly() {
    this.setState({ readonly: !this.state.readonly })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const readonly = this.state.readonly ? "readonly" : ""
    const contents = `<textarea class="textarea ${pattern} ${role}"
      name="text" ${disabled} ${readonly}></textarea>`
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
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
              <DemoOptionBoxCheckbox
                text={"Readonly"}
                parentChange={() => this.toggleReadonly()}
                checked={this.state.readonly}
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

export class PreviewFormFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-plain",
      role: "",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleStrong() {
    this.setState({ strong: !this.state.strong })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled
    const disabledClass = disabled ? "is-disabled" : ""
    //const disabledTabIndex = disabled ? 'tabindex="-1"' : ""
    const contents = `<label class="button ${pattern} ${role}
      ${strong} ${round} ${floating} ${disabledClass}">
        <span class="text">ファイル選択</span>
        <input class="input" type="file" name="file">
      </label>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={buttonPatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={buttonRoles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Strong"}
                parentChange={() => this.toggleStrong()}
                checked={this.state.strong}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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

export class PreviewFormRadio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="box is-flex is-space-right-md"><div class="box">
        <input class="input" id="radio-demo-1-1" type="radio" name="radio-demo-1" checked>
        <label class="label is-middle" for="radio-demo-1-1">
          <span class="radio is-margin-right-xxs"></span>
          <span class="text">むすびー</span>
        </label>
      </div>
      <div class="box">
        <input class="input" id="radio-demo-1-2" type="radio" name="radio-demo-1">
        <label class="label is-middle" for="radio-demo-1-2">
          <span class="radio is-margin-right-xxs"></span>
          <span class="text">むすびい</span>
        </label>
      </div>
      <div class="box">
        <input class="input" id="radio-demo-1-3" type="radio" name="radio-demo-1" disabled>
        <label class="label is-middle" for="radio-demo-1-3">
          <span class="radio is-margin-right-xxs"></span>
          <span class="text">むすび</span>
        </label>
      </div></div>`
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

export class PreviewFormCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<div class="box is-flex is-space-right-md"><div class="box">
        <input class="input" id="checkbox-demo-1-1" type="checkbox" name="checkbox-demo-1" checked>
        <label class="label is-middle" for="checkbox-demo-1-1">
          <span class="checkbox is-margin-right-xxs"></span>
          <span class="text">むすびー</span>
        </label>
      </div>
      <div class="box">
        <input class="input" id="checkbox-demo-1-2" type="checkbox" name="checkbox-demo-1">
        <label class="label is-middle" for="checkbox-demo-1-2">
          <span class="checkbox is-margin-right-xxs"></span>
          <span class="text">むすびい</span>
        </label>
      </div>
      <div class="box">
        <input class="input" id="checkbox-demo-1-3" type="checkbox" name="checkbox-demo-1" disabled>
        <label class="label is-middle" for="checkbox-demo-1-3">
          <span class="checkbox is-margin-right-xxs"></span>
          <span class="text">むすび</span>
        </label>
      </div></div>`
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

export class PreviewFormSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="select ${pattern} ${role}">
        <select ${disabled}>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
          <option>Select D</option>
          <option>Select E</option>
        </select>
      </div>`
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
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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

export class PreviewFormSelectMultiple extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "",
      role: "",
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.changeRole = this.changeRole.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  changeRole(value) {
    this.setState({ role: value })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const role = this.state.role
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="select is-multiple ${pattern} ${role}">
        <select size="5" multiple ${disabled}>
          <option>Select A</option>
          <option>Select B</option>
          <option>Select C</option>
          <option>Select D</option>
          <option>Select E</option>
        </select>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={multiplePatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Role"}>
              <DemoOptionBoxRadios
                patterns={roles}
                parentChange={(value) => this.changeRole(value)}
                checked={this.state.role}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
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

export class PreviewFormFieldset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const contents = `<fieldset class="fieldset">
        <p class="text">フォームテキスト</p>
      </fieldset>`
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

export class PreviewFormButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: "is-plain",
      strong: false,
      round: false,
      floating: false,
      disabled: false,
    }
    this.changePattern = this.changePattern.bind(this)
    this.toggleStrong = this.toggleStrong.bind(this)
    this.toggleRound = this.toggleRound.bind(this)
    this.toggleFloating = this.toggleFloating.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
  }
  changePattern(value) {
    this.setState({ pattern: value })
  }
  toggleStrong() {
    this.setState({ strong: !this.state.strong })
  }
  toggleRound() {
    this.setState({ round: !this.state.round })
  }
  toggleFloating() {
    this.setState({ floating: !this.state.floating })
  }
  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled })
  }
  render() {
    const pattern = this.state.pattern
    const strong = this.state.strong ? "is-strong" : ""
    const round = this.state.round ? "is-round" : ""
    const floating = this.state.floating ? "is-floating" : ""
    const disabled = this.state.disabled ? "disabled" : ""
    const contents = `<div class="box is-flex is-space-right-xs">
          <button class="button ${pattern} ${strong} ${round} ${floating}" type="button" ${disabled}>ボタン</button>
          <button class="button ${pattern} is-primary ${strong} ${round} ${floating}" type="button" ${disabled}>ボタン</button>
        </div>
        <div class="box is-flex is-space-right-xs">
          <button class="button ${pattern} ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
          <button class="button ${pattern} is-warning ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
          <button class="button ${pattern} is-danger ${strong} ${round} ${floating}" type="reset" ${disabled}>リセット</button>
        </div>
        <div class="box is-flex is-space-right-xs">
          <button class="button ${pattern} is-primary ${strong} ${round} ${floating}" type="submit" ${disabled}>送信</button>
          <button class="button ${pattern} is-success ${strong} ${round} ${floating}" type="submit" ${disabled}>送信</button>
      </div>`
      .replace(/\s+/g, " ")
      .replace(/\s\"/g, '"')
    const formattedCode = beautify.html(contents, beautifyHtmlOptions)
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <div className="demo-options">
            <DemoOption title={"Pattern"}>
              <DemoOptionBoxRadios
                patterns={buttonPatterns}
                parentChange={(value) => this.changePattern(value)}
                checked={this.state.pattern}
              />
            </DemoOption>
            <DemoOption title={"Other"}>
              <DemoOptionBoxCheckbox
                text={"Strong"}
                parentChange={() => this.toggleStrong()}
                checked={this.state.strong}
              />
              <DemoOptionBoxCheckbox
                text={"Round"}
                parentChange={() => this.toggleRound()}
                checked={this.state.round}
              />
              <DemoOptionBoxCheckbox
                text={"Floating"}
                parentChange={() => this.toggleFloating()}
                checked={this.state.floating}
              />
              <DemoOptionBoxCheckbox
                text={"Disabled"}
                parentChange={() => this.toggleDisabled()}
                checked={this.state.disabled}
              />
            </DemoOption>
          </div>
        </div>
        <div className="demo-box is-line">
          <div
            className="box is-space-sm"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></div>
        </div>
        <DemoPre language="html" code={formattedCode} />
      </div>
    )
  }
}
