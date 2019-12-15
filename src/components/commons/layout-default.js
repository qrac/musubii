import { MDXProvider } from "@mdx-js/react"

import DemoWrapper from "~/components/parts/demo-wrapper"

const components = {
  wrapper: DemoWrapper
}

export default ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
