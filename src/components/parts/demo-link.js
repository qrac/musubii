import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExternalLinkAlt
  //faAngleDown
} from "@fortawesome/free-solid-svg-icons"

export default ({ children, props, href }) => {
  const regHttp = /^http/
  const regToc = /^#/
  return (
    <>
      {(() => {
        if (regHttp.test(href)) {
          return (
            <a
              className="demo-link"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              {...props}
            >
              <span>{children}</span>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="icon is-external-link-fix is-sm"
              />
            </a>
          )
        } else if (regToc.test(href)) {
          return (
            <a className="demo-link" href={href} {...props}>
              <span>{children}</span>
              {/*<FontAwesomeIcon
                icon={faAngleDown}
                className="icon is-angle-down-fix"
              />*/}
            </a>
          )
        } else {
          return (
            <Link href={href}>
              <a className="demo-link" {...props}>
                <span>{children}</span>
              </a>
            </Link>
          )
        }
      })()}
    </>
  )
}
