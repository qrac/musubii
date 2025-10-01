import { useState } from "react"
import clsx from "clsx"
import {
  FiHash,
  FiCheck,
  FiGitPullRequest,
  FiInfo,
  FiThumbsUp,
  FiAlertTriangle,
  FiLock,
} from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"
import { DemoLoading } from "../demos/loading"

const DOMElements = ["span", "div"] as const
const variants = ["plain", "outline", "melt"]
const colorSchemes = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
]
const shapes = ["slim", "round", "square", "circle"]

export function ExampleBadge() {
  const [DOMElement, setDOMElements] =
    useState<(typeof DOMElements)[number]>("span")
  const [hasText, setHasText] = useState<boolean>(true)
  const [hasIcon, setHasIcon] = useState<boolean>(false)
  const [hasLoading, setHasLoading] = useState<boolean>(false)
  const [variant, setVariant] = useState("plain")
  const [shape, setShape] = useState<string | undefined>()
  const [isStrong, setIsStrong] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
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
          <DemoFieldset title="other">
            <DemoCheckbox
              label="strong"
              checkedValue={isStrong}
              onChange={setIsStrong}
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
        <div className="demo-badges">
          {[undefined, ...colorSchemes].map((colorScheme, index) => (
            <DOMElement
              className={clsx(
                "badge",
                `is-${variant}`,
                colorScheme && `is-${colorScheme}`,
                shape && `is-${shape}`,
                isStrong && "is-strong"
              )}
              aria-disabled={isDisabled ? isDisabled : undefined}
              key={index}
            >
              <ExampleBadgeChildren
                colorScheme={colorScheme}
                hasText={hasText}
                hasIcon={hasIcon}
                hasLoading={hasLoading}
              />
            </DOMElement>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExampleBadgeChildren({
  colorScheme,
  hasText,
  hasIcon,
  hasLoading,
}: {
  colorScheme?: string
  hasText: boolean
  hasIcon: boolean
  hasLoading: boolean
}) {
  return (
    <>
      {!colorScheme && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiHash />}
          {hasText && "任意"}
        </>
      )}
      {colorScheme === "primary" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiThumbsUp />}
          {hasText && "推奨"}
        </>
      )}
      {colorScheme === "secondary" && (
        <>
          {hasLoading && <DemoLoading />}
          {hasIcon && <FiGitPullRequest />}
          {hasText && "差分"}
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
          {hasIcon && <FiCheck />}
          {hasText && "完了"}
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
          {hasIcon && <FiLock />}
          {hasText && "必須"}
        </>
      )}
    </>
  )
}
