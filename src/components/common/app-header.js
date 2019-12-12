import React from "react"

import SiteLogo from "~/components/parts/site-logo"
import NavLinks from "~/components/parts/nav-links"
import ToggleTheme from "~/components/parts/toggle-theme"

class AppHeader extends React.Component {
  render() {
    return (
      <header className="section is-header">
        <div className="inner is-padding-right-xs is-padding-left-md">
          <div className="grid is-middle is-between">
            <div className="column">
              <div className="box is-flex is-bottom">
                <div className="box is-margin-right-md">
                  <SiteLogo />
                </div>
                <div className="box">
                  <NavLinks />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AppHeader
