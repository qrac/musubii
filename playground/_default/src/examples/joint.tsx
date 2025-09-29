import { useState } from "react"
import clsx from "clsx"
import {
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiSearch,
} from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoCheckbox } from "../demos/checkbox"

export function ExampleJoint() {
  const [isActive, setIsActive] = useState<boolean>(true)
  const [isRound, setIsRound] = useState<boolean>(false)
  const roundClass = isRound ? "is-round" : undefined
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="joint">
            <DemoCheckbox
              label="actice"
              checkedValue={isActive}
              onChange={setIsActive}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="round"
              checkedValue={isRound}
              onChange={setIsRound}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      {["plain", "outline"].map((variant, index) => (
        <div className="demo-box" key={index}>
          <div className={clsx(isActive && "joint")}>
            <button className={clsx("button", `is-${variant}`, roundClass)}>
              <FiAlignLeft />
              <span className="text">左揃え</span>
            </button>
            <button className={clsx("button", `is-${variant}`, roundClass)}>
              <FiAlignCenter />
              <span className="text">中央揃え</span>
            </button>
            <button className={clsx("button", `is-${variant}`, roundClass)}>
              <FiAlignRight />
              <span className="text">右揃え</span>
            </button>
          </div>
        </div>
      ))}
      <div className="demo-box">
        <div className={clsx(isActive && "joint")}>
          <span className={clsx("badge is-plain", roundClass)}>Build</span>
          <span className={clsx("badge is-plain is-success", roundClass)}>
            Passing
          </span>
        </div>
      </div>
      <div className="demo-box">
        <div className={clsx(isActive && "joint")}>
          <div className={clsx("select", roundClass)}>
            <select>
              <option>Select A</option>
              <option>Select B</option>
              <option>Select C</option>
            </select>
          </div>
          <input
            type="text"
            className={clsx("input", roundClass)}
            name="text"
            placeholder="キーワード"
          />
          <button
            type="button"
            className={clsx("button is-plain is-info is-square", roundClass)}
          >
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  )
}
