import { useState } from "react"
import clsx from "clsx"
import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoCheckbox } from "../demos/checkbox"

export function ExampleJoint() {
  const [isActive, setIsActive] = useState<boolean>(true)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="joint">
            <DemoCheckbox
              label="actice"
              checkedValue={isActive}
              onChange={setIsActive}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className="demo-buttons">
          <div className={clsx(isActive && "joint")}>
            <button className="button is-plain">
              <FiAlignLeft />
              <span className="text">左揃え</span>
            </button>
            <button className="button is-plain">
              <FiAlignCenter />
              <span className="text">中央揃え</span>
            </button>
            <button className="button is-plain">
              <FiAlignRight />
              <span className="text">右揃え</span>
            </button>
          </div>
          <div className={clsx(isActive && "joint")}>
            <button className="button is-outline">
              <FiAlignLeft />
              <span className="text">左揃え</span>
            </button>
            <button className="button is-outline">
              <FiAlignCenter />
              <span className="text">中央揃え</span>
            </button>
            <button className="button is-outline">
              <FiAlignRight />
              <span className="text">右揃え</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
