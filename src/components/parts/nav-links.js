import React from "react"

import pkg from "../../../package.json"

class NavLinks extends React.Component {
  render() {
    const contents = [
      {
        text: "v" + pkg.version,
        url: pkg.repository + "/releases"
      },
      {
        text: "GitHub",
        url: pkg.repository
      }
    ]
    return (
      <div className="nav-links is-xs">
        {contents.map((content, i) => (
          <a
            className="text is-link"
            href={content.url}
            rel="noopener noreferrer"
            target="_blank"
            key={i}
          >
            <span className="text">{content.text}</span>
            <svg
              className="icon is-external-link"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 100 100"
            >
              <path d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
              <polygon points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
            </svg>
          </a>
        ))}
      </div>
    )
  }
}

export default NavLinks
