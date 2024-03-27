import clsx from "clsx"

const DOMElements = ["div", "a"] as const
const outlines = ["all", "top", "right", "bottom", "left"] as const
const separates = ["all", "parent", "child"] as const
const angles = [
  "right",
  "left",
  "right-up",
  "right-down",
  "left-up",
  "left-down",
] as const

export const boxPatterns = {
  DOMElements,
  outlines,
  separates,
  angles,
}

export type BoxProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  href?: string
  isBackground?: boolean
  outline?: (typeof outlines)[number] | (typeof outlines)[number][]
  separate?: (typeof separates)[number] | (typeof separates)[number][]
  angle?: (typeof angles)[number]
  isLink?: boolean
  isDisabled?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

type pipeItem =
  | (typeof outlines)[number]
  | (typeof separates)[number]
  | undefined
type pipeItems = pipeItem | pipeItem[] | undefined
type splitItem = (typeof angles)[number] | undefined

export function Box({
  DOMElement = "div",
  className,
  href = "",
  isBackground,
  outline,
  separate,
  angle,
  isLink,
  isDisabled,
  children,
  ...props
}: BoxProps) {
  function pipeClass(title: string, item: pipeItem) {
    if (!item) return ""
    return item === "all" ? `is-${title}` : `is-${title}-${item}`
  }
  function pipeClasses(title: string, items: pipeItems) {
    if (!items) return ""
    if (Array.isArray(items)) {
      return items.map((item) => pipeClass(title, item)).join(" ")
    } else {
      return pipeClass(title, items)
    }
  }
  function splitClasses(title: string, item: splitItem) {
    if (!item) return ""
    const items = item && item.split("-")
    return items.map((item) => `is-${title}-${item}`).join(" ")
  }
  const isAnchor = DOMElement === "a"
  const outlineClasses = pipeClasses("outline", outline)
  const separateClasses = pipeClasses("separate", separate)
  const angleClasses = splitClasses("angle", angle)
  return (
    <DOMElement
      className={clsx(
        "box",
        isBackground && "is-bg",
        outlineClasses,
        separateClasses,
        angleClasses,
        isLink && "is-link",
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
