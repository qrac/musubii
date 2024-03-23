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
import { LuLoader2 } from "react-icons/lu"

import type { BadgeProps } from "react-musubii/src"
import { Badge, badgePatterns } from "react-musubii/src"
import { DemoOptions, DemoOption, DemoRadios, DemoCheckbox } from "./option"

const { DOMElements, variants, colorSchemes, shapes } = badgePatterns

export function DemoBadge() {
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
        <DemoOptions>
          <DemoOption title="DOMElement">
            <DemoRadios
              patterns={DOMElements}
              checkedValue={DOMElement}
              onChange={setDOMElements}
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
          <DemoOption title="variant">
            <DemoRadios
              patterns={variants}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoOption>
          <DemoOption title="shape">
            <DemoRadios
              patterns={[undefined, ...shapes]}
              checkedValue={shape}
              onChange={setShape}
            />
          </DemoOption>
          <DemoOption title="other">
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
          </DemoOption>
        </DemoOptions>
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
              <DemoBadgeChildren
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

function DemoBadgeLoading() {
  return <LuLoader2 className="demo-loading" />
}

function DemoBadgeChildren({
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
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiHash />}
          {hasText && "任意"}
        </>
      )}
      {colorScheme === "primary" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiThumbsUp />}
          {hasText && "推奨"}
        </>
      )}
      {colorScheme === "secondary" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiGitPullRequest />}
          {hasText && "差分"}
        </>
      )}
      {colorScheme === "info" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiInfo />}
          {hasText && "情報"}
        </>
      )}
      {colorScheme === "success" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiCheck />}
          {hasText && "完了"}
        </>
      )}
      {colorScheme === "warning" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiAlertTriangle />}
          {hasText && "注意"}
        </>
      )}
      {colorScheme === "danger" && (
        <>
          {hasLoading && <DemoBadgeLoading />}
          {hasIcon && <FiLock />}
          {hasText && "必須"}
        </>
      )}
    </>
  )
}
