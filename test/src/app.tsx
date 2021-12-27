import { useState } from "react"

import { SceneButton } from "./scenes"

import "musubii/src/musubii.css"
import "./demo.css"

const App = () => {
  const [scene, setScene] = useState("button")

  return <div className="app">{scene === "button" && <SceneButton />}</div>
}

export default App
