import { useState } from "react"

import type { CardProps } from "../components/card"
import { Card, cardPatterns } from "../components/card"
import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const { radiuses } = cardPatterns

export function ExampleCard() {
  const [isBackground, setIsBackground] = useState<boolean>(true)
  const [isOutline, setIsOutline] = useState<boolean>(false)
  const [radius, setRadius] = useState<CardProps["radius"]>("md")
  const [isFloating, setIsfloating] = useState<boolean>(true)
  const [isLink, setIsLink] = useState<boolean>(false)
  const [isZoom, setIsZoom] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
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
        <Card
          DOMElement={isLink ? "a" : "div"}
          isBackground={isBackground}
          isOutline={isOutline}
          radius={radius}
          isFloating={isFloating}
          isLink={isLink}
          isZoom={isZoom}
          isDisabled={isDisabled}
        >
          <div style={{ padding: "1rem" }}>card</div>
        </Card>
      </div>
    </div>
  )
}
