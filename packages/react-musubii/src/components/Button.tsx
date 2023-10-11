import classNames from "classnames"

const DOMElements = ["button", "a"] as const
const variants = ["solid", "outline", "ghost"] as const
const colorSchemes = ["primary", "secondary", "success", "danger"] as const
const types = ["button", "reset", "submit"] as const

export const buttonPatterns = {
  DOMElements,
  variants,
  colorSchemes,
  types,
}

export type ButtonProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  variant?: (typeof variants)[number]
  colorScheme?: (typeof colorSchemes)[number]
  type?: (typeof types)[number]
  href?: string
  isDisabled?: boolean
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export function Button({
  DOMElement = "button",
  className,
  variant = "solid",
  colorScheme,
  type = "button",
  href = "",
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  const isButton = DOMElement === "button"
  const isAnchor = DOMElement === "a"
  return (
    <DOMElement
      className={classNames(
        "button",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
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
