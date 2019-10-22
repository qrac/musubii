import { storiesOf } from "@storybook/html"

storiesOf("Module/Button", module).add("Outline", () => {
  const buttons = [
    {
      classes: "button is-outline",
      attribute: "",
      value: "戻る"
    },
    {
      classes: "button is-outline is-primary",
      attribute: "",
      value: "決定"
    },
    {
      classes: "button is-outline is-info",
      attribute: "",
      value: "情報"
    },
    {
      classes: "button is-outline is-success",
      attribute: "",
      value: "登録"
    },
    {
      classes: "button is-outline is-warning",
      attribute: "",
      value: "注意"
    },
    {
      classes: "button is-outline is-danger",
      attribute: "",
      value: "削除"
    },
    {
      classes: "button is-outline is-disabled",
      attribute: "",
      value: "不可"
    }
  ]
  return `${buttons
    .map(
      button =>
        `<button class="${button.classes}" type="button" ${button.attribute}>${button.value}</button>`
    )
    .join(" ")}`
})
