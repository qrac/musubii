import { useState, useEffect } from "react"
import queryString from "query-string"

import "musubii/src/musubii.css"
import "musubii/src/configs/theme/dark-attr.css"
import "./index.css"
import migrateCss from "musubii/src/migrate.css?inline"
import { DemoFieldset } from "./demos/fieldset"
import { DemoSelect } from "./demos/select"
import { DemoCheckbox } from "./demos/checkbox"
import { ExampleReset } from "./examples/reset"
import { ExampleSection } from "./examples/section"
import { ExampleGrid } from "./examples/grid"
import { ExampleButton } from "./examples/button"
import { ExampleBadge } from "./examples/badge"

const examples = ["reset", "section", "grid", "button", "badge"]
const themes = ["light", "dark"]

export default function () {
  const [mounted, setMounted] = useState(false)
  const [example, setExample] = useState("reset")
  const [theme, setTheme] = useState("light")
  const [isMigrated, setIsMigrated] = useState(false)

  useEffect(() => {
    if (mounted) {
      let paramString = window.location.search
      let params = queryString.parse(paramString)
      params = { ...params, example, theme, isMigrated: isMigrated.toString() }
      paramString = queryString.stringify(params)
      const newUrl = window.location.pathname + "?" + paramString
      window.history.pushState({}, "", newUrl)
    }
  }, [example, theme, isMigrated])

  useEffect(() => {
    const paramString = window.location.search
    if (paramString) {
      const params = queryString.parse(paramString)
      params?.example && setExample(params.example as string)
      params?.theme && setTheme(params.theme as string)
      params?.isMigrated && setIsMigrated(params.isMigrated === "true")
    }
    setMounted(true)
  }, [])
  return (
    <div className="demo-theme" data-theme={theme}>
      {isMigrated && <style dangerouslySetInnerHTML={{ __html: migrateCss }} />}
      <header className="demo-header">
        <h1 className="demo-header-title">MUSUBii</h1>
        <DemoFieldset>
          <DemoSelect
            options={examples}
            selectedValue={example}
            onChange={setExample}
          />
          <DemoSelect
            options={themes}
            selectedValue={theme}
            onChange={setTheme}
          />
          <DemoCheckbox
            label="migrate"
            checkedValue={isMigrated}
            onChange={setIsMigrated}
          />
        </DemoFieldset>
      </header>
      <main className="demo-main">
        {example === "reset" && (
          <div className="demo-section">
            <ExampleReset />
          </div>
        )}
        {example === "section" && (
          <div className="demo-section is-100vw">
            <ExampleSection />
          </div>
        )}
        {example === "grid" && (
          <div className="demo-section">
            <ExampleGrid />
          </div>
        )}
        {example === "button" && (
          <div className="demo-section">
            <ExampleButton />
          </div>
        )}
        {example === "badge" && (
          <div className="demo-section">
            <ExampleBadge />
          </div>
        )}
      </main>
    </div>
  )
}
