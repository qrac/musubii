import { storiesOf } from "@storybook/html"

storiesOf("Module/Button", module).add(
  "Default",
  () => `
    <button class="button is-plain is-primary" type="button">ボタン</button>
  `
)
