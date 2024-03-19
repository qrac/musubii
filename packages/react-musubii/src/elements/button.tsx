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
const types = ["button", "reset", "submit"] as const

export const buttonPatterns = {
  DOMElements,
  variants,
  colorSchemes,
  shapes,
  types,
}

export type ButtonProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  variant?: (typeof variants)[number]
  colorScheme?: (typeof colorSchemes)[number]
  shape?: (typeof shapes)[number]
  type?: (typeof types)[number]
  href?: string
  isStrong?: boolean
  isFloating?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export function Button({
  DOMElement = "button",
  className,
  variant = "plain",
  colorScheme,
  shape,
  type = "button",
  href = "",
  isStrong,
  isFloating,
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  const isButton = DOMElement === "button"
  const isAnchor = DOMElement === "a"
  return (
    <DOMElement
      className={clsx(
        "button",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        shape && `is-${shape}`,
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
