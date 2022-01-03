import { useState } from "react"
import {
  FaListUl,
  FaCheck,
  FaPalette,
  FaSave,
  FaTrashAlt,
} from "react-icons/fa"

import {
  DemoFieldset,
  DemoRadios,
  DemoCheckbox,
  Button,
  ButtonProps,
} from "../components"

export const SceneButton = () => {
  const variantList = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const widthList = ["unset", "full"]
  const [width, setWidth] = useState<ButtonProps["width"]>("unset")
  const widthAttr = width !== "unset" ? width : undefined
  const roundedList = ["unset", "none", "full"]
  const [rounded, setRounded] = useState<ButtonProps["rounded"]>("unset")
  const roundedAttr = rounded !== "unset" ? rounded : undefined
  const angleList = [
    "unset",
    "left",
    "left-up",
    "left-down",
    "right",
    "right-up",
    "right-down",
  ]
  const [angle, setAngle] = useState<ButtonProps["angle"]>("unset")
  const angleAttr = angle !== "unset" ? angle : undefined
  const shadowList = ["unset", "sm", "md", "lg", "xl"]
  const [shadow, setShadow] = useState<ButtonProps["shadow"]>("unset")
  const shadowAttr = shadow !== "unset" ? shadow : undefined
  const withIconList = ["unset", "left", "right"]
  const [withIcon, setWithIcon] = useState<string>("unset")
  const isLeftIcon = withIcon === "left"
  const isRightIcon = withIcon === "right"
  const domElementList = ["button", "a"]
  const [domElement, setDomElement] =
    useState<ButtonProps["DOMElement"]>("button")
  const typeList = ["button", "reset", "submit"]
  const [type, setType] = useState<ButtonProps["type"]>("button")
  const targetList = ["unset", "_self", "_blank"]
  const [target, setTarget] = useState<ButtonProps["target"]>("unset")
  const targetAttr = target !== "unset" ? target : undefined
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const buttonList: {
    color: ButtonProps["color"]
    text: string
    icon?: React.ReactElement
  }[] = [
    { color: undefined, text: "詳細", icon: <FaListUl /> },
    { color: "primary", text: "決定", icon: <FaCheck /> },
    { color: "secondary", text: "変更", icon: <FaPalette /> },
    { color: "success", text: "登録", icon: <FaSave /> },
    { color: "danger", text: "削除", icon: <FaTrashAlt /> },
  ]
  const buttonSizeList: ButtonProps["size"][] = ["xs", "sm", "md", "lg", "xl"]
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <div className="demo-options">
          <DemoFieldset legend="variant">
            <DemoRadios
              items={variantList}
              checkedItem={variant}
              name="variant"
              onChange={(event) =>
                setVariant(event.target.value as ButtonProps["variant"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="width">
            <DemoRadios
              items={widthList}
              checkedItem={width}
              name="width"
              onChange={(event) =>
                setWidth(event.target.value as ButtonProps["width"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="rounded">
            <DemoRadios
              items={roundedList}
              checkedItem={rounded}
              name="rounded"
              onChange={(event) =>
                setRounded(event.target.value as ButtonProps["rounded"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="angle">
            <DemoRadios
              items={angleList}
              checkedItem={angle}
              name="angle"
              onChange={(event) => setAngle(event.target.value)}
            />
          </DemoFieldset>
          <DemoFieldset legend="shadow">
            <DemoRadios
              items={shadowList}
              checkedItem={shadow}
              name="shadow"
              onChange={(event) => setShadow(event.target.value)}
            />
          </DemoFieldset>
          <DemoFieldset legend="icon">
            <DemoRadios
              items={withIconList}
              checkedItem={withIcon}
              name="icon"
              onChange={(event) => setWithIcon(event.target.value)}
            />
          </DemoFieldset>
          <DemoFieldset legend="DOMElement">
            <DemoRadios
              items={domElementList}
              checkedItem={domElement}
              name="domElement"
              onChange={(event) =>
                setDomElement(event.target.value as ButtonProps["DOMElement"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="type">
            <DemoRadios
              items={typeList}
              checkedItem={type}
              name="type"
              onChange={(event) =>
                setType(event.target.value as ButtonProps["type"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="target">
            <DemoRadios
              items={targetList}
              checkedItem={target}
              name="target"
              onChange={(event) =>
                setTarget(event.target.value as ButtonProps["target"])
              }
            />
          </DemoFieldset>
          <DemoFieldset legend="other">
            <div className="demo-labels">
              <DemoCheckbox
                value="disabled"
                isChecked={isDisabled}
                onChange={() => setIsDisabled(!isDisabled)}
              />
            </div>
          </DemoFieldset>
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          {buttonList.map((item, index) => (
            <Button
              key={index}
              DOMElement={domElement}
              type={type}
              variant={variant}
              color={item.color}
              width={widthAttr}
              rounded={roundedAttr}
              angle={angleAttr}
              shadow={shadowAttr}
              target={targetAttr}
              isDisabled={isDisabled}
              leftIcon={isLeftIcon ? item.icon : undefined}
              rightIcon={isRightIcon ? item.icon : undefined}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          {buttonSizeList.map((item, index) => (
            <Button
              key={index}
              DOMElement={domElement}
              type={type}
              variant={variant}
              color="primary"
              width={widthAttr}
              rounded={roundedAttr}
              angle={angleAttr}
              shadow={shadowAttr}
              size={item}
              target={targetAttr}
              isDisabled={isDisabled}
              leftIcon={isLeftIcon ? <FaCheck /> : undefined}
              rightIcon={isRightIcon ? <FaCheck /> : undefined}
              text="決定"
            />
          ))}
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          {buttonList.map((item, index) => (
            <Button
              key={index}
              DOMElement={domElement}
              type={type}
              variant={variant}
              color={item.color}
              aspect="square"
              rounded={roundedAttr}
              shadow={shadowAttr}
              target={targetAttr}
              isDisabled={isDisabled}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
      <div className="demo-content">
        <div className="demo-buttons">
          <Button
            id="button-id-demo"
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            shadow={shadowAttr}
            target={targetAttr}
            isDisabled={isDisabled}
            text="id"
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            shadow={shadowAttr}
            target={targetAttr}
            isDisabled={isDisabled}
            text="className"
            className="is-disabled"
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            shadow={shadowAttr}
            target={targetAttr}
            isDisabled={isDisabled}
            text="style"
            style={{ backgroundColor: "rgb(17, 24, 39)" }}
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            shadow={shadowAttr}
            target={targetAttr}
            isDisabled={isDisabled}
            text="data-*"
            data-custom="custom"
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            shadow={shadowAttr}
            target={targetAttr}
            isDisabled={isDisabled}
          >
            <span>children</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
