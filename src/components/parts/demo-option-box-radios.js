import React from "react"

class DemoOptionBoxRadios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {this.props.patterns.map(patternEl => (
          <div
            className="demo-option-box is-margin-right-md"
            key={patternEl.id}
          >
            <input
              className="input is-hidden"
              type="radio"
              onChange={() => this.props.parentChange(patternEl.value)}
              checked={this.props.checked === patternEl.value}
            />
            <label
              className="label is-middle"
              onClick={() => this.props.parentChange(patternEl.value)}
            >
              <span className="radio is-margin-right-xxs"></span>
              <span className="text">{patternEl.text}</span>
            </label>
          </div>
        ))}
      </>
    )
  }
}

export default DemoOptionBoxRadios
