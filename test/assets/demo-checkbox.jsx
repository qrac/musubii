import React from "react"

const DemoCheckbox = ({ text, checked, action }) => {
  return (
    <label className="demo-label">
      <input type="checkbox" onChange={() => action()} checked={checked} />
      <span>{text}</span>
    </label>
  )
}

export default DemoCheckbox
