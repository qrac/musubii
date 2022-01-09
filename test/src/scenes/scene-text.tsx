import { useState } from "react"

import {
  DemoDetails,
  DemoFieldset,
  DemoRadios,
  DemoCheckbox,
  Text,
  TextProps,
} from "../components"

export const SceneText = () => {
  const sizeList: string[] = ["unset", "xs", "sm", "md", "lg", "xl"]
  const [size, setSize] = useState<TextProps["size"]>("unset")
  const sizeAttr = size !== "unset" ? size : undefined
  const [isSubdued, setIsSubdued] = useState<boolean>(false)

  const textExample1 =
    "山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。"
  const textColorSchemeList: {
    colorScheme: TextProps["colorScheme"]
    text: string
    icon?: React.ReactElement
  }[] = [
    { colorScheme: "primary", text: "重要かも" },
    { colorScheme: "secondary", text: "二番目に" },
    { colorScheme: "info", text: "情報あり" },
    { colorScheme: "success", text: "成功した" },
    { colorScheme: "warning", text: "注意する" },
    { colorScheme: "danger", text: "禁止する" },
  ]
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
            <DemoFieldset legend="other">
              <div className="demo-labels">
                <DemoCheckbox
                  value="subdued"
                  isChecked={isSubdued}
                  onChange={() => setIsSubdued(!isSubdued)}
                />
              </div>
            </DemoFieldset>
          </div>
        </DemoDetails>
      </div>
      <div className="demo-content">
        <Text size={sizeAttr} isSubdued={isSubdued}>
          {textExample1}
        </Text>
      </div>
      <div className="demo-content">
        <div className="demo-flex is-gap-4px">
          {textColorSchemeList.map((item, index) => (
            <Text
              key={index}
              DOMElement="span"
              colorScheme={item.colorScheme}
              size={sizeAttr}
              isSubdued={isSubdued}
            >
              {item.text}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}
