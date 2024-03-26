import { useState } from "react"

import type { GridProps } from "../components/grid"
import { Grid, Column, gridPatterns } from "../components/grid"
import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const { gaps } = gridPatterns

export function ExampleGrid() {
  const [gap, setGap] = useState<GridProps["gap"]>("md")
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
        <Grid gap={gap}>
          <Column flex={0}>
            <div className="demo-card">is-flex-0</div>
          </Column>
          <Column flex={0}>
            <div className="demo-card">is-flex-0</div>
          </Column>
          <Column flex={0}>
            <div className="demo-card">is-flex-0</div>
          </Column>
        </Grid>
      </div>
      <div className="demo-box">
        <Grid gap={gap}>
          <Column flex={3}>
            <div className="demo-card">is-flex-3</div>
          </Column>
          <Column flex={4}>
            <div className="demo-card">is-flex-4</div>
          </Column>
          <Column flex={5}>
            <div className="demo-card">is-flex-5</div>
          </Column>
        </Grid>
      </div>
      <div className="demo-box">
        <Grid gap={gap}>
          <Column flex={6}>
            <div className="demo-card">is-flex-6</div>
          </Column>
          <Column flex={6}>
            <div className="demo-card">is-flex-6</div>
          </Column>
          <Column flex={"full"}>
            <div className="demo-card">is-flex-full</div>
          </Column>
        </Grid>
      </div>
      <div className="demo-box">
        <Grid gap={gap} isStretch>
          <Column flex={6}>
            <div className="demo-card is-flex-full">is-stretch</div>
          </Column>
          <Column flex={6}>
            <div className="demo-card is-flex-full">
              <div>is-stretch</div>
              <div>is-stretch</div>
              <div>is-stretch</div>
            </div>
          </Column>
        </Grid>
      </div>
      <div className="demo-box">
        <Grid gap={gap}>
          <Column flex={12} desktopFlex={0}>
            <div className="demo-card">is-flex-12 desktop:is-flex-0</div>
          </Column>
          <Column flex={12} desktopFlex={0}>
            <div className="demo-card">is-flex-12 desktop:is-flex-0</div>
          </Column>
        </Grid>
      </div>
    </div>
  )
}
