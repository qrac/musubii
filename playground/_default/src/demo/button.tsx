import { useState } from "react"
import {
  FaListUl,
  FaCheck,
  FaPen,
  FaPaperPlane,
  FaTrashAlt,
} from "react-icons/fa"
import { LuLoader2 } from "react-icons/lu"

import type { ButtonProps } from "react-musubii/src"
import { Button, buttonPatterns } from "react-musubii/src"
import { DemoOptions, DemoOption, DemoRadios, DemoCheckbox } from "./option"

const { DOMElements, variants, colorSchemes } = buttonPatterns
const colorSchemesWithBlank = [undefined, ...colorSchemes]

export function DemoButton() {
  const [DOMElement, setDOMElements] =
    useState<ButtonProps["DOMElement"]>("button")
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const [hasText, setHasText] = useState<boolean>(true)
  const [hasIcon, setHasIcon] = useState<boolean>(false)
  const [hasLoading, setHasLoading] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
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
          <DemoOption title="children">
            <DemoCheckbox
              label="text"
              checkedValue={hasText}
              onChange={setHasText}
            />
            <DemoCheckbox
              label="icon"
              checkedValue={hasIcon}
              onChange={setHasIcon}
            />
            <DemoCheckbox
              label="loading"
              checkedValue={hasLoading}
              onChange={setHasLoading}
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
              <DemoButtonChildren
                colorScheme={item}
                hasText={hasText}
                hasIcon={hasIcon}
                hasLoading={hasLoading}
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function DemoButtonLoading() {
  return <LuLoader2 className="demo-button-loading" />
}

function DemoButtonChildren({
  colorScheme,
  hasText,
  hasIcon,
  hasLoading,
}: {
  colorScheme?: ButtonProps["colorScheme"]
  hasText: boolean
  hasIcon: boolean
  hasLoading: boolean
}) {
  return (
    <>
      {!colorScheme && (
        <>
          {hasLoading && <DemoButtonLoading />}
          {hasIcon && <FaListUl />}
          {hasText && "詳細"}
        </>
      )}
      {colorScheme === "primary" && (
        <>
          {hasLoading && <DemoButtonLoading />}
          {hasIcon && <FaCheck />}
          {hasText && "決定"}
        </>
      )}
      {colorScheme === "secondary" && (
        <>
          {hasLoading && <DemoButtonLoading />}
          {hasIcon && <FaPen />}
          {hasText && "変更"}
        </>
      )}
      {colorScheme === "success" && (
        <>
          {hasLoading && <DemoButtonLoading />}
          {hasIcon && <FaPaperPlane />}
          {hasText && "送信"}
        </>
      )}
      {colorScheme === "danger" && (
        <>
          {hasLoading && <DemoButtonLoading />}
          {hasIcon && <FaTrashAlt />}
          {hasText && "削除"}
        </>
      )}
    </>
  )
}
