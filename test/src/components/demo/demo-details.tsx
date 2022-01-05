import { useState } from "react"

export interface DemoDetailsProps {
  defaultOpen?: boolean
  summary: string
  children?: React.ReactNode
}

export const DemoDetails = (props: DemoDetailsProps) => {
  const { defaultOpen = false, summary, children } = props
  const [open, setOpen] = useState(defaultOpen)
  return (
    <details className="demo-details" open={open}>
      <summary className="demo-details-summary" onClick={() => setOpen(!open)}>
        {summary}
      </summary>
      <div className="demo-details-body">{children}</div>
    </details>
  )
}
