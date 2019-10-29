import { create } from "@storybook/theming"
import pjt from "../project.json"

export default create({
  base: "light",
  brandTitle: pjt.setting.name
})
