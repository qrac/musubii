import { useState } from "react"

import { DemoRadios, DemoCheckbox } from "../assets"
import { Button, ButtonProps } from "../../src/elements/button"

const SceneButton = () => {
  const variants = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <div className="demo-options">
          <DemoRadios
            items={variants}
            checkedItem={variant}
            name="variant"
            onChange={(event) =>
              setVariant(event.target.value as ButtonProps["variant"])
            }
          />
          <DemoCheckbox
            value="disabled"
            isChecked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
          />
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          <Button variant={variant} text="戻る" isDisabled={isDisabled} />
          <Button
            variant={variant}
            color="primary"
            text="決定"
            isDisabled={isDisabled}
          />
          <Button
            variant={variant}
            color="secondary"
            text="変更"
            isDisabled={isDisabled}
          />
          <Button
            variant={variant}
            color="success"
            text="登録"
            isDisabled={isDisabled}
          />
          <Button
            variant={variant}
            color="danger"
            text="削除"
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default SceneButton
