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

const TableBodyItem = ({ item, viewCompiled }) => {
  return (
    <li className="table-body-item">
      <dl
        className={
          viewCompiled ? "item-list is-tablet-4" : "item-list is-tablet-6"
        }
      >
        <dt className="item-term">Name</dt>
        <dd className="item-description">
          <div className="item-description-child">
            <code className="demo-inline-code">{item.name}</code>
          </div>
        </dd>
      </dl>
      <dl
        className={
          viewCompiled ? "item-list is-tablet-4" : "item-list is-tablet-6"
        }
      >
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
        if (item.compiledValue && viewCompiled) {
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
      staticLightData: require("~/assets/extracts/modes/static-light/" +
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
              <div
                className={
                  this.props.viewCompiled
                    ? "item-child is-tablet-4"
                    : "item-child is-tablet-6"
                }
              >
                Name
              </div>
              <div
                className={
                  this.props.viewCompiled
                    ? "item-child is-tablet-4"
                    : "item-child is-tablet-6"
                }
              >
                Default Value
              </div>
              {(() => {
                if (this.props.viewCompiled) {
                  return (
                    <div className="item-child is-tablet-4">Compiled Value</div>
                  )
                }
              })()}
            </div>
          </header>
          <ul className="table-body">
            {this.state.staticLightData.variables.map(variable => (
              <TableBodyItem
                item={variable}
                key={variable.name}
                viewCompiled={this.props.viewCompiled}
              />
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
      staticLightData: require("~/assets/extracts/modes/static-light/" +
        this.props.filePath +
        ".json"),
      dynamicLightData: require("~/assets/extracts/modes/dynamic-light/" +
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
              <div
                className={
                  this.props.viewCompiled
                    ? "item-child is-tablet-4"
                    : "item-child is-tablet-6"
                }
              >
                Name
              </div>
              <div
                className={
                  this.props.viewCompiled
                    ? "item-child is-tablet-4"
                    : "item-child is-tablet-6"
                }
              >
                Default Value
              </div>
              {(() => {
                if (this.props.viewCompiled) {
                  return (
                    <div className="item-child is-tablet-4">Compiled Value</div>
                  )
                }
              })()}
            </div>
          </header>
          {(() => {
            if (this.state.mode === "simple") {
              return (
                <ul className="table-body">
                  {this.state.staticLightData.variables.map(variable => (
                    <TableBodyItem
                      item={variable}
                      key={variable.name}
                      viewCompiled={this.props.viewCompiled}
                    />
                  ))}
                </ul>
              )
            } else if (this.state.mode === "light") {
              return (
                <ul className="table-body">
                  {this.state.dynamicLightData.variables.map(variable => (
                    <TableBodyItem
                      item={variable}
                      key={variable.name}
                      viewCompiled={this.props.viewCompiled}
                    />
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
      staticLightData: require("~/assets/extracts/modes/static-light/" +
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
            {this.state.staticLightData["css-variables"].map(variable => (
              <TableBodyItem
                item={variable}
                cssVariables={true}
                key={variable.name}
                viewCompiled={true}
              />
            ))}
          </ul>
        </article>
      </div>
    )
  }
}
