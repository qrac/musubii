import { useState } from "react"
import {
  FiList,
  FiCheck,
  FiEdit,
  FiInfo,
  FiSend,
  FiAlertTriangle,
  FiTrash2,
} from "react-icons/fi"

import type { ButtonProps } from "react-musubii/src"
import { Button, buttonPatterns } from "react-musubii/src"
import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"
import { DemoLoading } from "../demos/loading"

const { DOMElements, variants, colorSchemes, shapes, angles } = buttonPatterns

export function ExampleButton() {
  const [DOMElement, setDOMElements] =
    useState<ButtonProps["DOMElement"]>("button")
  const [hasText, setHasText] = useState<boolean>(true)
  const [hasIcon, setHasIcon] = useState<boolean>(false)
  const [hasLoading, setHasLoading] = useState<boolean>(false)
  const [variant, setVariant] = useState<ButtonProps["variant"]>("plain")
  const [shape, setShape] = useState<ButtonProps["shape"]>()
  const [angle, setAngle] = useState<ButtonProps["angle"]>()
  const [isStrong, setIsStrong] = useState<boolean>(false)
  const [isFloating, setIsFloating] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="DOMElement">
            <DemoRadios
              patterns={DOMElements}
              checkedValue={DOMElement}
              onChange={setDOMElements}
            />
          </DemoFieldset>
          <DemoFieldset title="children">
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
          </DemoFieldset>
          <DemoFieldset title="variant">
            <DemoRadios
              patterns={variants}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoFieldset>
          <DemoFieldset title="shape">
            <DemoRadios
              patterns={[undefined, ...shapes]}
              checkedValue={shape}
              onChange={setShape}
            />
          </DemoFieldset>
          <DemoFieldset title="angle">
            <DemoRadios
              patterns={[undefined, ...angles]}
              checkedValue={angle}
              onChange={setAngle}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="strong"
              checkedValue={isStrong}
              onChange={setIsStrong}
            />
            <DemoCheckbox
              label="floating"
              checkedValue={isFloating}
              onChange={setIsFloating}
            />
            <DemoCheckbox
              label="disabled"
              checkedValue={isDisabled}
              onChange={setIsDisabled}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className="demo-buttons">
          {[undefined, ...colorSchemes].map((item, index) => (
            <Button
              key={index}
              DOMElement={DOMElement}
              variant={variant}
              colorScheme={item}
              shape={shape}
              angle={angle}
              isStrong={isStrong}
              isFloating={isFloating}
              isDisabled={isDisabled}
              style={angle ? { width: "8em" } : undefined}
            >
              <ExampleButtonChildren
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

function ExampleButtonChildren({
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
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiList />}
          {hasText && "詳細"}
        </>
      )}
      {colorScheme === "primary" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiCheck />}
          {hasText && "決定"}
        </>
      )}
      {colorScheme === "secondary" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiEdit />}
          {hasText && "変更"}
        </>
      )}
      {colorScheme === "info" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiInfo />}
          {hasText && "情報"}
        </>
      )}
      {colorScheme === "success" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiSend />}
          {hasText && "送信"}
        </>
      )}
      {colorScheme === "warning" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiAlertTriangle />}
          {hasText && "注意"}
        </>
      )}
      {colorScheme === "danger" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiTrash2 />}
          {hasText && "削除"}
        </>
      )}
    </>
  )
}
