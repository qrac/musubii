export interface ButtonProps {
  DOMElement?: "button" | "a"
  type?: "button" | "reset" | "submit"
  variant: "solid" | "outline" | "ghost"
  color?: "primary" | "secondary" | "success" | "danger"
  href?: string
  target?: "_self" | "_blank"
  isDisabled?: boolean
  text?: string
}

export const Button = (props: ButtonProps) => {
  const {
    DOMElement = "button",
    type = "button",
    variant,
    color,
    href = "",
    target,
    isDisabled,
    text,
  } = props
  const classNames = ["button", `is-${variant}`, color && `is-${color}`].join(
    " "
  )
  const ariaDisabled = isDisabled ? true : undefined
  const tabIndex = isDisabled ? -1 : undefined
  return (
    <DOMElement
      className={classNames}
      type={DOMElement === "button" ? type : undefined}
      href={DOMElement === "a" ? href : undefined}
      target={DOMElement === "a" ? target : undefined}
      disabled={DOMElement === "button" ? isDisabled : undefined}
      aria-disabled={DOMElement !== "button" ? ariaDisabled : undefined}
      tabIndex={DOMElement !== "button" ? tabIndex : undefined}
    >
      {text}
    </DOMElement>
  )
}
