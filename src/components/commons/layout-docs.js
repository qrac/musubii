import { MDXProvider } from "@mdx-js/react"

import DemoWrapper from "~/components/parts/demo-wrapper"
import DemoPre from "~/components/parts/demo-pre"

const components = {
  wrapper: DemoWrapper,
  pre: DemoPre
}

export default ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="layout is-docs">{children}</div>
    </MDXProvider>
  )
}
