import classNames from "classnames"

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  DOMElement?: "button" | "a"
  className?: string
  type?: "button" | "reset" | "submit"
  variant: "solid" | "subtle" | "outline" | "ghost" | (string & {})
  colorScheme?: "primary" | "secondary" | "success" | "danger" | (string & {})
  size?: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
  width?: "full" | (string & {})
  aspect?: "square" | (string & {})
  rounded?: "full" | (string & {})
  angle?:
    | "left"
    | "left-up"
    | "left-down"
    | "right"
    | "right-up"
    | "right-down"
    | (string & {})
  href?: string
  target?: "_self" | "_blank" | (string & {})
  isDisabled?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  text?: string
  children?: React.ReactNode
  attributes?: React.HTMLAttributes<HTMLElement>
}

export const Button = (props: ButtonProps) => {
  const {
    DOMElement = "button",
    className,
    type = "button",
    variant,
    colorScheme,
    size,
    width,
    aspect,
    rounded,
    angle,
    href = "",
    target,
    isDisabled,
    leftIcon,
    rightIcon,
    text,
    children,
    ...attributes
  } = props
  const ariaDisabled = isDisabled ? true : undefined
  const tabIndex = isDisabled ? -1 : undefined
  return (
    <DOMElement
      className={classNames(
        "button",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        size && `is-size-${size}`,
        width && `is-width-${width}`,
        aspect && `is-aspect-${aspect}`,
        rounded && `is-rounded-${rounded}`,
        angle && "is-angle",
        angle && `is-angle-${angle}`,
        className && className
      )}
      type={DOMElement === "button" ? type : undefined}
      href={DOMElement === "a" ? href : undefined}
      target={DOMElement === "a" ? target : undefined}
      disabled={DOMElement === "button" ? isDisabled : undefined}
      aria-disabled={DOMElement !== "button" ? ariaDisabled : undefined}
      tabIndex={DOMElement !== "button" ? tabIndex : undefined}
      {...attributes}
    >
      {leftIcon}
      {text}
      {children}
      {rightIcon}
    </DOMElement>
  )
}
