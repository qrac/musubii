import classNames from "classnames"

export interface ButtonProps {
  id?: string
  DOMElement?: "button" | "a"
  type?: "button" | "reset" | "submit"
  variant: "solid" | "outline" | "ghost" | (string & {})
  color?: "primary" | "secondary" | "success" | "danger" | (string & {})
  size?: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
  aspect?: "square" | (string & {})
  rounded?: "full" | (string & {})
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
    aspect,
    rounded,
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
        size && `is-size-${size}`,
        aspect && `is-aspect-${aspect}`,
        rounded && `is-rounded-${rounded}`,
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
