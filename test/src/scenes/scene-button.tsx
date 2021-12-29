import { useState } from "react"

import { DemoRadios, DemoCheckbox, Button, ButtonProps } from "../components"

export const SceneButton = () => {
  const domElements = ["button", "a"]
  const [domElement, setDomElement] =
    useState<ButtonProps["DOMElement"]>("button")
  const variants = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const targets = ["_self", "_blank"]
  const [target, setTarget] = useState<ButtonProps["target"]>("_self")
  const targetAttr = target === "_blank" ? target : undefined
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
          <DemoRadios
            items={domElements}
            checkedItem={domElement}
            name="domElement"
            onChange={(event) =>
              setDomElement(event.target.value as ButtonProps["DOMElement"])
            }
          />
          <DemoRadios
            items={targets}
            checkedItem={target}
            name="target"
            onChange={(event) =>
              setTarget(event.target.value as ButtonProps["target"])
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
          <Button
            DOMElement={domElement}
            variant={variant}
            target={targetAttr}
            isDisabled={isDisabled}
            text="戻る"
          />
          <Button
            DOMElement={domElement}
            variant={variant}
            color="primary"
            target={targetAttr}
            isDisabled={isDisabled}
            text="決定"
          />
          <Button
            DOMElement={domElement}
            variant={variant}
            color="secondary"
            target={targetAttr}
            isDisabled={isDisabled}
            text="変更"
          />
          <Button
            DOMElement={domElement}
            variant={variant}
            color="success"
            target={targetAttr}
            isDisabled={isDisabled}
            text="登録"
          />
          <Button
            DOMElement={domElement}
            variant={variant}
            color="danger"
            target={targetAttr}
            isDisabled={isDisabled}
            text="削除"
          />
        </div>
      </div>
    </div>
  )
}
