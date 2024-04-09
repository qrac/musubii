import { FiBookOpen, FiGithub, FiExternalLink } from "react-icons/fi"

import { license, repository } from "musubii/package.json"
import { site } from "../../../project"
import SvgTitle from "../../assets/images/title.svg?react"
import SvgHero from "../../assets/images/hero.svg?react"

export function Hero() {
  return (
    <section className="section is-hero wide:is-lg" id="hero">
      <div className="inner">
        <div className="box is-flex is-middle is-gap-y-xxl">
          <div className="box is-flex-full is-px-xl fablet:is-flex-0 is-space-md">
            <SvgTitle />
            <h1 className="text is-auto-phrase is-line-height-lg is-sm">
              {site.description}
            </h1>
            <div className="box is-flex">
              <a
                href="/docs/"
                className="button is-plain is-primary is-round is-py-md is-flex-0 is-lg"
              >
                <FiBookOpen className="icon is-lg" />
                <span className="text is-font-sans-en">Getting Started</span>
              </a>
            </div>
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
            </p>
          </div>
          <div className="box is-flex-full is-px-xl fablet:is-flex-0">
            <SvgHero />
          </div>
        </div>
      </div>
    </section>
  )
}
