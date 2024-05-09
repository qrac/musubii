import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const variants = ["border", "line", "outline"]
const textAligns = ["left", "center", "right"]

export function ExampleTable() {
  const [variant, setVariant] = useState("border")
  const [isPainted, setIsPainted] = useState<boolean>(true)
  const [isSpot, setIsSpot] = useState<boolean>(true)
  const [isDanger, setIsDanger] = useState<boolean>(true)
  const [isStripe, setIsStripe] = useState<boolean>(false)
  const [textAlign, setTextAlign] = useState<string | undefined>()
  const [isMiddle, setIsMiddle] = useState<boolean>(false)
  const [isFixed, setIsFixed] = useState<boolean>(false)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="variant">
            <DemoRadios
              patterns={variants}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoFieldset>
          <DemoFieldset title="background">
            <DemoCheckbox
              label="paint"
              checkedValue={isPainted}
              onChange={setIsPainted}
            />
            <DemoCheckbox
              label="spot"
              checkedValue={isSpot}
              onChange={setIsSpot}
            />
            <DemoCheckbox
              label="danger"
              checkedValue={isDanger}
              onChange={setIsDanger}
            />
            <DemoCheckbox
              label="stripe"
              checkedValue={isStripe}
              onChange={setIsStripe}
            />
          </DemoFieldset>
          <DemoFieldset title="text-align">
            <DemoRadios
              patterns={[undefined, ...textAligns]}
              checkedValue={textAlign}
              onChange={setTextAlign}
            />
            <DemoCheckbox
              label="middle"
              checkedValue={isMiddle}
              onChange={setIsMiddle}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="fixed"
              checkedValue={isFixed}
              onChange={setIsFixed}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <table
          className={clsx(
            "table",
            `is-${variant}`,
            isStripe && "is-stripe",
            textAlign && `is-${textAlign}`,
            isMiddle && "is-middle",
            isFixed && "is-fixed"
          )}
        >
          <thead>
            <tr className={clsx("box", isPainted && "is-paint")}>
              <th>見出しセル</th>
              <th>見出しセル</th>
              <th>見出しセル</th>
              <th>見出しセル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>データセル</td>
              <td className={clsx("box", isSpot && "is-spot")}>データセル</td>
              <td>
                データセル
                <br />
                データセル
              </td>
              <td>データセル</td>
            </tr>
            <tr>
              <td className={clsx("box", isDanger && "is-danger")}>
                データセル
              </td>
              <td>データセル</td>
              <td>データセル</td>
              <td>データセル</td>
            </tr>
            <tr>
              <td>データセル</td>
              <td>データセルデータセルデータセル</td>
              <td>データセル</td>
              <td>
                データセル
                <br />
                データセル
                <br />
                データセル
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="demo-box">
        <div className="table-wrap">
          <table
            className={clsx(
              "table",
              `is-${variant}`,
              isStripe && "is-stripe",
              textAlign && `is-${textAlign}`,
              isMiddle && "is-middle",
              isFixed && "is-fixed"
            )}
          >
            <thead>
              <tr className={clsx("box", isPainted && "is-paint")}>
                <th>見出しセル</th>
                <th>見出しセル</th>
                <th>見出しセル</th>
                <th>見出しセル</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td className={clsx("box", isSpot && "is-spot")}>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
              </tr>
              <tr>
                <td className={clsx("box", isDanger && "is-danger")}>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
                <td>
                  <span className="text is-nowrap">
                    折り返さないテキスト＋折り返さないテキスト
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
