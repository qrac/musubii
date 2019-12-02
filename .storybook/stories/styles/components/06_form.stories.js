//----------------------------------------------------
// Form
//----------------------------------------------------

import React from "react"
import { withKnobs, boolean, radios, number } from "@storybook/addon-knobs"

import copyCodeBlock from "@pickra/copy-code-block"
import beautify from "js-beautify"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

export default {
  title: "Styles | Components / Form",
  decorators: [withKnobs]
}

const buttonItems = [
  { id: 0, role: "", text: "ボタン", type: "button" },
  { id: 1, role: "is-primary", text: "ボタン", type: "button" }
]

const resetItems = [
  { id: 0, role: "", text: "リセット", type: "reset" },
  { id: 1, role: "is-warning", text: "リセット", type: "reset" },
  { id: 2, role: "is-danger", text: "リセット", type: "reset" }
]

const submitItems = [
  { id: 0, role: "is-primary", text: "送信", type: "submit" },
  { id: 1, role: "is-success", text: "送信", type: "submit" }
]

const styles = {
  none: "",
  plain: "is-plain",
  underline: "is-underline",
  inside: "is-inside"
}

const buttonStyles = {
  plain: "is-plain",
  outline: "is-outline",
  melt: "is-melt"
}

const buttonRoles = {
  none: "",
  primary: "is-primary"
}

const verifications = {
  none: "",
  success: "is-success",
  danger: "is-danger"
}

const beautifyHtmlOptions = {
  inline: ["i"],
  indent_size: 2
}

const md = mdContent => {
  return mdContent
}

//----------------------------------------------------
// / Text
//----------------------------------------------------

export const text = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "value" : "placeholder"
  const content = `<input
    class="input ${style} ${verification} ${round}" type="text" name="text"
    ${valueAttr}="Text" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Text</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

text.story = { name: "Text" }

//----------------------------------------------------
// / Textarea
//----------------------------------------------------

export const textarea = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "Textarea" : ""
  const content = `<textarea
    class="textarea ${style} ${verification}"
    ${disabled} ${readonly}>${valueAttr}</textarea>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Textarea</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

textarea.story = { name: "Textarea" }

//----------------------------------------------------
// / Password
//----------------------------------------------------

export const password = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? 'value="xAck6mb2"' : ""
  const content = `<input
    class="input ${style} ${verification} ${round}" type="password" name="password"
    ${valueAttr} ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Password</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

password.story = { name: "Password" }

//----------------------------------------------------
// / URL
//----------------------------------------------------

export const url = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "value" : "placeholder"
  const content = `<input
    class="input ${style} ${verification} ${round}" type="url" name="url"
    ${valueAttr}="https://example.com" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">URL</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

url.story = { name: "URL" }

//----------------------------------------------------
// / Email
//----------------------------------------------------

export const email = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "value" : "placeholder"
  const content = `<input
    class="input ${style} ${verification} ${round}" type="email" name="email"
    ${valueAttr}="example@gmail.com" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Email</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

email.story = { name: "Email" }

//----------------------------------------------------
// / TEL
//----------------------------------------------------

export const tel = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "value" : "placeholder"
  const content = `<input
    class="input ${style} ${verification} ${round}" type="tel" name="tel"
    ${valueAttr}="000-0000-0000" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">TEL</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

tel.story = { name: "TEL" }

//----------------------------------------------------
// / Number
//----------------------------------------------------

