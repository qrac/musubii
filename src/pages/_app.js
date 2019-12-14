import React from "react"
import App from "next/app"
import { PageTransition } from "next-page-transitions"

import AppHeader from "~/components/common/app-header"
import AppFooter from "~/components/common/app-footer"
import "~/components/common/app-styles.scss"

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
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
