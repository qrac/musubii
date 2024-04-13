import type { LayoutProps } from "minista-plugin-ssg/client"
import { Head } from "minista-plugin-ssg/client"

import { site } from "../../project"
import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
import { Footer } from "../components/footer"
import setupTheme from "../components/theme/setup.js?raw"

type CustomLayoutProps = LayoutProps & { layout?: string; noindex?: boolean }

export default function ({
  layout,
  noindex,
  title,
  url,
  children,
}: CustomLayoutProps) {
  const siteTitle = site.title
  const siteDesc = site.description
  const siteUrl = site.url
  const pageTitle = url === "/" ? siteTitle : title + " - " + siteTitle
  const ogUrl = siteUrl + url
  const ogImage = siteUrl + "/assets/images/ogp.png"
  const ogType = url === "/" ? "website" : "article"
  const twitterCard = "summary_large_image"
  const twitterId = "@" + site.twitter.id
  const isNoindex = noindex || false
  const appleTouchIcon = "/apple-touch-icon.png"
  const favicon = "/favicon.png"
  return (
    <>
      <Head bodyAttributes={{ class: "site" }}>
        <title>{pageTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:creator" content={twitterId} />
        {isNoindex && <meta name="robots" content="noindex" />}
        <link rel="stylesheet" href="/src/assets/style.css" />
        <script type="module" src="/src/assets/script.ts" />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <link rel="icon" href={favicon} />
      </Head>
      <Header isStiky={layout === "docs"} />
      <main className="section" id="main">
        {layout === "docs" ? (
          <section className="section is-docs">
            <div className="inner">
              <div className="box is-flex is-gap-xl">
                <Sidebar />
                <div className="box is-flex-0">{children}</div>
              </div>
            </div>
          </section>
        ) : (
          <>{children}</>
        )}
      </main>
      <Footer />
      <script dangerouslySetInnerHTML={{ __html: setupTheme }} />
    </>
  )
}
