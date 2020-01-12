import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import ActiveLink from "~/components/parts/active-link"
import pjt from "../../../project.json"

class AppMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      filter: false,
      initialItems: [],
      filterItems: []
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    //this.filterMenu = this.filterMenu.bind(this)
  }
  componentDidMount() {
    const menus = pjt.menus
    const lists = []
    menus.map(menu =>
      menu.items.map(item => {
        if (item["path"]) {
          lists.push(item)
        } else if (item.items) {
          item.items.map(childItem => lists.push(childItem))
        }
      })
    )
    //console.log(lists)
    this.setState({ initialItems: lists })
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
  filterMenu = e => {
    e.target.value
      ? this.setState({ filter: true })
      : this.setState({ filter: false })
    const updateItems = this.state.initialItems.filter(item => {
      return (
        item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    })
    this.setState({ filterItems: updateItems })
  }
  render() {
    const menus = pjt.menus
    /*const menuHeight = (() => {
      if (process.browser && this.state.open) {
        return document.getElementById("menu").clientHeight
      } else {
        return 0
      }
    })()*/

    const MenuItem1 = ({ menu }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.path && menu.title) {
            return (
              <ActiveLink href={menu.path} activeClassName="is-active">
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

    const MenuItem2 = ({ menu, id }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.path && menu.title) {
            return (
              <ActiveLink href={menu.path} activeClassName="is-active">
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

    const MenuItem3 = ({ menu }) => (
      <li className="menu-item">
        {(() => {
          if (menu.heading) {
            return <p className="menu-heading">{menu.heading}</p>
          }
        })()}
        {(() => {
          if (menu.path && menu.title) {
            return (
              <ActiveLink href={menu.path} activeClassName="is-active">
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
        <div
          className={
            this.state.open ? "menu-accordion is-active" : "menu-accordion"
          }
          /*style={{ maxHeight: menuHeight }}*/
        >
          <div className="menu-filter-wrap">
            <div className="menu-filter-input-wrap">
              <input
                className="input is-plain"
                type="search"
                placeholder="Filter the menu..."
                onChange={this.filterMenu}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="icon is-search is-dark-6"
              />
            </div>
          </div>
          {(() => {
            if (this.state.filter) {
              return (
                <nav className="menu" id="menu">
                  <ul className="menu-list">
                    <li className="menu-item">
                      <p className="menu-heading">Filter results</p>
                      <ul className="menu-list">
                        {this.state.filterItems.map(menu => (
                          <MenuItem3 menu={menu} key={menu.id} />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              )
            } else {
              return (
                <nav className="menu" id="menu">
                  <ul className="menu-list">
                    {menus.map(menu => (
                      <MenuItem1 menu={menu} key={menu.id} />
                    ))}
                  </ul>
                </nav>
              )
            }
          })()}
        </div>
      </div>
    )
  }
}

export default AppMenu
