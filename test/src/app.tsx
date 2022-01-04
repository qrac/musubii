import { useState } from "react"

import { DemoFieldset, DemoRadios } from "./components"
import { SceneButton, SceneBadge } from "./scenes"

import "musubii/src/musubii.css"
import "./demo.css"

const App = () => {
  const sceneList = ["button", "badge"]
  const [scene, setScene] = useState("button")
  const themeList = ["light", "dark"]
  const [theme, setTheme] = useState("light")
  return (
    <div className="app" data-theme={theme}>
      <div className="demo-contents">
        <div className="demo-content">
          <div className="demo-options">
            <DemoFieldset legend="scene">
              <DemoRadios
                items={sceneList}
                checkedItem={scene}
                name="scene"
                onChange={(event) => setScene(event.target.value)}
              />
            </DemoFieldset>
            <DemoFieldset legend="theme">
              <DemoRadios
                items={themeList}
                checkedItem={theme}
                name="theme"
                onChange={(event) => setTheme(event.target.value)}
              />
            </DemoFieldset>
          </div>
        </div>
      </div>
      {scene === "button" && <SceneButton />}
      {scene === "badge" && <SceneBadge />}
    </div>
  )
}

export default App
