import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const aspects = ["16x9", "4x3", "3x2", "1x1"]

export function ExampleIframe() {
  const [aspect, setAspect] = useState<string | undefined>()
  const [isCover, setIsCover] = useState<boolean>(false)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="aspect">
            <DemoRadios
              patterns={[undefined, ...aspects]}
              checkedValue={aspect}
              onChange={setAspect}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="cover"
              checkedValue={isCover}
              onChange={setIsCover}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div
          className={clsx(
            "iframe",
            aspect && `is-aspect-${aspect}`,
            isCover && "is-cover"
          )}
          style={isCover ? { height: "400px" } : undefined}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/llQkSr6fzXg"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
