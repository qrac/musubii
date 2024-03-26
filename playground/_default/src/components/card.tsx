import clsx from "clsx"

const DOMElements = ["div", "a"] as const
const radiuses = [
  undefined,
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
] as const

export const cardPatterns = {
  DOMElements,
  radiuses,
}

export type CardProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  href?: string
  isBackground?: boolean
  isOutline?: boolean
  radius?: (typeof radiuses)[number]
  isFloating?: boolean
  isLink?: boolean
  isZoom?: boolean
  isDisabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

export function Card({
  DOMElement = "div",
  className,
  href = "",
  isBackground,
  isOutline,
  radius,
  isFloating,
  isLink,
  isZoom,
  isDisabled,
  children,
  ...props
}: CardProps) {
  const isAnchor = DOMElement === "a"
  return (
    <DOMElement
      className={clsx(
        "card",
        isBackground && "is-bg",
        isOutline && "is-outline",
        radius && `is-radius-${radius}`,
        isFloating && "is-floating",
        isLink && "is-link",
        isZoom && "is-zoom",
        className && className
      )}
      href={isAnchor ? href : undefined}
      aria-disabled={isDisabled ? isDisabled : undefined}
      {...props}
    >
      {children}
    </DOMElement>
  )
}
