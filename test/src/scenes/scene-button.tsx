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
  const [isWidthFull, setIsWidthFull] = useState<boolean>(false)
  const widthAttr = isWidthFull ? "full" : undefined
  const [isRoundedFull, setIsRoundedFull] = useState<boolean>(false)
  const roundedAttr = isRoundedFull ? "full" : undefined
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
  const widthIconList = ["unset", "left", "right"]
  const [widthIcon, setWidthIcon] = useState<string>("unset")
  const isLeftIcon = widthIcon === "left"
  const isRightIcon = widthIcon === "right"
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
            <DemoCheckbox
              value="full"
              isChecked={isWidthFull}
              onChange={() => setIsWidthFull(!isWidthFull)}
            />
          </DemoFieldset>
          <DemoFieldset legend="rounded">
            <DemoCheckbox
              value="full"
              isChecked={isRoundedFull}
              onChange={() => setIsRoundedFull(!isRoundedFull)}
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
          <DemoFieldset legend="icon">
            <DemoRadios
              items={widthIconList}
              checkedItem={widthIcon}
              name="icon"
              onChange={(event) => setWidthIcon(event.target.value)}
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
            <DemoCheckbox
              value="disabled"
              isChecked={isDisabled}
              onChange={() => setIsDisabled(!isDisabled)}
            />
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
              target={targetAttr}
              isDisabled={isDisabled}
              text={item.text}
              leftIcon={isLeftIcon ? item.icon : undefined}
              rightIcon={isRightIcon ? item.icon : undefined}
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
              size={item}
              target={targetAttr}
              isDisabled={isDisabled}
              text="決定"
              leftIcon={isLeftIcon ? <FaCheck /> : undefined}
              rightIcon={isRightIcon ? <FaCheck /> : undefined}
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
            target={targetAttr}
            isDisabled={isDisabled}
            text="class"
            customClass="is-disabled"
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
            target={targetAttr}
            isDisabled={isDisabled}
            text="style"
            customStyle={{ backgroundColor: "rgb(17, 24, 39)" }}
          />
          <Button
            DOMElement={domElement}
            type={type}
            variant={variant}
            color="primary"
            rounded={roundedAttr}
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
