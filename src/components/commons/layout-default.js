import { MDXProvider } from "@mdx-js/react"

import DefaultWrapper from "~/components/parts/default-wrapper"

const components = {
  wrapper: DefaultWrapper
}

export default ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
