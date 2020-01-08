import React from "react"

class CheckColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkColor: false
    }
  }
  componentDidMount() {
    if (process.browser) {
      const formula = "if($"
      if (this.props.value.startsWith(formula)) {
        return
      }
      const dummy = document.createElement("span")
      dummy.style.backgroundColor = this.props.value
      const result = dummy.style.backgroundColor !== ""
      this.setState({ checkColor: result })
    }
  }
  render() {
    return (
      <>
        {(() => {
          if (this.state.checkColor) {
            return <>{this.props.children}</>
          }
        })()}
      </>
    )
  }
}

export default CheckColor
