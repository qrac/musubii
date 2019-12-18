import React from "react"

import ActiveLink from "~/components/parts/active-link"
import pjt from "../../../project.json"

class AppMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }
  closeMenu() {
    this.setState({
      open: false
    })
  }
  render() {
    const menus = pjt.menus

    const MenuItem1 = ({ menu }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.id && menu.title) {
            return (
              <ActiveLink href={"/" + menu.id} activeClassName="is-active">
                <a className="menu-link" onClick={this.closeMenu}>
                  {menu.title}
                </a>
              </ActiveLink>
            )
          }
        })()}
        {(() => {
          if (menu.items) {
            return (
              <ul className="menu-list">
                {menu.items.map(item => (
                  <MenuItem2
                    menu={item}
                    path={menu.id}
                    id={menu.id}
                    key={menu.id + "-" + item.id}
                  />
                ))}
              </ul>
            )
          }
        })()}
      </li>
    )

    const MenuItem2 = ({ menu, path, id }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.id && menu.title) {
            return (
              <ActiveLink
                href={"/" + (path ? path + "/" : "") + menu.id}
                activeClassName="is-active"
              >
                <a className="menu-link" onClick={this.closeMenu}>
                  {menu.title}
                </a>
              </ActiveLink>
            )
          }
        })()}
        {(() => {
          if (menu.items) {
            return (
              <ul className="menu-list">
                {menu.items.map(item => (
                  <MenuItem3
                    menu={item}
                    path={(id ? id + "/" : "") + menu.id}
                    id={(id ? id + "-" : "") + menu.id}
                    key={(id ? id + "-" : "") + menu.id + "-" + item.id}
                  />
                ))}
              </ul>
            )
          }
        })()}
      </li>
    )

    const MenuItem3 = ({ menu, path }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.id && menu.title) {
            return (
              <ActiveLink
                href={"/" + (path ? path + "/" : "") + menu.id}
                activeClassName="is-active"
              >
                <a className="menu-link" onClick={this.closeMenu}>
                  {menu.title}
                </a>
              </ActiveLink>
            )
          }
        })()}
      </li>
    )
    return (
      <div className="menu-wrap">
        <button
          className={this.state.open ? "menu-button is-active" : "menu-button"}
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        <nav className={this.state.open ? "menu is-active" : "menu"}>
          <ul className="menu-list">
            {menus.map(menu => (
              <MenuItem1 menu={menu} key={menu.id} />
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default AppMenu
