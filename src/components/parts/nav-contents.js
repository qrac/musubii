import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default () => {
  const contents = [
    {
      title: "Licence",
      text: pkg.license
    },
    {
      title: "Author",
      text: "Qrac",
      url: "https://twitter.com/" + pjt.site.twitter_id
    },
    {
      title: "GitHub",
      text: "Repository",
      url: pkg.repository
    },
    {
      text: "Releases",
      url: pkg.repository + "/releases"
    }
  ]
  return (
    <div className="grid is-center is-gap-sm">
      {contents.map((content, i) => (
        <div className="column" key={i}>
          <p className="text is-sm">
            {content.title ? (
              <span className="text is-font-sans-en">{content.title}: </span>
            ) : (
              ""
            )}
            {content.url ? (
              <a
                className="text is-link-reverse"
                href={content.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text is-font-sans-en">{content.text}</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="icon is-external-link-fix is-sm"
                />
              </a>
            ) : (
              <span className="text is-font-sans-en">{content.text}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  )
}
