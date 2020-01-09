import React from "react"

const TableBodyItem = ({ item }) => (
  <li className="table-body-item">
    <dl className="item-list is-mobile-0">
      <dd className="item-description">
        <div className="item-description-child">
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
        </div>
      </dd>
    </dl>
  </li>
)

class PreviewMixins extends React.Component {
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
          <ul className="table-body">
            {this.state.staticLightData.mixins.map(mixin => (
              <TableBodyItem item={mixin} key={mixin.name} />
            ))}
          </ul>
        </article>
      </div>
    )
  }
}

export default PreviewMixins
