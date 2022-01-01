import classNames from "classnames"

export interface ButtonProps {
  id?: string
  DOMElement?: "button" | "a"
  type?: "button" | "reset" | "submit"
  variant: "solid" | "outline" | "ghost" | (string & {})
  color?: "primary" | "secondary" | "success" | "danger" | (string & {})
  size?: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
  width?: "full" | (string & {})
  aspect?: "square" | (string & {})
  rounded?: "full" | (string & {})
  href?: string
  target?: "_self" | "_blank"
  isDisabled?: boolean
  text?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
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
    width,
    aspect,
    rounded,
    href = "",
    target,
    isDisabled,
    text,
    leftIcon,
    rightIcon,
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
        width && `is-width-${width}`,
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
      {leftIcon}
      {text}
      {children}
      {rightIcon}
    </DOMElement>
  )
}
