import { useState } from "react"

import { DemoRadios, DemoCheckbox, Button, ButtonProps } from "../components"

export const SceneButton = () => {
  const variants = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const [isRound, setIsRound] = useState<boolean>(false)
  const domElements = ["button", "a"]
  const [domElement, setDomElement] =
    useState<ButtonProps["DOMElement"]>("button")
  const targets = ["_self", "_blank"]
  const [target, setTarget] = useState<ButtonProps["target"]>("_self")
  const targetAttr = target === "_blank" ? target : undefined
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const buttonList: { color: ButtonProps["color"]; text: string }[] = [
    { color: undefined, text: "戻る" },
    { color: "primary", text: "決定" },
    { color: "secondary", text: "変更" },
    { color: "success", text: "登録" },
    { color: "danger", text: "削除" },
  ]
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
            value="round"
            isChecked={isRound}
            onChange={() => setIsRound(!isRound)}
          />
        </div>
        <div className="demo-options">
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
          {buttonList.map((item, index) => (
            <Button
              DOMElement={domElement}
              variant={variant}
              color={item.color}
              isRound={isRound}
              target={targetAttr}
              isDisabled={isDisabled}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
