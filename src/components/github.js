import React from "react"

import pkg from "../../package.json"

class Github extends React.Component {
  render() {
    return (
      <a
        className="text is-link is-github"
        href={pkg.repository}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="text">GitHub</span>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          ></path>
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          ></polygon>
        </svg>
        <style jsx>{`
          .text.is-link.is-github {
            font-size: 75%;
          }
          .text.is-link.is-github .icon {
            margin-left: 0.125em;
            font-size: 1em;
            opacity: 0.75;
          }
        `}</style>
      </a>
    )
  }
}

export default Github
