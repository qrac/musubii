import React from "react"
import App from "next/app"
import Head from "next/head"

import ToggleTheme from "../components/toggle-theme"

import "../components/styles.scss"
import "../components/highlight.scss"

class MyApp extends App {
  componentDidMount() {
    if (localStorage.getItem("theme")) {
      document.body.setAttribute("data-theme", localStorage.getItem("theme"))
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head></Head>
        <ToggleTheme />
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}

export default MyApp
