import { makeDecorator } from "@storybook/addons"

const element = document.querySelector("body")

const updateTheme = () => {
  let newData = JSON.parse(localStorage.getItem("sb-addon-themes-3"))
  let newTheme = newData != null ? newData.current : "light"
  element.dataset.theme = newTheme
}

export const withDarkModeAttribute = makeDecorator({
  name: "withDarkModeAttribute",
  parameterName: "darkModeAttribute",
  allowDeprecatedUsage: false,
  wrapper: (getStory, context) => {
    updateTheme()
    window.addEventListener("storage", updateTheme)
    return getStory(context)
  }
})
