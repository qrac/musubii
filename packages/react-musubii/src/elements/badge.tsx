import clsx from "clsx"

const DOMElements = ["span", "div"] as const
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

export const badgePatterns = {
  DOMElements,
  variants,
  colorSchemes,
  shapes,
}

export type BadgeProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  variant?: (typeof variants)[number]
  colorScheme?: (typeof colorSchemes)[number]
  shape?: (typeof shapes)[number]
  isStrong?: boolean
  isDisabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export function Badge({
  DOMElement = "span",
  className,
  variant = "plain",
  colorScheme,
  shape,
  isStrong,
  isDisabled,
  children,
  ...props
}: BadgeProps) {
  return (
    <DOMElement
      className={clsx(
        "badge",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        shape && `is-${shape}`,
        isStrong && "is-strong",
        className && className
      )}
      aria-disabled={isDisabled ? isDisabled : undefined}
      {...props}
    >
      {children}
    </DOMElement>
  )
}
