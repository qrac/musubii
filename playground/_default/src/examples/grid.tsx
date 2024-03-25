import { useState } from "react"
import {
  FiHash,
  FiCheck,
  FiGitPullRequest,
  FiInfo,
  FiThumbsUp,
  FiAlertTriangle,
  FiLock,
} from "react-icons/fi"

import type { BadgeProps } from "react-musubii/src"
import { Badge, badgePatterns } from "react-musubii/src"
import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"
import { DemoLoading } from "../demos/loading"

const { DOMElements, variants, colorSchemes, shapes } = badgePatterns

export function ExampleGrid() {
  const [DOMElement, setDOMElements] =
    useState<BadgeProps["DOMElement"]>("span")
  const [hasText, setHasText] = useState<boolean>(true)
  const [hasIcon, setHasIcon] = useState<boolean>(false)
  const [hasLoading, setHasLoading] = useState<boolean>(false)
  const [variant, setVariant] = useState<BadgeProps["variant"]>("plain")
  const [shape, setShape] = useState<BadgeProps["shape"]>()
  const [isStrong, setIsStrong] = useState<boolean>(false)
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
          {[undefined, ...colorSchemes].map((item, index) => (
            <Badge
              key={index}
              DOMElement={DOMElement}
              variant={variant}
              colorScheme={item}
              shape={shape}
              isStrong={isStrong}
              isDisabled={isDisabled}
            >
              <ExampleBadgeChildren
                colorScheme={item}
                hasText={hasText}
                hasIcon={hasIcon}
                hasLoading={hasLoading}
              />
            </Badge>
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
  colorScheme?: BadgeProps["colorScheme"]
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
