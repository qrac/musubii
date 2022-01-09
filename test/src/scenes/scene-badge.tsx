import { useState } from "react"

import {
  DemoDetails,
  DemoFieldset,
  DemoRadios,
  Badge,
  BadgeProps,
} from "../components"

export const SceneBadge = () => {
  const variantList = ["solid", "subtle", "outline"]
  const [variant, setVariant] = useState<BadgeProps["variant"]>("solid")
  const widthList = ["unset", "full"]
  const [width, setWidth] = useState<BadgeProps["width"]>("unset")
  const widthAttr = width !== "unset" ? width : undefined
  const roundedList = ["unset", "none", "full"]
  const [rounded, setRounded] = useState<BadgeProps["rounded"]>("unset")
  const roundedAttr = rounded !== "unset" ? rounded : undefined

  const badgeList: {
    colorScheme: BadgeProps["colorScheme"]
    text: string
    icon?: React.ReactElement
  }[] = [
    { colorScheme: undefined, text: "任意" },
    { colorScheme: "primary", text: "推奨" },
    { colorScheme: "secondary", text: "保留" },
    { colorScheme: "info", text: "新規" },
    { colorScheme: "success", text: "成功" },
    { colorScheme: "warning", text: "注意" },
    { colorScheme: "danger", text: "必須" },
  ]
  const badgeSizeList: BadgeProps["size"][] = ["md", "lg", "xl", "2xl"]
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <DemoDetails summary="options">
          <div className="demo-options">
            <DemoFieldset legend="variant">
              <DemoRadios
                items={variantList}
                checkedItem={variant}
                name="variant"
                onChange={(event) =>
                  setVariant(event.target.value as BadgeProps["variant"])
                }
              />
            </DemoFieldset>
            <DemoFieldset legend="width">
              <DemoRadios
                items={widthList}
                checkedItem={width}
                name="width"
                onChange={(event) =>
                  setWidth(event.target.value as BadgeProps["width"])
                }
              />
            </DemoFieldset>
            <DemoFieldset legend="rounded">
              <DemoRadios
                items={roundedList}
                checkedItem={rounded}
                name="rounded"
                onChange={(event) =>
                  setRounded(event.target.value as BadgeProps["rounded"])
                }
              />
            </DemoFieldset>
          </div>
        </DemoDetails>
      </div>
      <div className="demo-content">
        <div className="demo-flex is-gap-4px">
          {badgeList.map((item, index) => (
            <Badge
              key={index}
              variant={variant}
              colorScheme={item.colorScheme}
              width={widthAttr}
              rounded={roundedAttr}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-flex is-gap-4px">
          {badgeSizeList.map((item, index) => (
            <Badge
              key={index}
              variant={variant}
              colorScheme="success"
              width={widthAttr}
              rounded={roundedAttr}
              size={item}
              text="成功"
            />
          ))}
        </div>
      </div>
      <div className="demo-content">
        <p>
          <span style={{ marginRight: "4px" }}>お名前</span>
          <Badge
            variant={variant}
            colorScheme="danger"
            rounded={roundedAttr}
            text="必須"
            style={{ verticalAlign: "text-bottom" }}
          />
        </p>
      </div>
      <div className="demo-content">
        <div className="demo-flex is-gap-4px">
          <Badge variant={variant} colorScheme="danger" rounded="full" />
          <Badge
            variant={variant}
            colorScheme="danger"
            rounded="full"
            text="1"
          />
          <Badge
            variant={variant}
            colorScheme="danger"
            rounded="full"
            text="12"
          />
          <Badge
            variant={variant}
            colorScheme="danger"
            rounded="full"
            text="99+"
          />
          <Badge
            variant={variant}
            colorScheme="danger"
            rounded="full"
            text="999+"
          />
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-flex is-gap-4px">
          <Badge
            id="badge-id-demo"
            variant={variant}
            colorScheme="primary"
            rounded={roundedAttr}
            text="ID"
          />
          <Badge
            variant={variant}
            colorScheme="primary"
            rounded={roundedAttr}
            text="className"
            className="is-disabled"
          />
          <Badge
            variant={variant}
            colorScheme="primary"
            rounded={roundedAttr}
            text="STYLE"
            style={{ backgroundColor: "rgb(17, 24, 39)" }}
          />
          <Badge
            variant={variant}
            colorScheme="primary"
            rounded={roundedAttr}
            text="data-*"
            data-custom="custom"
          />
          <Badge variant={variant} colorScheme="primary" rounded={roundedAttr}>
            <span>children</span>
          </Badge>
        </div>
      </div>
    </div>
  )
}
