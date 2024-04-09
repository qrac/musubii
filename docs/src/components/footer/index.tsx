import { FiGithub, FiExternalLink } from "react-icons/fi"

import { license, repository } from "musubii/package.json"
import { site } from "../../../project"

export function Footer() {
  return (
    <footer className="section is-footer" id="footer">
      <div className="inner is-space-md">
        <p className="text is-font-sans-en is-flex is-center is-gap-md is-middle is-sm">
          <span className="text is-flex is-gap-xxs is-middle">
            <FiGithub className="icon" />
            <span className="text">{license}</span>
          </span>
          <span className="text is-flex is-gap-xxs is-middle">
            <a
              href={repository.url}
              rel="noopener noreferrer"
              target="_blank"
              className="text is-link-reverse"
            >
              Repository
            </a>
            <FiExternalLink className="icon" />
          </span>
          <span className="text is-flex is-gap-xxs is-middle">
            <a
              href={repository.url + "/releases"}
              rel="noopener noreferrer"
              target="_blank"
              className="text is-link-reverse"
            >
              Releases
            </a>
            <FiExternalLink className="icon" />
          </span>
          <span className="text is-flex is-gap-xxs is-middle">
            {"𝕏"}
            <a
              href="https://twitter.com/Qrac_JP"
              rel="noopener noreferrer"
              target="_blank"
              className="text is-link-reverse"
            >
              Qrac
            </a>
            <FiExternalLink className="icon" />
          </span>
        </p>
        <p className="text is-font-sans-en is-center is-sm">
          <span>© {site.copyright.startYear} </span>
          <a href={site.copyright.url} className="text is-link-reverse">
            {site.copyright.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
