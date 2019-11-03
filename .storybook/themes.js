import { create } from "@storybook/theming"
import pjt from "../project.json"

const common = {
  brandTitle: pjt.setting.name
}

export const light = create({
  ...common,
  base: "light"
})
export const dark = create({
  ...common,
  base: "dark"
})
