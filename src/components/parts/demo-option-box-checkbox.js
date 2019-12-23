import React from "react"

class DemoOptionBoxCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="demo-option-box is-margin-right-xl">
        <input
          className="input is-hidden"
          type="checkbox"
          onChange={() => this.props.parentChange()}
          checked={this.props.checked}
        />
        <label
          className="label is-middle"
          onClick={() => this.props.parentChange()}
        >
          <span className="checkbox is-margin-right-xxs"></span>
          <span className="text">{this.props.text}</span>
        </label>
      </div>
    )
  }
}

export default DemoOptionBoxCheckbox
