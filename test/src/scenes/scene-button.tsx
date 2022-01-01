import { useState } from "react"
import {
  FaListUl,
  FaCheck,
  FaPalette,
  FaSave,
  FaTrashAlt,
} from "react-icons/fa"

import { DemoRadios, DemoCheckbox, Button, ButtonProps } from "../components"

export const SceneButton = () => {
  const variants = ["solid", "outline", "ghost"]
  const [variant, setVariant] = useState<ButtonProps["variant"]>("solid")
  const [isWidthFull, setIsWidthFull] = useState<boolean>(false)
  const widthAttr = isWidthFull ? "full" : undefined
  const [isRoundedFull, setIsRoundedFull] = useState<boolean>(false)
  const roundedAttr = isRoundedFull ? "full" : undefined
  const widthIcons = ["none", "left-icon", "right-icon"]
  const [widthIcon, setWidthIcon] = useState<string>("none")
  const isLeftIcon = widthIcon === "left-icon"
  const isRightIcon = widthIcon === "right-icon"
  const domElements = ["button", "a"]
  const [domElement, setDomElement] =
    useState<ButtonProps["DOMElement"]>("button")
  const types = ["button", "reset", "submit"]
  const [type, setType] = useState<ButtonProps["type"]>("button")
  const targets = ["_self", "_blank"]
  const [target, setTarget] = useState<ButtonProps["target"]>("_self")
  const targetAttr = target === "_blank" ? target : undefined
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
  const buttonSizes: ButtonProps["size"][] = ["xs", "sm", "md", "lg", "xl"]
  return (
    <div className="demo-contents">
      <div className="demo-content">
        <div className="demo-options">
          <DemoRadios
            items={variants}
            checkedItem={variant}
            name="variant"
            onChange={(event) =>
              setVariant(event.target.value as ButtonProps["variant"])
            }
          />
          <DemoCheckbox
            value="width-full"
            isChecked={isWidthFull}
            onChange={() => setIsWidthFull(!isWidthFull)}
          />
          <DemoCheckbox
            value="rounded-full"
            isChecked={isRoundedFull}
            onChange={() => setIsRoundedFull(!isRoundedFull)}
          />
        </div>
        <div className="demo-options">
          <DemoRadios
            items={widthIcons}
            checkedItem={widthIcon}
            name="with-icon"
            onChange={(event) => setWidthIcon(event.target.value)}
          />
        </div>
        <div className="demo-options">
          <DemoRadios
            items={domElements}
            checkedItem={domElement}
            name="domElement"
            onChange={(event) =>
              setDomElement(event.target.value as ButtonProps["DOMElement"])
            }
          />
          <DemoRadios
            items={types}
            checkedItem={type}
            name="type"
            onChange={(event) =>
              setType(event.target.value as ButtonProps["type"])
            }
          />
          <DemoRadios
            items={targets}
            checkedItem={target}
            name="target"
            onChange={(event) =>
              setTarget(event.target.value as ButtonProps["target"])
            }
          />
          <DemoCheckbox
            value="disabled"
            isChecked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
          />
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
          {buttonSizes.map((item, index) => (
            <Button
              key={index}
              DOMElement={domElement}
              type={type}
              variant={variant}
              color="primary"
              width={widthAttr}
              rounded={roundedAttr}
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
