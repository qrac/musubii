import classNames from "classnames"

export interface ButtonProps {
  id?: string
  DOMElement?: "button" | "a"
  type?: "button" | "reset" | "submit"
  variant: "solid" | "outline" | "ghost"
  color?: "primary" | "secondary" | "success" | "danger"
  isRound?: boolean
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  href?: string
  target?: "_self" | "_blank"
  isDisabled?: boolean
  text?: string
  customClass?: string
  customStyle?: React.CSSProperties
  children?: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    id,
    DOMElement = "button",
    type = "button",
    variant,
    color,
    size,
    isRound,
    href = "",
    target,
    isDisabled,
    text,
    customClass,
    customStyle,
    children,
  } = props
  const ariaDisabled = isDisabled ? true : undefined
  const tabIndex = isDisabled ? -1 : undefined
  return (
    <DOMElement
      id={id}
      className={classNames(
        "button",
        `is-${variant}`,
        color && `is-${color}`,
        isRound && "is-round",
        size && `is-size-${size}`,
        customClass && customClass
      )}
      type={DOMElement === "button" ? type : undefined}
      href={DOMElement === "a" ? href : undefined}
      target={DOMElement === "a" ? target : undefined}
      disabled={DOMElement === "button" ? isDisabled : undefined}
      aria-disabled={DOMElement !== "button" ? ariaDisabled : undefined}
      tabIndex={DOMElement !== "button" ? tabIndex : undefined}
      style={customStyle}
    >
      {text}
      {children}
    </DOMElement>
  )
}
