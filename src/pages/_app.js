import React from "react"
import App from "next/app"
import Head from "next/head"

import "./index.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Check your Priviledge</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
