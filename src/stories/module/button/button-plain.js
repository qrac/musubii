import { storiesOf } from "@storybook/html"

storiesOf("Module/Button", module).add("Plain", () => {
  const buttons = [
    {
      classes: "button is-plain",
      attribute: "",
      value: "戻る"
    },
    {
      classes: "button is-plain is-primary",
      attribute: "",
      value: "決定"
    },
    {
      classes: "button is-plain is-info",
      attribute: "",
      value: "情報"
    },
    {
      classes: "button is-plain is-success",
      attribute: "",
      value: "登録"
    },
    {
      classes: "button is-plain is-warning",
      attribute: "",
      value: "注意"
    },
    {
      classes: "button is-plain is-danger",
      attribute: "",
      value: "削除"
    },
    {
      classes: "button is-plain is-disabled",
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
