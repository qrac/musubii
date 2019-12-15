import { MDXProvider } from "@mdx-js/react"

import DemoPre from "~/components/parts/demo-pre"

const components = {
  pre: DemoPre
}

export default ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="layout is-docs">{children}</div>
    </MDXProvider>
  )
}
