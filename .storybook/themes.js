import { create } from "@storybook/theming"
import pkg from "../package.json"
import pjt from "../project.json"

const common = {
  brandTitle: pjt.setting.name + " v" + pkg.version,
  brandUrl: "https://musubii.qranoko.jp/"
  //brandImage: "/favicon.png"
}

export const light = create({
  ...common,
  base: "light"
})
export const dark = create({
  ...common,
  base: "dark"
})
