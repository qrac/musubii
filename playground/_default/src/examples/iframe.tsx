import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const aspects = ["16x9", "4x3"]

export function ExampleIframe() {
  const [aspect, setAspect] = useState<string | undefined>()
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
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className={clsx("iframe", aspect && `is-aspect-${aspect}`)}>
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
