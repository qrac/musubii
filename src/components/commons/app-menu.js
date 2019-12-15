import ActiveLink from "~/components/parts/active-link"

import pjt from "../../../project.json"

export default () => {
  const menus = pjt.menus
  return (
    <nav className="menu">
      <ul className="menu-list">
        {menus.map(menu => (
          <li className="menu-item" key={menu.id}>
            {menu.heading ? (
              <p className="menu-heading is-first">{menu.heading}</p>
            ) : (
              ""
            )}
            {menu.id && menu.title ? (
              <ActiveLink href={"/" + menu.id} activeClassName="is-active">
                <a className="menu-link">{menu.title}</a>
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
                        <a className="menu-link">{item.title}</a>
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
                                <a className="menu-link">{childItem.title}</a>
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
