import React from "react"

import DemoOption from "~/components/parts/demo-option"
import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"

const modes = [
  { id: 0, text: "false", value: "simple" },
  { id: 1, text: "true", value: "light" }
  //{ id: 2, text: "true (dark)", value: "dark" }
]

class PreviewVariables extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "simple",
      simpleData: require("~/assets/extracts/mode/simple/" +
        this.props.filePath +
        ".json"),
      lightData: require("~/assets/extracts/mode/light/" +
        this.props.filePath +
        ".json")
      /*darkData: require("~/assets/extracts/mode/dark/" +
        this.props.filePath +
        ".json")*/
    }
    this.changeMode = this.changeMode.bind(this)
  }
  changeMode(value) {
    this.setState({ mode: value })
  }
  render() {
    const TableBodyItem = ({ item }) => (
      <li className="table-body-item">
        <dl className="item-list">
          <dt className="item-term">Name</dt>
          <dd className="item-description">
            <code className="demo-inline-code">{item.name}</code>
          </dd>
        </dl>
        <dl className="item-list">
          <dt className="item-term">Default Value</dt>
          <dd className="item-description">
            <code className="demo-inline-code">{item.value}</code>
          </dd>
        </dl>
        <dl className="item-list">
          <dt className="item-term">Compiled Value</dt>
          <dd className="item-description">
            <code className="demo-inline-code">{item.compiledValue}</code>
          </dd>
        </dl>
      </li>
    )
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
            {/*<div className="table-header-main">Variables</div>*/}
            <div className="table-header-item">
              <div className="item-child">Name</div>
              <div className="item-child">Default Value</div>
              <div className="item-child">Compiled Value</div>
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
            } /* else if (this.state.mode === "dark") {
                return (
                  <ul className="table-body">
                    {this.state.darkData.variables.map(variable => (
                      <TableBodyItem item={variable} key={variable.name} />
                    ))}
                  </ul>
                )
              }*/
          })()}
        </article>
      </div>
    )
  }
}

export default PreviewVariables
