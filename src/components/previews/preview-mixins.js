import React from "react"

//import DemoOption from "~/components/parts/demo-option"
//import DemoOptionBoxRadios from "~/components/parts/demo-option-box-radios"

const modes = [
  { id: 0, text: "false", value: "simple" }
  //{ id: 1, text: "true", value: "light" },
  //{ id: 2, text: "true (dark)", value: "dark" }
]

class PreviewMixins extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "simple",
      simpleData: require("~/assets/extracts/mode/simple/" +
        this.props.filePath +
        ".json")
      /*lightData: require("~/assets/extracts/mode/light/" +
        this.props.filePath +
        ".json"),*/
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
          <dd className="item-description">
            <code className="demo-inline-code">
              {item.name}
              {"("}
              {(() => {
                if (item.parameters) {
                  return item.parameters.map(parameter => parameter).join(", ")
                }
              })()}
              {")"}
            </code>
          </dd>
        </dl>
      </li>
    )
    return (
      <div className="demo-box is-preview">
        {/*<div className="demo-options-wrap">
          <DemoOption title={"CSS Variables"}>
            <DemoOptionBoxRadios
              patterns={modes}
              parentChange={value => this.changeMode(value)}
              checked={this.state.mode}
            />
          </DemoOption>
        </div>*/}
        <article className="demo-flex-table">
          {/*<header className="table-header">
            <div className="table-header-main">Mixins</div>
          </header>*/}
          {(() => {
            if (this.state.mode === "simple") {
              return (
                <ul className="table-body">
                  {this.state.simpleData.mixins.map(mixin => (
                    <TableBodyItem item={mixin} key={mixin.name} />
                  ))}
                </ul>
              )
            } /* else if (this.state.mode === "light") {
                return (
                  <ul className="table-body">
                    {this.state.lightData.mixins.map(mixin => (
                      <TableBodyItem item={mixin} key={mixin.name} />
                    ))}
                  </ul>
                )
              }*/ /* else if (this.state.mode === "dark") {
                return (
                  <ul className="table-body">
                    {this.state.darkData.mixins.map(mixin => (
                      <TableBodyItem item={mixin} key={mixin.name} />
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

export default PreviewMixins
