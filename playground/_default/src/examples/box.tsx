import { useState } from "react"
import clsx from "clsx"
import { FiArchive } from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"
import { splitClasses } from "../functions/class"

const outlines = ["all", "top", "right", "bottom", "left"]
const angles = [
  "right",
  "left",
  "right-up",
  "right-down",
  "left-up",
  "left-down",
]

export function ExampleBox() {
  const [isBackground, setIsBackground] = useState<boolean>(true)
  const [outline, setOutline] = useState<string | undefined>("all")
  const [separate, setSeparate] = useState<string | undefined>("all")
  const [angle, setAngle] = useState<string | undefined>()
  const [isLink, setIsLink] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const DOMElement = isLink ? "a" : "div"
  const angleClasses = splitClasses("angle", angle)
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
        <div
          className={clsx(
            "box",
            outline === "all" && "is-outline",
            outline && outline !== "all" && `is-outline-${outline}`,
            separate === "all" && "is-separate",
            separate === "parent" && "is-separate-parent"
          )}
        >
          {[...Array(3)].map((_, index) => (
            <DOMElement
              className={clsx(
                "box is-flex is-middle is-gap-sm is-pl-sm",
                isBackground && "is-bg",
                isLink && "is-link"
              )}
              href={DOMElement === "a" ? "" : undefined}
              aria-disabled={isDisabled ? isDisabled : undefined}
              key={index}
            >
              <FiArchive />
              <div
                className={clsx(
                  "box is-flex-0 is-py-xs",
                  separate === "parent" && "is-separate-child",
                  angleClasses
                )}
              >
                box
              </div>
            </DOMElement>
          ))}
        </div>
      </div>
    </div>
  )
}
