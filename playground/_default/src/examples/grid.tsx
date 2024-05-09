import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const gapsAll = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]
const gapsY = ["y-xxs", "y-xs", "y-sm", "y-md", "y-lg", "y-xl", "y-xxl"]
const gapsX = ["x-xxs", "x-xs", "x-sm", "x-md", "x-lg", "x-xl", "x-xxl"]
const gaps = [...gapsAll, ...gapsY, ...gapsX]

export function ExampleGrid() {
  const [gap, setGap] = useState<string | undefined>("md")
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="gap">
            <DemoRadios
              patterns={[undefined, ...gaps]}
              checkedValue={gap}
              onChange={setGap}
            />
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
        <div className={clsx("grid", gap && `is-gap-${gap}`, "is-stretch")}>
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
