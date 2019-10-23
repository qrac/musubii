import { storiesOf } from "@storybook/html"
import {
  withKnobs,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs"

storiesOf("Module", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const buttons = [
      { role: "", text: "戻る" },
      { role: " is-primary", text: "決定" },
      { role: " is-info", text: "情報" },
      { role: " is-success", text: "登録" },
      { role: " is-warning", text: "注意" },
      { role: " is-danger", text: "削除" }
    ]
    const inlineRadio = { display: "inline-radio" }
    const styles = {
      Plain: " is-plain",
      Outline: " is-outline",
      Melt: " is-melt"
    }
    const style = options("Style", styles, " is-plain", inlineRadio)
    const round = boolean("Round", false) ? " is-round" : ""
    const floating = boolean("Floating", false) ? " is-floating" : ""
    const disabled = boolean("Disabled", false) ? " disabled" : ""
    return buttons
      .map(
        button =>
          `<button class="button${style}${button.role}${round}${floating}" type="button"${disabled}>${button.text}</button>`
      )
      .join(" ")
  })
