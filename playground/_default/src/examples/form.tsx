import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const types1 = ["text", "number", "url", "email", "tel", "password", "search"]
const types2 = ["datetime-local", "date", "month", "week", "time"]
const inputTypes = [...types1, ...types2]
const variants = ["plain", "underline", "inside"]
const colorSchemes = ["success", "danger"]
const textAligns = ["left", "center", "right"]

export function ExampleForm() {
  const [inputType, setInputType] = useState("text")
  const [variant, setVariant] = useState<string | undefined>()
  const [colorScheme, setColorScheme] = useState<string | undefined>()
  const [textAlign, setTextAlign] = useState<string | undefined>()
  const [isRound, setIsRound] = useState<boolean>(false)
  const [isReadonly, setIsReadOnly] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const placeholderValue = () => {
    switch (inputType) {
      case "text":
        return "Text"
      case "number":
        return "123456"
      case "url":
        return "https://example.com"
      case "email":
        return "example@gmail.com"
      case "tel":
        return "000-000-0000"
      case "search":
        return "Search"
      default:
        return undefined
    }
  }
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="type">
            <DemoRadios
              patterns={inputTypes}
              checkedValue={inputType}
              onChange={setInputType}
            />
          </DemoFieldset>
          <DemoFieldset title="variant">
            <DemoRadios
              patterns={[undefined, ...variants]}
              checkedValue={variant}
              onChange={setVariant}
            />
          </DemoFieldset>
          <DemoFieldset title="color-scheme">
            <DemoRadios
              patterns={[undefined, ...colorSchemes]}
              checkedValue={colorScheme}
              onChange={setColorScheme}
            />
          </DemoFieldset>
          <DemoFieldset title="text-align">
            <DemoRadios
              patterns={[undefined, ...textAligns]}
              checkedValue={textAlign}
              onChange={setTextAlign}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="round"
              checkedValue={isRound}
              onChange={setIsRound}
            />
            <DemoCheckbox
              label="readonly"
              checkedValue={isReadonly}
              onChange={setIsReadOnly}
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
        <div className="demo-fieldset-contents">
          <div>
            <input
              type={inputType}
              className={clsx(
                "input",
                variant && `is-${variant}`,
                colorScheme && `is-${colorScheme}`,
                textAlign && `is-${textAlign}`,
                isRound && "is-round"
              )}
              readOnly={isReadonly ? true : undefined}
              disabled={isDisabled ? true : undefined}
              placeholder={placeholderValue()}
            />
          </div>
          <div>
            <textarea
              className={clsx(
                "textarea",
                variant && `is-${variant}`,
                colorScheme && `is-${colorScheme}`,
                textAlign && `is-${textAlign}`
              )}
              readOnly={isReadonly ? true : undefined}
              disabled={isDisabled ? true : undefined}
            />
          </div>
          <div>
            <div
              className={clsx(
                "select",
                variant && `is-${variant}`,
                colorScheme && `is-${colorScheme}`,
                textAlign && `is-${textAlign}`,
                isRound && "is-round"
              )}
            >
              <select disabled={isDisabled ? true : undefined}>
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
              </select>
            </div>
          </div>
          <div>
            <div
              className={clsx(
                "select is-multiple",
                variant && `is-${variant}`,
                colorScheme && `is-${colorScheme}`,
                textAlign && `is-${textAlign}`
              )}
            >
              <select
                size={3}
                multiple
                disabled={isDisabled ? true : undefined}
              >
                <option>Select A</option>
                <option>Select B</option>
                <option>Select C</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className="demo-fieldset-contents">
          <div>
            <label className="label is-middle is-gap-xxs">
              <input
                className="input"
                type="radio"
                name="test-a-1"
                defaultChecked
                disabled={isDisabled ? true : undefined}
              />
              <span className="radio" />
              <span className="text">むすびー</span>
            </label>
          </div>
          <div>
            <label className="label is-middle is-gap-xxs">
              <input
                className="input"
                type="radio"
                name="test-a-1"
                disabled={isDisabled ? true : undefined}
              />
              <span className="radio" />
              <span className="text">むすびい</span>
            </label>
          </div>
          <div>｜</div>
          <div>
            <input
              className="input"
              id="test-a-2-1"
              type="radio"
              name="test-a-2"
              defaultChecked
              disabled={isDisabled ? true : undefined}
            />
            <label className="label is-middle is-gap-xxs" htmlFor="test-a-2-1">
              <span className="radio" />
              <span className="text">むすびー</span>
            </label>
          </div>
          <div>
            <input
              className="input"
              id="test-a-2-2"
              type="radio"
              name="test-a-2"
              disabled={isDisabled ? true : undefined}
            />
            <label className="label is-middle is-gap-xxs" htmlFor="test-a-2-2">
              <span className="radio" />
              <span className="text">むすびい</span>
            </label>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className="demo-fieldset-contents">
          <div>
            <label className="label is-middle is-gap-xxs">
              <input
                className="input"
                type="checkbox"
                name="test-b-1-1"
                defaultChecked
                disabled={isDisabled ? true : undefined}
              />
              <span className="checkbox" />
              <span className="text">ムスビー</span>
            </label>
          </div>
          <div>
            <label className="label is-middle is-gap-xxs">
              <input
                className="input"
                type="checkbox"
                name="test-b-1-2"
                disabled={isDisabled ? true : undefined}
              />
              <span className="checkbox" />
              <span className="text">ムスビイ</span>
            </label>
          </div>
          <div>｜</div>
          <div>
            <input
              className="input"
              id="test-b-2-1"
              type="checkbox"
              name="test-b-2-1"
              defaultChecked
              disabled={isDisabled ? true : undefined}
            />
            <label className="label is-middle is-gap-xxs" htmlFor="test-b-2-1">
              <span className="checkbox" />
              <span className="text">ムスビー</span>
            </label>
          </div>
          <div>
            <input
              className="input"
              id="test-b-2-2"
              type="checkbox"
              name="test-b-2-2"
              disabled={isDisabled ? true : undefined}
            />
            <label className="label is-middle is-gap-xxs" htmlFor="test-b-2-2">
              <span className="checkbox" />
              <span className="text">ムスビイ</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
