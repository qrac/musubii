import clsx from "clsx"

const DOMElements = ["button", "a"] as const
const variants = ["plain", "outline", "melt"] as const
const colorSchemes = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
] as const
const shapes = ["round", "square", "circle"] as const
const angles = [
  "right",
  "left",
  "right-up",
  "right-down",
  "left-up",
  "left-down",
] as const
const types = ["button", "reset", "submit"] as const

export const buttonPatterns = {
  DOMElements,
  variants,
  colorSchemes,
  shapes,
  angles,
  types,
}

export type ButtonProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  variant?: (typeof variants)[number]
  colorScheme?: (typeof colorSchemes)[number]
  shape?: (typeof shapes)[number]
  angle?: (typeof angles)[number]
  type?: (typeof types)[number]
  href?: string
  isStrong?: boolean
  isFloating?: boolean
  isDisabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export function Button({
  DOMElement = "button",
  className,
  type = "button",
  href = "",
  variant = "plain",
  colorScheme,
  shape,
  angle,
  isStrong,
  isFloating,
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  const isButton = DOMElement === "button"
  const isAnchor = DOMElement === "a"
  const angleClasses = () => {
    switch (angle) {
      case "right":
        return "is-angle-right"
      case "left":
        return "is-angle-left"
      case "right-up":
        return "is-angle-right is-angle-up"
      case "right-down":
        return "is-angle-right is-angle-down"
      case "left-up":
        return "is-angle-left is-angle-up"
      case "left-down":
        return "is-angle-left is-angle-down"
      default:
        return ""
    }
  }
  return (
    <DOMElement
      className={clsx(
        "button",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        shape && `is-${shape}`,
        angleClasses(),
        isStrong && "is-strong",
        isFloating && "is-floating",
        className && className
      )}
      type={isButton ? type : undefined}
      href={isAnchor ? href : undefined}
      disabled={isButton ? isDisabled : undefined}
      aria-disabled={!isButton ? isDisabled : undefined}
      {...props}
    >
      {children}
    </DOMElement>
  )
}
