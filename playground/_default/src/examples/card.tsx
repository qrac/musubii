import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const radiuses = ["xxs", "xs", "sm", "md", "ml", "lg", "xl", "xxl"]

export function ExampleCard() {
  const [isBackground, setIsBackground] = useState<boolean>(true)
  const [isOutline, setIsOutline] = useState<boolean>(false)
  const [radius, setRadius] = useState<string | undefined>("md")
  const [isFloating, setIsfloating] = useState<boolean>(true)
  const [isLink, setIsLink] = useState<boolean>(false)
  const [isZoom, setIsZoom] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const DOMElement = isLink ? "a" : "div"
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="basic">
            <DemoCheckbox
              label="background"
              checkedValue={isBackground}
              onChange={setIsBackground}
            />
            <DemoCheckbox
              label="outline"
              checkedValue={isOutline}
              onChange={setIsOutline}
            />
          </DemoFieldset>
          <DemoFieldset title="radius">
            <DemoRadios
              patterns={radiuses}
              checkedValue={radius}
              onChange={setRadius}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="floating"
              checkedValue={isFloating}
              onChange={setIsfloating}
            />
            <DemoCheckbox
              label="link"
              checkedValue={isLink}
              onChange={setIsLink}
            />
            <DemoCheckbox
              label="zoom"
              checkedValue={isZoom}
              onChange={setIsZoom}
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
        <DOMElement
          className={clsx(
            "card",
            isBackground && "is-bg",
            isOutline && "is-outline",
            radius && `is-radius-${radius}`,
            isFloating && "is-floating",
            isLink && "is-link",
            isZoom && "is-zoom"
          )}
          href={DOMElement === "a" ? "" : undefined}
          aria-disabled={isDisabled ? isDisabled : undefined}
        >
          <div style={{ padding: "1rem" }}>card</div>
        </DOMElement>
      </div>
    </div>
  )
}
