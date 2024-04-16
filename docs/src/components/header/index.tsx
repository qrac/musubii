import clsx from "clsx"
import {
  FiExternalLink,
  FiGithub,
  FiSun,
  FiMoon,
  FiMonitor,
  FiMenu,
  FiX,
} from "react-icons/fi"

import { version, repository } from "musubii/package.json"
import { site } from "../../../project"
import SvgLogo from "../../assets/images/logo.svg?react"

export function Header({
  isStiky,
  currentPath,
}: {
  isStiky?: boolean
  currentPath?: string
}) {
  return (
    <header
      className={clsx("section is-header", isStiky && "is-sticky")}
      id="header"
      data-header-mobile-menu-parent=""
    >
      <div className="inner is-py-sm is-pr-md is-pl-lg">
        <div className="box is-flex is-between is-middle is-gap-sm">
          <div className="box is-flex is-bottom is-gap-sm">
            <a href="/">
              <SvgLogo width={160} height={23} />
            </a>
            <span className="text is-font-sans-en is-line-height-xs is-xs">
              v{version}
            </span>
          </div>
          <div className="box is-flex is-middle is-gap-xs">
            <DesktopMenu />
            <ThemeMenu />
            <MobileMenuButton />
          </div>
        </div>
      </div>
      <MobileMenuContents currentPath={currentPath} />
    </header>
  )
}

function DesktopMenu() {
  return (
    <div className="box is-none desktop:is-block">
      <div className="box is-flex is-middle is-gap-xl is-font-sans-en">
        <ul className="box is-flex is-gap-xl">
          {site.menu.main.map((item, itemIndex) => (
            <li key={itemIndex}>
              <a
                href={item.path}
                className="box is-flex is-middle is-gap-xxs"
                rel={item.externalLink ? "noopener noreferrer" : undefined}
                target={item.externalLink ? "_blank" : undefined}
              >
                <span className="text is-weight-500">{item.title}</span>
                {item.externalLink && (
                  <FiExternalLink className="icon is-dark-4" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="box is-flex is-middle is-gap-xxs">
          <a
            href={repository.url}
            rel="noopener noreferrer"
            target="_blank"
            className="box is-flex is-p-xs is-link is-radius-ml"
          >
            <FiGithub title="GitHub" className="icon is-lg" />
          </a>
        </div>
      </div>
    </div>
  )
}

function ThemeMenu() {
  return (
    <details data-header-theme-menu="">
      <summary
        className="box is-flex is-p-xs is-link is-radius-ml"
        data-header-theme-menu-button=""
      >
        <FiSun
          title="Theme"
          className="icon is-lg"
          data-theme-content="light"
        />
        <FiMoon
          title="Theme"
          className="icon is-lg"
          data-theme-content="dark"
        />
      </summary>
      <div
        className="box is-bg-light is-outline is-p-sm is-radius-xl is-font-sans-en"
        data-header-theme-menu-contents=""
      >
        <ul>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-ml is-flex-full"
              data-theme-button="light"
              data-header-theme-menu-close=""
            >
              <FiSun className="icon is-lg" />
              <span className="text">Lignt</span>
            </button>
          </li>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-ml is-flex-full"
              data-theme-button="dark"
              data-header-theme-menu-close=""
            >
              <FiMoon className="icon is-lg" />
              <span className="text">Dark</span>
            </button>
          </li>
          <li className="box is-flex">
            <button
              type="button"
              className="box is-flex is-middle is-link is-nowrap is-py-xs is-px-sm is-gap-xs is-radius-ml is-flex-full"
              data-theme-button="system"
              data-header-theme-menu-close=""
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

function MobileMenuButton() {
  return (
    <div className="box desktop:is-none">
      <div className="box is-flex is-middle is-gap-xxs">
        <button
          type="button"
          className="box is-flex is-p-xs"
          data-header-mobile-menu-toggle=""
        >
          <FiMenu title="Menu" className="icon is-lg" />
          <FiX title="Close" className="icon is-lg" />
        </button>
      </div>
    </div>
  )
}

function MobileMenuContents({ currentPath }: { currentPath?: string }) {
  return (
    <div className="box desktop:is-none">
      <div data-header-mobile-menu-contents="">
        <div className="box is-px-lg is-pt-xl is-pb-xxl is-space-xl is-font-sans-en">
          <div className="grid is-gap-xl">
            {site.menu.docs.map((group, groupIndex) => (
              <div className="column is-flex-6" key={groupIndex}>
                <div className="box is-space-sm">
                  <h3 className="text is-weight-700 is-uppercase">
                    {group.title}
                  </h3>
                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {currentPath === item.path ? (
                          <span className="box is-flex is-flex-full is-py-xs is-px-md">
                            <span className="text is-primary">
                              {item.title}
                            </span>
                          </span>
                        ) : (
                          <a
                            className="box is-flex is-flex-full is-link is-py-xs is-px-md is-radius-ml"
                            href={item.path}
                          >
                            {item.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
