import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import DemoImageHero from "~/assets/images/demo-image-hero"

import pkg from "../../../package.json"

export default () => {
  return (
    <section className="section is-hero is-padding-horizontal-safe is-wide-lg">
      <div className="inner is-padding-horizontal-md">
        <div className="grid is-middle is-center is-gap-xxl">
          <div className="column is-space-md">
            <p className="text is-primary is-font-sans-en is-weight-700">
              <span className="text is-block is-hero-1">Simple CSS</span>
              <span className="text is-block is-hero-2">Framework for JP</span>
            </p>
            <h1 className="text is-line-height-lg is-sm">
              <span className="text is-fablet-block">
                MUSUBiiは日本語サイトのインブラウザデザインを想定した
              </span>
              <span className="text is-fablet-block">
                シンプルで薄味のレスポンシブ対応CSSフレームワークです。
              </span>
            </h1>
            <Link href="/getting-started/introduction">
              <a className="button is-plain is-primary is-round is-mobile-full is-lg">
                <FontAwesomeIcon
                  icon={faBook}
                  className="icon is-margin-right-sm"
                />
                <span className="text is-font-sans-en is-weight-900">
                  Getting Started
                </span>
              </a>
            </Link>
            <p className="text is-center is-weight-700 is-dark-3 is-sm">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon is-margin-right-xxs"
              />
              <span className="text is-font-sans-en">{pkg.license}・</span>
              <a
                className="text is-link-reverse"
                href={pkg.repository}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text is-font-sans-en">Repository</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="icon is-external-link-fix is-sm"
                />
              </a>
              <span className="text is-font-sans-en">・</span>
              <a
                className="text is-link-reverse"
                href={pkg.repository + "/releases"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text is-font-sans-en">Releases</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="icon is-external-link-fix is-sm"
                />
              </a>
            </p>
          </div>
          <div className="column">
            <DemoImageHero />
          </div>
        </div>
      </div>
    </section>
  )
}
