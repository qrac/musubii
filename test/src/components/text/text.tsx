import classNames from "classnames"

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  DOMElement?:
    | "p"
    | "span"
    | "a"
    | "em"
    | "del"
    | "s"
    | "kbd"
    | "mark"
    | "sub"
    | "sup"
  className?: string
  colorScheme?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | (string & {})
  size?: "xs" | "sm" | "md" | "lg" | "xl" | (string & {})
  href?: string
  target?: "_self" | "_blank" | (string & {})
  isDisabled?: boolean
  children?: React.ReactNode
  attributes?: React.HTMLAttributes<HTMLElement>
}

export const Text = (props: TextProps) => {
  const {
    DOMElement = "p",
    className,
    colorScheme,
    size,
    href = "",
    target,
    isDisabled,
    children,
    ...attributes
  } = props
  const ariaDisabled = isDisabled ? true : undefined
  const tabIndex = isDisabled ? -1 : undefined
  return (
    <DOMElement
      className={classNames(
        "text",
        colorScheme && `is-${colorScheme}`,
        size && `is-size-${size}`,
        className && className
      )}
      href={DOMElement === "a" ? href : undefined}
      target={DOMElement === "a" ? target : undefined}
      aria-disabled={DOMElement === "a" ? ariaDisabled : undefined}
      tabIndex={DOMElement === "a" ? tabIndex : undefined}
      {...attributes}
    >
      {children}
    </DOMElement>
  )
}
