import Link from "next/link"

import SiteLogo from "~/assets/images/site-logo"

export default () => {
  return (
    <>
      <Link href="/">
        <a className="site-logo-link">
          <SiteLogo />
        </a>
      </Link>
    </>
  )
}
