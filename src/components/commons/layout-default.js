import { MDXProvider } from "@mdx-js/react"

import DemoWrapperBlank from "~/components/parts/demo-wrapper-blank"

const components = {
  wrapper: DemoWrapperBlank
}

export default ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
