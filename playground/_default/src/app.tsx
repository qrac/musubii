import { useState, useEffect } from "react"

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
import { ExampleImage } from "./examples/image"
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
  "image",
  "iframe",
  "wysiwyg",
] as const

const themes = ["light", "dark"] as const

type Example = (typeof examples)[number]
type Theme = (typeof themes)[number]

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [example, setExample] = useState<Example>("reset")
  const [theme, setTheme] = useState<Theme>("light")
  const [isMigrated, setIsMigrated] = useState(false)

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    const qExample = sp.get("example")
    const qTheme = sp.get("theme")
    const qIsMigrated = sp.get("isMigrated")

    if (qExample && (examples as readonly string[]).includes(qExample)) {
      setExample(qExample as Example)
    }
    if (qTheme && (themes as readonly string[]).includes(qTheme)) {
      setTheme(qTheme as Theme)
    }
    if (qIsMigrated != null) {
      setIsMigrated(qIsMigrated === "true")
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const sp = new URLSearchParams(window.location.search)
    sp.set("example", example)
    sp.set("theme", theme)
    sp.set("isMigrated", String(isMigrated))

    const newUrl = `${window.location.pathname}?${sp.toString()}`
    window.history.replaceState({}, "", newUrl)
  }, [mounted, example, theme, isMigrated])

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
            options={examples as unknown as string[]}
            selectedValue={example}
            onChange={(v) => setExample(v as Example)}
          />
          <DemoSelect
            options={themes as unknown as string[]}
            selectedValue={theme}
            onChange={(v) => setTheme(v as Theme)}
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
          <div className="demo-section">
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
        {example === "icon" && (
          <div className="demo-section">
            <ExampleIcon />
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
        {example === "alert" && (
          <div className="demo-section">
            <ExampleAlert />
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
        {example === "image" && (
          <div className="demo-section">
            <ExampleImage />
          </div>
        )}
        {example === "iframe" && (
          <div className="demo-section">
            <ExampleIframe />
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
