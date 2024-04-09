import clsx from "clsx"

import { version } from "musubii/package.json"
import SvgLogo from "../../assets/images/logo.svg?react"

export function Header({ isStiky }: { isStiky?: boolean }) {
  return (
    <header
      className={clsx("section is-header", isStiky && "is-sticky")}
      id="header"
    >
      <div className="inner">
        <div className="box is-flex is-between is-middle is-gap-sm">
          <div className="box is-flex is-bottom is-gap-sm">
            <a href="/">
              <SvgLogo width={160} height={23} />
            </a>
            <span className="text is-font-sans-en is-line-height-xs is-xs">
              v{version}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
