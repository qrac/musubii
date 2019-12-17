import { MDXProvider } from "@mdx-js/react"

import AppMenu from "~/components/commons/app-menu"
import DemoWrapper from "~/components/parts/demo-wrapper"
import DemoHeading1 from "~/components/parts/demo-heading-1"
import DemoHeading2 from "~/components/parts/demo-heading-2"
import DemoTable from "~/components/parts/demo-table"
import DemoText from "~/components/parts/demo-text"
import DemoLink from "~/components/parts/demo-link"
import DemoInlineCode from "~/components/parts/demo-inline-code"
import DemoPreForMdx from "~/components/parts/demo-pre-for-mdx"

const components = {
  wrapper: DemoWrapper,
  h1: DemoHeading1,
  h2: DemoHeading2,
  table: DemoTable,
  p: DemoText,
  a: DemoLink,
  inlineCode: DemoInlineCode,
  pre: DemoPreForMdx
}

export default ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="section is-docs">
        <div className="inner is-padding-right-left-md">
          <div className="grid is-gap-md">
            <div className="column is-mobile-12 is-desktop-3">
              <AppMenu />
            </div>
            <div className="column is-mobile-12 is-desktop-9">{children}</div>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}
