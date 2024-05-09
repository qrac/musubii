import { site } from "../../../project"

export function Sidebar({ currentPath }: { currentPath?: string }) {
  return (
    <aside className="sidebar" id="sidebar">
      <Menu currentPath={currentPath} />
    </aside>
  )
}

function Menu({ currentPath }: { currentPath?: string }) {
  return (
    <div className="box is-pr-md is-space-xl is-font-sans-en">
      {site.menu.docs.map((group, groupIndex) => (
        <div className="box is-space-sm" key={groupIndex}>
          <h3 className="text is-weight-700 is-uppercase">{group.title}</h3>
          <ul>
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {currentPath === item.path ? (
                  <span className="box is-flex is-flex-full is-py-xs is-px-md">
                    <span className="text is-primary">{item.title}</span>
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
      ))}
    </div>
  )
}
