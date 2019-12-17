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
    return (
      <nav className="menu">
        <button
          className={this.state.open ? "menu-button is-active" : "menu-button"}
          onClick={this.toggleMenu}
        >
          Menu
        </button>
        <ul className={this.state.open ? "menu-list is-active" : "menu-list"}>
          {menus.map(menu => (
            <li className="menu-item" key={menu.id}>
              {menu.heading ? (
                <p className="menu-heading is-first">{menu.heading}</p>
              ) : (
                ""
              )}
              {menu.id && menu.title ? (
                <ActiveLink href={"/" + menu.id} activeClassName="is-active">
                  <a className="menu-link" onClick={this.closeMenu}>
                    {menu.title}
                  </a>
                </ActiveLink>
              ) : (
                ""
              )}
              {menu.items ? (
                <ul className="menu-list">
                  {menu.items.map(item => (
                    <li className="menu-item" key={menu.id + "-" + item.id}>
                      {item.heading ? (
                        <p className="menu-heading is-second">{item.heading}</p>
                      ) : (
                        ""
                      )}
                      {menu.id && item.id && item.title ? (
                        <ActiveLink
                          href={"/" + menu.id + "/" + item.id}
                          activeClassName="is-active"
                        >
                          <a className="menu-link" onClick={this.closeMenu}>
                            {item.title}
                          </a>
                        </ActiveLink>
                      ) : (
                        ""
                      )}
                      {item.items ? (
                        <ul className="menu-list">
                          {item.items.map(childItem => (
                            <li
                              className="menu-item"
                              key={menu.id + item.id + childItem.id}
                            >
                              {menu.id &&
                              item.id &&
                              childItem.id &&
                              childItem.title ? (
                                <ActiveLink
                                  href={
                                    "/" +
                                    menu.id +
                                    "/" +
                                    item.id +
                                    "/" +
                                    childItem.id
                                  }
                                  activeClassName="is-active"
                                >
                                  <a
                                    className="menu-link"
                                    onClick={this.closeMenu}
                                  >
                                    {childItem.title}
                                  </a>
                                </ActiveLink>
                              ) : (
                                ""
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default AppMenu
