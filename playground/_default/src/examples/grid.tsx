import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const gaps = [
  undefined,
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "y-xxs",
  "y-xs",
  "y-sm",
  "y-md",
  "y-lg",
  "y-xl",
  "y-xxl",
  "x-xxs",
  "x-xs",
  "x-sm",
  "x-md",
  "x-lg",
  "x-xl",
  "x-xxl",
]

export function ExampleGrid() {
  const [gap, setGap] = useState<(typeof gaps)[number]>("md")
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="gap">
            <DemoRadios patterns={gaps} checkedValue={gap} onChange={setGap} />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className={clsx("grid", gap && `is-gap-${gap}`)}>
          <div className="column is-flex-0">
            <div className="demo-card">is-flex-0</div>
          </div>
          <div className="column is-flex-0">
            <div className="demo-card">is-flex-0</div>
          </div>
          <div className="column is-flex-0">
            <div className="demo-card">is-flex-0</div>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className={clsx("grid", gap && `is-gap-${gap}`)}>
          <div className="column is-flex-3">
            <div className="demo-card">is-flex-3</div>
          </div>
          <div className="column is-flex-4">
            <div className="demo-card">is-flex-4</div>
          </div>
          <div className="column is-flex-5">
            <div className="demo-card">is-flex-5</div>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className={clsx("grid", gap && `is-gap-${gap}`)}>
          <div className="column is-flex-6">
            <div className="demo-card">is-flex-6</div>
          </div>
          <div className="column is-flex-6">
            <div className="demo-card">is-flex-6</div>
          </div>
          <div className="column is-flex-full">
            <div className="demo-card">is-flex-full</div>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className={clsx("grid is-stretch", gap && `is-gap-${gap}`)}>
          <div className="column is-flex-6">
            <div className="demo-card is-flex-full">is-stretch</div>
          </div>
          <div className="column is-flex-6">
            <div className="demo-card is-flex-full">
              <div>is-stretch</div>
              <div>is-stretch</div>
              <div>is-stretch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-box">
        <div className={clsx("grid", gap && `is-gap-${gap}`)}>
          <div className="column is-flex-12 desktop:is-flex-0">
            <div className="demo-card">is-flex-12 desktop:is-flex-0</div>
          </div>
          <div className="column is-flex-12 desktop:is-flex-0">
            <div className="demo-card">is-flex-12 desktop:is-flex-0</div>
          </div>
        </div>
      </div>
    </div>
  )
}
