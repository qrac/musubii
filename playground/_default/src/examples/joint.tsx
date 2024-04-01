import { useState } from "react"
import clsx from "clsx"
import { FiAlignLeft, FiAlignCenter, FiAlignRight } from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

export function ExampleJoint() {
  const [isActive, setIsActive] = useState<boolean>(true)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldset title="joint">
          <DemoCheckbox
            label="actice"
            checkedValue={isActive}
            onChange={setIsActive}
          />
        </DemoFieldset>
      </div>
      <div className="demo-box">
        <div className="demo-buttons">
          {[...Array(2)].map((_, index) => (
            <div className={clsx(isActive && "joint")}>
              <button
                className={clsx(
                  "button",
                  index === 0 ? "is-plain" : "is-outline"
                )}
              >
                <FiAlignLeft />
                <span className="text">左揃え</span>
              </button>
              <button
                className={clsx(
                  "button",
                  index === 0 ? "is-plain" : "is-outline"
                )}
              >
                <FiAlignCenter />
                <span className="text">中央揃え</span>
              </button>
              <button
                className={clsx(
                  "button",
                  index === 0 ? "is-plain" : "is-outline"
                )}
              >
                <FiAlignRight />
                <span className="text">右揃え</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
