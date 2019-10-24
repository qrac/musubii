import {
  withKnobs,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs"
//import _escape from "lodash/escape"
import Prism from "prismjs"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"

export default {
  title: "Modules|Button",
  decorators: [withKnobs]
}

export const buttonBasic = () => {
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
  const items = [
    { role: "", text: "戻る" },
    { role: " is-primary", text: "決定" },
    { role: " is-info", text: "情報" },
    { role: " is-success", text: "登録" },
    { role: " is-warning", text: "注意" },
    { role: " is-danger", text: "削除" }
  ]
  const contents = items
    .map(
      item =>
        `<button class="button${style}${item.role}${round}${floating}" type="button"${disabled}>${item.text}</button>`
    )
    .join("\n")
  const contentsHighlight = Prism.highlight(
    contents,
    Prism.languages.html,
    "html"
  )
  const wrapper = `<div class="box is-flex is-space-row-xs is-space-column-xs">${contents}</div>`
  const container = `<div class="box is-space-xs">${wrapper}<pre class="pre is-demo"><code class="code">${contentsHighlight}</code></pre></div>`
  return container
}
buttonBasic.story = { name: "Basic" }
