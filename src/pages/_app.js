import React from "react"
import App from "next/app"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
import cssVars from "css-vars-ponyfill"

import AppHeader from "~/components/commons/app-header"
import AppFooter from "~/components/commons/app-footer"
import AppActions from "~/components/commons/app-actions"
import LayoutDefault from "~/components/commons/layout-default"
import LayoutDocs from "~/components/commons/layout-docs"

//import "~/assets/scss/project-legacy.scss"
import "~/assets/scss/project.scss"

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      legacy: false
    }
  }
  componentDidMount() {
    /*const userAgent = window.navigator.userAgent.toLowerCase()

    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      //require("~/assets/scss/project-legacy.scss")
      document.body.setAttribute("data-browser", "legacy")
      this.setState({ legacy: true })
    } else {
      //require("~/assets/scss/project.scss")
      document.body.setAttribute("data-browser", "modern")
    }*/

    cssVars({
      //onlyLegacy: false,
      /*onComplete() {
        console.log("test")
        document.body.setAttribute("data-browser", "legacy")
      }*/
    })

    function browserCanUseCssVariables() {
      return window.CSS && CSS.supports("color", "var(--check-variable)")
    }

    if (browserCanUseCssVariables()) {
      document.body.setAttribute("data-browser", "modern")
    } else {
      document.body.setAttribute("data-browser", "legacy")
      this.setState({ legacy: true })
    }

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
        <AppActions
          legacy={this.state.legacy}
          checkHome={router.route === "/" ? true : false}
        />
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
        {/*<script
          //defer
          src="https://use.fontawesome.com/releases/v5.12.0/js/all.js"
          crossOrigin="anonymous"
          //SameSite="none Secure"
        ></script>*/}
      </div>
    )
  }
}

export default MyApp
