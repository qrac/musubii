import { useState, useEffect } from "react"
import queryString from "query-string"

import { version } from "../../../package.json"
import "musubii/src/musubii.css"
import "./index.css"
import migrateCss from "musubii/src/migrate.css?inline"
import { DemoFieldset } from "./demos/fieldset"
import { DemoSelect } from "./demos/select"
import { DemoCheckbox } from "./demos/checkbox"
import { ExampleReset } from "./examples/reset"
import { ExampleSection } from "./examples/section"
import { ExampleGrid } from "./examples/grid"
import { ExampleCard } from "./examples/card"
import { ExampleBox } from "./examples/box"
import { ExampleJoint } from "./examples/joint"
import { ExampleText } from "./examples/text"
import { ExampleButton } from "./examples/button"
import { ExampleBadge } from "./examples/badge"
import { ExampleList } from "./examples/list"
import { ExampleTable } from "./examples/table"
import { ExampleForm } from "./examples/form"
import { ExampleIframe } from "./examples/iframe"
import { ExampleIcon } from "./examples/icon"
import { ExampleAlert } from "./examples/alert"
import { ExampleWysiwyg } from "./examples/wysiwyg"

const examples = [
  "reset",
  "section",
  "box",
  "card",
  "grid",
  "joint",
  "text",
  "icon",
  "button",
  "badge",
  "alert",
  "list",
  "table",
  "form",
  "iframe",
  "wysiwyg",
]
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
        <h1 className="demo-header-title">
          <span>MUSUBii</span>
          <small>v{version}</small>
        </h1>
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
        {example === "card" && (
          <div className="demo-section">
            <ExampleCard />
          </div>
        )}
        {example === "box" && (
          <div className="demo-section">
            <ExampleBox />
          </div>
        )}
        {example === "joint" && (
          <div className="demo-section">
            <ExampleJoint />
          </div>
        )}
        {example === "text" && (
          <div className="demo-section">
            <ExampleText />
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
        {example === "list" && (
          <div className="demo-section">
            <ExampleList />
          </div>
        )}
        {example === "table" && (
          <div className="demo-section">
            <ExampleTable />
          </div>
        )}
        {example === "form" && (
          <div className="demo-section">
            <ExampleForm />
          </div>
        )}
        {example === "iframe" && (
          <div className="demo-section">
            <ExampleIframe />
          </div>
        )}
        {example === "icon" && (
          <div className="demo-section">
            <ExampleIcon />
          </div>
        )}
        {example === "alert" && (
          <div className="demo-section">
            <ExampleAlert />
          </div>
        )}
        {example === "wysiwyg" && (
          <div className="demo-section">
            <ExampleWysiwyg />
          </div>
        )}
      </main>
    </div>
  )
}