export const num = () => {
  const step = number("Step", 100)
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const valueAttr = readonly ? "value" : "placeholder"
  const content = `<input
    class="input ${style} ${verification} ${round}" type="number" name="number"
    ${step != null ? 'step="' + step + '"' : ""}
    ${valueAttr}="10000" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Number</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

num.story = { name: "Number" }

//----------------------------------------------------
// / Date
//----------------------------------------------------

export const date = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const content = `<input
    class="input ${style} ${verification} ${round}" type="date" name="date"
    value="2019-11-12" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Date</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

date.story = { name: "Date" }

//----------------------------------------------------
// / Time
//----------------------------------------------------

export const time = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const readonly = boolean("Readonly", false) ? "readonly" : ""
  const content = `<input
    class="input ${style} ${verification} ${round}" type="time" name="time"
    value="09:30:00" ${disabled} ${readonly}>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Time</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

time.story = { name: "Time" }

//----------------------------------------------------
// / File
//----------------------------------------------------

export const file = () => {
  const style = radios("Style", buttonStyles, "is-plain")
  const role = radios("Role", buttonRoles, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false)
  const disabledClass = disabled ? "is-disabled" : ""
  const disabledAttr = disabled ? "disabled" : ""
  const content = `<label
      class="button ${style} ${role} ${round} ${disabledClass}">
      <span class="text">ファイル選択</span>
      <input type="file" name="file" class="input" ${disabledAttr}>
    </label>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">File</h2>
      <div className="demo-line-box">
        <div
          className="box"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

file.story = { name: "File" }

//----------------------------------------------------
// / Radio
//----------------------------------------------------

export const radio = () => {
  const content = `<div
    class="radio-wrap">
      <input class="input is-hidden" id="radio-demo-1-1" type="radio" name="radio-demo-1" checked>
      <label class="label is-space-column-xs" for="radio-demo-1-1">
        <span class="radio"></span>
        <span class="text">むすびー</span>
      </label>
    </div>
    <div class="radio-wrap">
      <input class="input is-hidden" id="radio-demo-1-2" type="radio" name="radio-demo-1">
      <label class="label is-space-column-xs" for="radio-demo-1-2">
        <span class="radio"></span>
        <span class="text">むすびい</span>
      </label>
    </div>
    <div class="radio-wrap">
      <input class="input is-hidden" id="radio-demo-1-3" type="radio" name="radio-demo-1" disabled>
      <label class="label is-space-column-xs" for="radio-demo-1-3">
        <span class="radio"></span>
        <span class="text">むすび</span>
      </label>
    </div>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Radio</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-column-md"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

radio.story = { name: "Radio" }

//----------------------------------------------------
// / Checkbox
//----------------------------------------------------

export const checkbox = () => {
  const content = `<div
    class="checkbox-wrap">
      <input class="input is-hidden" id="checkbox-demo-1-1" type="checkbox" name="checkbox-demo-1" checked>
      <label class="label is-space-column-xs" for="checkbox-demo-1-1">
        <span class="checkbox"></span>
        <span class="text">むすびー</span>
      </label>
    </div>
    <div class="checkbox-wrap">
      <input class="input is-hidden" id="checkbox-demo-1-2" type="checkbox" name="checkbox-demo-1">
      <label class="label is-space-column-xs" for="checkbox-demo-1-2">
        <span class="checkbox"></span>
        <span class="text">むすびい</span>
      </label>
    </div>
    <div class="checkbox-wrap">
      <input class="input is-hidden" id="checkbox-demo-1-3" type="checkbox" name="checkbox-demo-1" disabled>
      <label class="label is-space-column-xs" for="checkbox-demo-1-3">
        <span class="checkbox"></span>
        <span class="text">むすび</span>
      </label>
    </div>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Checkbox</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-column-md"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

checkbox.story = { name: "Checkbox" }

//----------------------------------------------------
// / Select
//----------------------------------------------------

export const select = () => {
  const style = radios("Style", styles, "")
  const verification = radios("Verification", verifications, "")
  const round = boolean("Round", false) ? "is-round" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const content = `<div
    class="select ${style} ${verification} ${round}">
      <select ${disabled}>
        <option>Select A</option>
        <option>Select B</option>
        <option>Select C</option>
        <option>Select D</option>
        <option>Select E</option>
      </select>
    </div>`
  const contents = content.replace(/\s+/g, " ").replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Select</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

select.story = { name: "Select" }

//----------------------------------------------------
// / Button
//----------------------------------------------------

export const button = () => {
  const style = radios("Style", buttonStyles, "is-plain")
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const round = boolean("Round", false) ? "is-round" : ""
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contents = buttonItems
    .map(
      item =>
        `<button class="button ${style} ${item.role} ${strong} ${round} ${floating}"
          type="${item.type}" ${disabled}>${item.text}</button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Button</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-row-xs is-space-column-xs"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

button.story = { name: "Button" }

//----------------------------------------------------
// / Reset
//----------------------------------------------------

export const reset = () => {
  const style = radios("Style", buttonStyles, "is-plain")
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const round = boolean("Round", false) ? "is-round" : ""
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contents = resetItems
    .map(
      item =>
        `<button class="button ${style} ${item.role} ${strong} ${round} ${floating}"
          type="${item.type}" ${disabled}>${item.text}</button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Reset</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-row-xs is-space-column-xs"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

reset.story = { name: "Reset" }

//----------------------------------------------------
// / Submit
//----------------------------------------------------

export const submit = () => {
  const style = radios("Style", buttonStyles, "is-plain")
  const strong = boolean("Strong", false) ? "is-strong" : ""
  const round = boolean("Round", false) ? "is-round" : ""
  const floating = boolean("Floating", false) ? "is-floating" : ""
  const disabled = boolean("Disabled", false) ? "disabled" : ""
  const contents = submitItems
    .map(
      item =>
        `<button class="button ${style} ${item.role} ${strong} ${round} ${floating}"
          type="${item.type}" ${disabled}>${item.text}</button>`
    )
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\s\"/g, '"')
  const formatted = beautify.html(contents, beautifyHtmlOptions)
  const highlighted = copyCodeBlock(formatted, { lang: "html" })
  return (
    <div className="demo-space-box">
      <h1 className="demo-h1">Form</h1>
      <h2 className="demo-h2">Submit</h2>
      <div className="demo-line-box">
        <div
          className="box is-flex is-space-row-xs is-space-column-xs"
          dangerouslySetInnerHTML={{ __html: formatted }}
        ></div>
      </div>
      <div
        className="box"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
    </div>
  )
}

submit.story = { name: "Submit" }
