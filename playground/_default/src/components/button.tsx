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
  type?: (typeof types)[number]
  href?: string
  variant?: (typeof variants)[number]
  colorScheme?: (typeof colorSchemes)[number]
  shape?: (typeof shapes)[number]
  angle?: (typeof angles)[number]
  isStrong?: boolean
  isFloating?: boolean
  isDisabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

type splitItem = (typeof angles)[number] | undefined

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
  function splitClasses(title: string, item: splitItem) {
    if (!item) return ""
    const items = item && item.split("-")
    return items.map((item) => `is-${title}-${item}`).join(" ")
  }
  const isButton = DOMElement === "button"
  const isAnchor = DOMElement === "a"
  const angleClasses = splitClasses("angle", angle)
  return (
    <DOMElement
      className={clsx(
        "button",
        `is-${variant}`,
        colorScheme && `is-${colorScheme}`,
        shape && `is-${shape}`,
        angleClasses,
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
