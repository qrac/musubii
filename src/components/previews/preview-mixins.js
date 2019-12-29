import React from "react"

class PreviewMixins extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      simpleData: require("~/assets/extracts/modes/simple/" +
        this.props.filePath +
        ".json")
    }
  }
  render() {
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
                    return item.parameters
                      .map(parameter => parameter)
                      .join(", ")
                  }
                })()}
                {")"}
              </code>
            </div>
          </dd>
        </dl>
      </li>
    )
    return (
      <div className="demo-box is-preview">
        <article className="demo-flex-table">
          <ul className="table-body">
            {this.state.simpleData.mixins.map(mixin => (
              <TableBodyItem item={mixin} key={mixin.name} />
            ))}
          </ul>
        </article>
      </div>
    )
  }
}

export default PreviewMixins
