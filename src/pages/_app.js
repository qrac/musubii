import React from "react"
import App from "next/app"

import AppHeader from "~/components/commons/app-header"
import AppFooter from "~/components/commons/app-footer"
import LayoutDefault from "~/components/commons/layout-default"
import LayoutDocs from "~/components/commons/layout-docs"
import "~/components/commons/app-styles.scss"

const H1 = props => <h1 style={{ color: "tomato" }} {...props} />

class MyApp extends App {
  componentDidMount() {
    const isLocal = localStorage.getItem("theme")
    const isDark = window.matchMedia("(prefers-color-scheme: dark)")

    if (isLocal) {
      document.body.setAttribute("data-theme", isLocal)
    } else if (isDark.matches) {
      document.body.setAttribute("data-theme", "dark")
    } else {
      document.body.setAttribute("data-theme", "light")
    }
  }
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <div className="app">
        <AppHeader />
        <main className="main">
          {router.route === "/" ? (
            <LayoutDefault>
              <Component {...pageProps} />
            </LayoutDefault>
          ) : (
            <LayoutDocs>
              <Component {...pageProps} />
            </LayoutDocs>
          )}
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
