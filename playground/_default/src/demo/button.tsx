import { useState } from "react"

import type { ButtonProps } from "react-musubii/src"
import { Button, buttonPatterns } from "react-musubii/src"
import { DemoOptions, DemoOption, DemoRadios, DemoCheckbox } from "./option"

const { DOMElements, variants, colorSchemes } = buttonPatterns
const colorSchemesWithBlank = [undefined, ...colorSchemes]

export function DemoButton() {
  const [DOMElement, setDOMElements] =
    useState<ButtonProps["DOMElement"]>("button")
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const [isDisabled, setIsDisabled] = useState<ButtonProps["isDisabled"]>(false)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoOptions>
          <DemoOption title="DOMElement">
            <DemoRadios
              patterns={DOMElements}
              checkedValue={DOMElement}
              onChange={setDOMElements}
            />
          </DemoOption>
          <DemoOption title="variant">
            <DemoRadios
              patterns={variants}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoOption>
          <DemoOption title="other">
            <DemoCheckbox
              label="disabled"
              checkedValue={isDisabled}
              onChange={setIsDisabled}
            />
          </DemoOption>
        </DemoOptions>
      </div>
      <div className="demo-box">
        <div className="demo-buttons">
          {colorSchemesWithBlank.map((item, index) => (
            <Button
              key={index}
              DOMElement={DOMElement}
              variant={variant}
              colorScheme={item}
              isDisabled={isDisabled}
            >
              <DemoButtonChildren colorScheme={item} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function DemoButtonChildren({
  colorScheme,
}: {
  colorScheme?: ButtonProps["colorScheme"]
}) {
  return (
    <>
      {!colorScheme && "詳細"}
      {colorScheme === "primary" && "決定"}
      {colorScheme === "secondary" && "変更"}
      {colorScheme === "success" && "送信"}
      {colorScheme === "danger" && "削除"}
    </>
  )
}
