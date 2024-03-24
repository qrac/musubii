export function DemoFieldsets({ children }: { children: React.ReactNode }) {
  return <div className="demo-fieldsets">{children}</div>
}

export function DemoFieldset({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="demo-fieldset">
      {title && <legend className="demo-fieldset-legend">{title}</legend>}
      <div className="demo-fieldset-contents">{children}</div>
    </fieldset>
  )
}
