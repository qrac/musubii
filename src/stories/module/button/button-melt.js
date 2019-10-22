import { storiesOf } from "@storybook/html"

storiesOf("Module/Button", module).add("Melt", () => {
  const buttons = [
    {
      classes: "button is-melt",
      attribute: "",
      value: "戻る"
    },
    {
      classes: "button is-melt is-primary",
      attribute: "",
      value: "決定"
    },
    {
      classes: "button is-melt is-info",
      attribute: "",
      value: "情報"
    },
    {
      classes: "button is-melt is-success",
      attribute: "",
      value: "登録"
    },
    {
      classes: "button is-melt is-warning",
      attribute: "",
      value: "注意"
    },
    {
      classes: "button is-melt is-danger",
      attribute: "",
      value: "削除"
    },
    {
      classes: "button is-melt is-disabled",
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
