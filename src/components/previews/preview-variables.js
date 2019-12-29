import React from "react"

import CheckColor from "~/components/parts/check-color"
import DemoColorBox from "~/components/parts/demo-color-box"
import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"

const modes = [
  { id: 0, text: "false", value: "simple" },
  { id: 1, text: "true", value: "light" }
  //{ id: 2, text: "true (dark)", value: "dark" }
]

const TableBodyItem = ({ item }) => {
  return (
    <li className="table-body-item">
      <dl className="item-list is-tablet-4">
        <dt className="item-term">Name</dt>
        <dd className="item-description">
          <div className="item-description-child">
            <code className="demo-inline-code">{item.name}</code>
          </div>
        </dd>
      </dl>
      <dl className="item-list is-tablet-4">
        <dt className="item-term">Default Value</dt>
        <dd className="item-description">
          <CheckColor value={item.value}>
            <DemoColorBox value={item.value} />
          </CheckColor>
          <div className="item-description-child">
            <code className="demo-inline-code">{item.value}</code>
          </div>
        </dd>
      </dl>
      {(() => {
        if (item.compiledValue) {
          return (
            <dl className="item-list is-tablet-4">
              <dt className="item-term">Compiled Value</dt>
              <dd className="item-description">
                <CheckColor value={item.compiledValue}>
                  <DemoColorBox value={item.compiledValue} />
                </CheckColor>
                <div className="item-description-child">
                  <code className="demo-inline-code">{item.compiledValue}</code>
                </div>
              </dd>
            </dl>
          )
        }
      })()}
    </li>
  )
}

export class PreviewVariablesSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpleData: require("~/assets/extracts/modes/simple/" +
        this.props.filePath +
        ".json")
    }
  }
  render() {
    return (
      <div className="demo-box is-preview">
        <article className="demo-flex-table">
          <header className="table-header">
            <div className="table-header-item">
              <div className="item-child is-tablet-4">Name</div>
              <div className="item-child is-tablet-4">Default Value</div>
              <div className="item-child is-tablet-4">Compiled Value</div>
            </div>
          </header>
          <ul className="table-body">
            {this.state.simpleData.variables.map(variable => (
              <TableBodyItem item={variable} key={variable.name} />
            ))}
          </ul>
        </article>
      </div>
    )
  }
}

export class PreviewVariablesDouble extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "simple",
      simpleData: require("~/assets/extracts/modes/simple/" +
        this.props.filePath +
        ".json"),
      lightData: require("~/assets/extracts/modes/light/" +
        this.props.filePath +
        ".json")
    }
    this.changeMode = this.changeMode.bind(this)
  }
  changeMode(value) {
    this.setState({ mode: value })
  }
  render() {
    return (
      <div className="demo-box is-preview">
        <div className="demo-options-wrap">
          <DemoOption title={"CSS Variables"}>
            <DemoOptionBoxRadios
              patterns={modes}
              parentChange={value => this.changeMode(value)}
              checked={this.state.mode}
            />
          </DemoOption>
        </div>
        <article className="demo-flex-table">
          <header className="table-header">
            <div className="table-header-item">
              <div className="item-child is-tablet-4">Name</div>
              <div className="item-child is-tablet-4">Default Value</div>
              <div className="item-child is-tablet-4">Compiled Value</div>
            </div>
          </header>
          {(() => {
            if (this.state.mode === "simple") {
              return (
                <ul className="table-body">
                  {this.state.simpleData.variables.map(variable => (
                    <TableBodyItem item={variable} key={variable.name} />
                  ))}
                </ul>
              )
            } else if (this.state.mode === "light") {
              return (
                <ul className="table-body">
                  {this.state.lightData.variables.map(variable => (
                    <TableBodyItem item={variable} key={variable.name} />
                  ))}
                </ul>
              )
            }
          })()}
        </article>
      </div>
    )
  }
}

export class PreviewVariablesCss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpleData: require("~/assets/extracts/modes/simple/" +
        this.props.filePath +
        ".json")
    }
  }
  render() {
    return (
      <div className="demo-box is-preview">
        <article className="demo-flex-table">
          <header className="table-header">
            <div className="table-header-item">
              <div className="item-child is-tablet-4">Name</div>
              <div className="item-child is-tablet-4">Default Value</div>
              <div className="item-child is-tablet-4">Compiled Value</div>
            </div>
          </header>
          <ul className="table-body">
            {this.state.simpleData["css-variables"].map(variable => (
              <TableBodyItem
                item={variable}
                cssVariables={true}
                key={variable.name}
              />
            ))}
          </ul>
        </article>
      </div>
    )
  }
}
