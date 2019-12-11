import React from "react"

import Logo from "./logo"
import Version from "./version"
import Github from "./github"
import Theme from "./theme"

class Header extends React.Component {
  render() {
    return (
      <header className="section is-header">
        <div className="inner is-padding-right-xs is-padding-left-md">
          <div className="grid is-middle is-between">
            <div className="column">
              <div className="box is-flex is-bottom">
                <Logo />
                <div className="box">
                  <Version />
                  <Github />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box is-flex is-middle">
                <Theme />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .section.is-header {
            position: relative;
            padding: 0.75em 0;
            z-index: 10;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
