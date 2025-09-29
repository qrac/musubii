import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const variants = ["disc", "circle", "square", "decimal", "kome"]
const exampleText1 =
  "リストはインデントしてテキストが折り返した場合に読みやすくする"
const exampleText2 = "自由な見出しをインラインで置きつつインデント"

export function ExampleList() {
  const [variant, setVariant] = useState("disc")
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="variant">
            <DemoRadios
              patterns={variants}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <ul className={clsx("list", `is-${variant}`)}>
          <li className="item">
            {exampleText1}
            <ul className={clsx("list", `is-${variant}`)}>
              <li className="item">{exampleText1}</li>
              <li className="item">{exampleText1}</li>
              <li className="item">{exampleText1}</li>
            </ul>
          </li>
          <li className="item">{exampleText1}</li>
          <li className="item">{exampleText1}</li>
        </ul>
      </div>
      <div className="demo-box">
        <ul className="list is-note">
          <li className="item">
            <span>🌲</span>
            <div className="text is-flex-0">
              {exampleText2}
              <ul className="list is-note">
                <li className="item">
                  <span>🌿</span>
                  <div className="text is-flex-0">{exampleText2}</div>
                </li>
                <li className="item">
                  <span>🌿</span>
                  <div className="text is-flex-0">{exampleText2}</div>
                </li>
                <li className="item">
                  <span>🌿</span>
                  <div className="text is-flex-0">{exampleText2}</div>
                </li>
              </ul>
            </div>
          </li>
          <li className="item">
            <span>🌲</span>
            <div className="text is-flex-0">{exampleText2}</div>
          </li>
          <li className="item">
            <span>🌲</span>
            <div className="text is-flex-0">{exampleText2}</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
