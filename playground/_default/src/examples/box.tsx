import { useState } from "react"
import { FiArchive } from "react-icons/fi"

import type { BoxProps } from "../components/box"
import { Box, boxPatterns } from "../components/box"
import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const { outlines, angles } = boxPatterns

type ExcludedOutline = Exclude<
  BoxProps["outline"],
  ("all" | "top" | "right" | "bottom" | "left")[]
>
type ExcludedSeparate = Exclude<
  BoxProps["separate"],
  ("all" | "parent" | "child")[]
>

export function ExampleBox() {
  const [isBackground, setIsBackground] = useState<boolean>(true)
  const [outline, setOutline] = useState<ExcludedOutline>("all")
  const [separate, setSeparate] = useState<ExcludedSeparate>("all")
  const [angle, setAngle] = useState<BoxProps["angle"]>()
  const [isLink, setIsLink] = useState<boolean>(false)
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
          </DemoFieldset>
          <DemoFieldset title="outline">
            <DemoRadios
              patterns={[undefined, ...outlines]}
              checkedValue={outline}
              onChange={setOutline}
            />
          </DemoFieldset>
          <DemoFieldset title="separate">
            <DemoRadios
              patterns={[undefined, "all", "parent"]}
              checkedValue={separate}
              onChange={setSeparate}
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
              label="link"
              checkedValue={isLink}
              onChange={setIsLink}
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
        <Box outline={outline} separate={separate}>
          {[...Array(3)].map((_, index) => (
            <Box
              DOMElement={isLink ? "a" : "div"}
              isBackground={isBackground}
              isLink={isLink}
              isDisabled={isDisabled}
              key={index}
              className="is-flex is-middle is-gap-sm is-pl-sm"
            >
              <FiArchive />
              <Box
                separate={separate === "parent" ? "child" : undefined}
                angle={angle}
                className="is-flex-0 is-py-xs"
              >
                box
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  )
}
