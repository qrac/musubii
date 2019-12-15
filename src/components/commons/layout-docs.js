import { MDXProvider } from "@mdx-js/react"

import AppMenu from "~/components/commons/app-menu"
import DemoWrapper from "~/components/parts/demo-wrapper"
import DemoPre from "~/components/parts/demo-pre"

const components = {
  wrapper: DemoWrapper,
  pre: DemoPre
}

export default ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="section is-docs">
        <div className="inner is-padding-right-left-md">
          <AppMenu />
          {children}
        </div>
      </div>
    </MDXProvider>
  )
}
