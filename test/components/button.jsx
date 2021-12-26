import React from "react"

const Button = ({ variant, text, color, disabled }) => {
  const classNames = [
    "button",
    variant ? `is-${variant}` : "is-plain",
    color && `is-${color}`,
  ].join(" ")
  return (
    <button type="button" className={classNames} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
