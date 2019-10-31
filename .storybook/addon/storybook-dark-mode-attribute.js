import { makeDecorator } from "@storybook/addons"

const element = document.querySelector("body")

const updateTheme = () => {
  let newData = JSON.parse(localStorage.getItem("sb-addon-themes-3"))
  let newTheme = newData.current ? newData.current : "light"
  element.dataset.theme = newTheme
}

export const withTheme = makeDecorator({
  name: "withTheme",
  parameterName: "themeAttribute",
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    updateTheme()
    window.addEventListener("storage", updateTheme)
    return getStory(context)
  }
})
