import React, { useState } from "react"

import DemoRadios from "../assets/demo-radios"
import DemoCheckbox from "../assets/demo-checkbox"
import Button from "../components/button"

const SceneButton = () => {
  const variants = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState("solid")
  const [disabled, setDisabled] = useState(false)
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <div className="demo-options">
          <DemoRadios
            items={variants}
            name="variant"
            checked={variant}
            action={(value) => setVariant(value)}
          />
          <DemoCheckbox
            text="disabled"
            checked={disabled}
            action={() => setDisabled(!disabled)}
          />
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          <Button variant={variant} text="戻る" disabled={disabled} />
          <Button
            variant={variant}
            text="決定"
            color="primary"
            disabled={disabled}
          />
          <Button
            variant={variant}
            text="変更"
            color="secondary"
            disabled={disabled}
          />
          <Button
            variant={variant}
            text="登録"
            color="success"
            disabled={disabled}
          />
          <Button
            variant={variant}
            text="削除"
            color="danger"
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default SceneButton
