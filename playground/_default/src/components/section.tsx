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

export function Section({ DOMElement = "section", children }: SectionProps) {
  return (
    <DOMElement className="section">
      <div className="inner">{children}</div>
    </DOMElement>
  )
}
