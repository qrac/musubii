import classNames from "classnames"

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string
  variant: "solid" | "subtle" | "outline" | (string & {})
  colorScheme?: "primary" | "secondary" | "success" | "danger" | (string & {})
  size?: "sm" | "md" | "lg" | "xl" | (string & {})
  width?: "full" | (string & {})
  aspect?: "square" | (string & {})
  rounded?: "full" | (string & {})
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  text?: string
  children?: React.ReactNode
  attributes?: React.HTMLAttributes<HTMLElement>
}

export const Badge = (props: BadgeProps) => {
  const {
    className,
    variant,
    colorScheme,
    size,
    width,
    aspect,
    rounded,
    leftIcon,
    rightIcon,
    text,
    children,
    ...attributes
  } = props
  return (
    <span
      className={classNames(
        "badge",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        size && `is-size-${size}`,
        width && `is-width-${width}`,
        aspect && `is-aspect-${aspect}`,
        rounded && `is-rounded-${rounded}`,
        className && className
      )}
      {...attributes}
    >
      {leftIcon}
      {text}
      {children}
      {rightIcon}
    </span>
  )
}
