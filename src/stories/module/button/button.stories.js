import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Modules|Button",
  decorators: [withKnobs]
}

const styles = {
  Plain: " is-plain",
  Outline: " is-outline",
  Melt: " is-melt"
}

const items = [
  { role: "", text: "戻る", icon: "angle-left" },
  { role: " is-primary", text: "決定", icon: "check" },
  { role: " is-info", text: "情報", icon: "info-circle" },
  { role: " is-success", text: "登録", icon: "save" },
  { role: " is-warning", text: "注意", icon: "exclamation-triangle" },
  { role: " is-danger", text: "削除", icon: "times" }
]

export const buttonBasic = () => {
  const style = radios("Style", styles, " is-plain")
  const strong = boolean("Strong", false) ? " is-strong" : ""
  const round = boolean("Round", false) ? " is-round" : ""
  const floating = boolean("Floating", false) ? " is-floating" : ""
  const disabled = boolean("Disabled", false) ? " disabled" : ""
  const contents = items
    .map(
      item =>
        `<button class="button${style}${item.role}${strong}${round}${floating}" type="button"${disabled}>${item.text}</button>`
    )
    .join("\n")
  const highlight = copyCodeBlock(contents, { lang: "html" })
  const wrapper = `<div class="box is-flex is-space-row-xs is-space-column-xs">${contents}</div>`
  const container = `<div class="box is-space-sm">${wrapper}${highlight}</div>`
  return container
}
buttonBasic.story = { name: "Basic" }

export const buttonSquare = () => {
  const style = radios("Style", styles, " is-plain")
  const floating = boolean("Floating", false) ? " is-floating" : ""
  const disabled = boolean("Disabled", false) ? " disabled" : ""
  const contents = items
    .map(
      item =>
        `<button class="button${style} is-square${item.role}${floating}" type="button"${disabled}><i aria-hidden="true" class="fas fa-${item.icon}"></i></button>`
    )
    .join("\n")
  const highlight = copyCodeBlock(contents, { lang: "html" })
  const wrapper = `<div class="box is-flex is-space-row-xs is-space-column-xs">${contents}</div>`
  const container = `<div class="box is-space-sm">${wrapper}${highlight}</div>`
  return container
}
buttonSquare.story = { name: "Square" }

export const buttonCircle = () => {
  const style = radios("Style", styles, " is-plain")
  const floating = boolean("Floating", false) ? " is-floating" : ""
  const disabled = boolean("Disabled", false) ? " disabled" : ""
  const contents = items
    .map(
      item =>
        `<button class="button${style} is-circle${item.role}${floating}" type="button"${disabled}><i aria-hidden="true" class="fas fa-${item.icon}"></i></button>`
    )
    .join("\n")
  const highlight = copyCodeBlock(contents, { lang: "html" })
  const wrapper = `<div class="box is-flex is-space-row-xs is-space-column-xs">${contents}</div>`
  const container = `<div class="box is-space-sm">${wrapper}${highlight}</div>`
  return container
}
buttonCircle.story = { name: "Circle" }
