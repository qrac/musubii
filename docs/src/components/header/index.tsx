import clsx from "clsx"
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"

import { version } from "musubii/package.json"
import SvgLogo from "../../assets/images/logo.svg?react"

export function Header({ isStiky }: { isStiky?: boolean }) {
  return (
    <header
      className={clsx("section is-header is-py-sm", isStiky && "is-sticky")}
      id="header"
    >
      <div className="inner is-px-md">
        <div className="box is-flex is-between is-middle is-gap-sm">
          <div className="box is-flex is-bottom is-gap-sm">
            <a href="/">
              <SvgLogo width={160} height={23} />
            </a>
            <span className="text is-font-sans-en is-line-height-xs is-xs">
              v{version}
            </span>
          </div>
          <HeaderMenuTheme />
        </div>
      </div>
    </header>
  )
}

function HeaderMenuTheme() {
  return (
    <details data-header-menu="theme">
      <summary className="box is-flex is-p-xs" data-header-menu-button="">
        <FiSun className="icon is-lg" data-theme-content="light" />
        <FiMoon className="icon is-lg" data-theme-content="dark" />
      </summary>
      <div
        className="box is-bg-light is-outline is-p-sm is-radius-lg is-font-sans-en"
        data-header-menu-contents=""
      >
        <ul>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-sm is-flex-full"
              data-theme-button="light"
              data-header-menu-close=""
            >
              <FiSun className="icon is-lg" />
              <span className="text">Lignt</span>
            </button>
          </li>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-sm is-flex-full"
              data-theme-button="dark"
              data-header-menu-close=""
            >
              <FiMoon className="icon is-lg" />
              <span className="text">Dark</span>
            </button>
          </li>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-sm is-flex-full"
              data-theme-button="system"
              data-header-menu-close=""
            >
              <FiMonitor className="icon is-lg" />
              <span className="text">System</span>
            </button>
          </li>
        </ul>
      </div>
    </details>
  )
}

function HeaderMenuThemeSelect() {
  return (
    <div className="box is-flex is-middle is-gap-xs">
      <span className="text is-strong is-sm">Theme:</span>
      <div className="select is-font-sans-en">
        <select defaultValue={"system"}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
    </div>
  )
}
