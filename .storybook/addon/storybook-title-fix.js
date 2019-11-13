import addons from "@storybook/addons"
import { STORY_RENDERED } from "@storybook/core-events"
import pjt from "../../project.json"

addons.register("storybook-title-fix", api => {
  api.on(STORY_RENDERED, story => {
    const storyData = api.getCurrentStoryData()
    document.title = `${storyData.kind}: ${storyData.name} - ${pjt.setting.name}`
  })
})
