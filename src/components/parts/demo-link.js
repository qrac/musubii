import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default ({ children, props, href }) => {
  const regHttp = /^http/
  return (
    <>
      {regHttp.test(href) ? (
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
      ) : (
        <Link href={href}>
          <a className="demo-link" {...props}>
            <span>{children}</span>
          </a>
        </Link>
      )}
    </>
  )
}
