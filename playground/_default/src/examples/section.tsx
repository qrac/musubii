import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const backgrounds = ["bg-1", "bg-2", "bg-3"]

export function ExampleSection() {
  const [background, setBackground] = useState<string | undefined>()
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="basic">
            <DemoRadios
              patterns={[undefined, ...backgrounds]}
              checkedValue={background}
              onChange={setBackground}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box is-100vw">
        <section className={clsx("section", background && `is-${background}`)}>
          <div className="inner">
            <div className="demo-card">{"section > inner"}</div>
          </div>
        </section>
      </div>
    </div>
  )
}
