import Head from "next/head"

import pjt from "../../../project.json"

export default ({ meta }) => {
  return (
    <Head>
      <title key="title">
        {meta.title ? meta.title + " - " + pjt.site.title : pjt.site.title}
      </title>
    </Head>
  )
}
