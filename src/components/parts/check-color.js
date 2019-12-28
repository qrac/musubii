import React from "react"

class CheckColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  checkColor(checkValue) {
    if (process.browser) {
      const checkColorBox = document.createElement("div")
      checkColorBox.style.backgroundColor = checkValue
      console.log(checkValue)
      return checkColorBox.style.backgroundColor !== ""
    }
  }
  render() {
    return (
      <>
        {(() => {
          //console.log(value)
          if (this.checkColor(this.props.value)) {
            return <>{this.props.children}</>
          }
        })()}
      </>
    )
  }
}

export default CheckColor
