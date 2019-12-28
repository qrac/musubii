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
    console.log(this.state.simpleData)
    //console.log(this.state.lightData)
    //console.log(this.state.darkData)
    return (
      <>
        {(() => {
          if (this.state.simpleData.variables) {
            return (
              <article className="demo-responsive-table">
                <header className="table-header">
                  <div className="table-header-main">Variables</div>
                  <div className="table-header-item">
                    <div className="item-child">name</div>
                    <div className="item-child">value</div>
                    <div className="item-child">compiledValue</div>
                  </div>
                </header>
                <ul className="table-body">
                  {this.state.simpleData.variables.map(variable => (
                    <li className="table-body-item" key={variable.name}>
                      <dl className="item-list">
                        <dt className="item-term">name</dt>
                        <dd className="item-description">
                          <code className="demo-inline-code">
                            {variable.name}
                          </code>
                        </dd>
                      </dl>
                      <dl className="item-list">
                        <dt className="item-term">value</dt>
                        <dd className="item-description">
                          <code className="demo-inline-code">
                            {variable.value}
                          </code>
                        </dd>
                      </dl>
                      <dl className="item-list">
                        <dt className="item-term">compiledValue</dt>
                        <dd className="item-description">
                          <code className="demo-inline-code">
                            {variable.compiledValue}
                          </code>
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </article>
            )
          }
        })()}
        {(() => {
          if (this.state.simpleData.mixins) {
            return <p>test</p>
          }
        })()}
      </>
    )
  }
}

export default PreviewVariables
