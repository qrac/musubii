import React from "react"
import App from "next/app"
import Head from "next/head"

import AppHeader from "~/components/common/app-header"
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
    const { Component, pageProps } = this.props
    return (
      <>
        <Head></Head>
        <AppHeader />
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}

export default MyApp
