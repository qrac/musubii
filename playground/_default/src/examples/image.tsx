import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const aspects = ["16x9", "3x2", "4x3", "1x1"]
const objectFits = ["contain", "cover"]

export function ExampleImage() {
  const [aspect, setAspect] = useState<string | undefined>()
  const [objectFit, setObjectFit] = useState<string | undefined>()
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="aspect">
            <DemoRadios
              patterns={[undefined, ...aspects]}
              checkedValue={aspect}
              onChange={setAspect}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoRadios
              patterns={[undefined, ...objectFits]}
              checkedValue={objectFit}
              onChange={setObjectFit}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className={clsx("box is-bg-3", aspect && `is-aspect-${aspect}`)}>
          <img
            className={clsx("image", objectFit && `is-${objectFit}`)}
            src="https://i.gyazo.com/a21c7b01996b7640ff84a1d6788135ea.png"
            width={2400}
            height={1084}
            alt="MUSIBii site in dark theme"
          />
        </div>
      </div>
    </div>
  )
}
