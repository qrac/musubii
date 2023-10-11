import { useState, useEffect } from "react"
import queryString from "query-string"

import "musubii/src/musubii.css"
import "./index.css"
import { DemoBases } from "./demo/bases"
import { DemoButton } from "./demo/button"

const demos = ["bases", "button"]
const themes = ["light", "dark"]

export default function () {
  const [mounted, setMounted] = useState(false)
  const [demo, setDemo] = useState("bases")
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (mounted) {
      let paramString = window.location.search
      let params = queryString.parse(paramString)
      params = { ...params, demo, theme }
      paramString = queryString.stringify(params)
      const newUrl = window.location.pathname + "?" + paramString
      window.history.pushState({}, "", newUrl)
    }
  }, [demo, theme])

  useEffect(() => {
    const paramString = window.location.search
    if (paramString) {
      const params = queryString.parse(paramString)
      params?.demo && setDemo(params.demo as string)
      params?.theme && setTheme(params.theme as string)
    }
    setMounted(true)
  }, [])
  return (
    <div className="demo-theme" data-theme={theme}>
      <header className="demo-header">
        <h1 className="demo-title">MUSUBii</h1>
        <div className="demo-selects">
          <select
            className="demo-select"
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
          >
            {demos.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="demo-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main className="demo-main">
        {demo === "bases" && (
          <div className="demo-section">
            <DemoBases />
          </div>
        )}
        {demo === "button" && (
          <div className="demo-section">
            <DemoButton />
          </div>
        )}
      </main>
    </div>
  )
}
