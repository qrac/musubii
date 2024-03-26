import clsx from "clsx"

const DOMElements = ["section", "div"] as const

export const sectionPatterns = {
  DOMElements,
}

export type SectionProps = {
  DOMElement?: (typeof DOMElements)[number]
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function Section({
  DOMElement = "section",
  className,
  children,
}: SectionProps) {
  return (
    <DOMElement className={clsx("section", className && className)}>
      <div className="inner">{children}</div>
    </DOMElement>
  )
}
