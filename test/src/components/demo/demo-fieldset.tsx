export interface DemoFieldsetProps {
  legend?: string
  children?: React.ReactNode
}

export const DemoFieldset = (props: DemoFieldsetProps) => {
  const { legend, children } = props
  return (
    <fieldset className="demo-fieldset">
      <legend className="demo-legend">{legend}</legend>
      {children}
    </fieldset>
  )
}
