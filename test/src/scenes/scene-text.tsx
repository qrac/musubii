import { useState } from "react"

import {
  DemoDetails,
  DemoFieldset,
  DemoRadios,
  Text,
  TextProps,
} from "../components"

export const SceneText = () => {
  const textExample1 =
    "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
  const sizeList: string[] = ["unset", "xs", "sm", "md", "lg", "xl"]
  const [size, setSize] = useState<TextProps["size"]>("unset")
  const sizeAttr = size !== "unset" ? size : undefined
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <DemoDetails summary="options">
          <div className="demo-options">
            <DemoFieldset legend="size">
              <DemoRadios
                items={sizeList}
                checkedItem={size}
                name="size"
                onChange={(event) =>
                  setSize(event.target.value as TextProps["size"])
                }
              />
            </DemoFieldset>
          </div>
        </DemoDetails>
      </div>
      <div className="demo-content">
        <Text size={sizeAttr}>{textExample1}</Text>
      </div>
    </div>
  )
}
