import React, { useState } from "react"

import SceneButton from "./scenes/scene-button"

import "../css/musubii.css"
import "./assets/demo.css"

const App = () => {
  const [scene, setScene] = useState("button")

  return <div className="app">{scene === "button" && <SceneButton />}</div>
}

export default App
