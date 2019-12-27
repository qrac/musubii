import React from "react"

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
        ".json"),
      darkData: require("~/assets/extracts/mode/dark/" +
        this.props.filePath +
        ".json")
    }
  }
  render() {
    //console.log(this.state.mode)
    //console.log(this.state.simpleData)
    //console.log(this.state.lightData)
    //console.log(this.state.darkData)
    return (
      <div className="demo-table-wrap">
        <table className="demo-table">
          <thead>
            <tr>
              <th>variable</th>
              <th>value</th>
              <th>compiledValue</th>
            </tr>
          </thead>
          <tbody>
            {this.state.simpleData.variables.map(variable => (
              <tr key={variable.name}>
                <td>
                  <code className="code">{variable.name}</code>
                </td>
                <td>
                  <code className="code">{variable.value}</code>
                </td>
                <td>
                  <code className="code">{variable.compiledValue}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PreviewVariables
