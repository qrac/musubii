import React from "react"

const DemoRadios = ({ items, name, checked, action }) => {
  return (
    <div className="demo-labels">
      {items.map((item, index) => (
        <label className="demo-label" key={index}>
          <input
            type="radio"
            name={name}
            onChange={() => action(item)}
            checked={checked === item}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

export default DemoRadios
