import React from "react"
import App from "next/app"
import Head from "next/head"

import "./index.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head></Head>
        <div>test</div>
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}

export default MyApp
