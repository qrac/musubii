function changeTheme(theme: string, lightModeQuery: MediaQueryList) {
  switch (theme) {
    case "light":
      document.documentElement.setAttribute("data-theme", "light")
      break
    case "dark":
      document.documentElement.setAttribute("data-theme", "dark")
      break
    default:
      if (lightModeQuery.matches) {
        document.documentElement.setAttribute("data-theme", "light")
      } else {
        document.documentElement.setAttribute("data-theme", "dark")
      }
      break
  }
}

function changeMode(
  lightModeQuery: MediaQueryList,
  darkModeQuery: MediaQueryList
) {
  if (localStorage.getItem("theme") === "system") {
    if (lightModeQuery.matches) {
      document.documentElement.setAttribute("data-theme", "light")
    }
    if (darkModeQuery.matches) {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }
}

function changeActive(els: HTMLButtonElement[], theme: string) {
  els.forEach((el) => {
    if (el.dataset.themeButton === theme) {
      el.classList.add("is-active")
    } else {
      el.classList.remove("is-active")
    }
  })
}

export function eventTheme() {
  const savedTheme = localStorage.getItem("theme") || "system"

  const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)")
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const buttonEls = [
    ...document.querySelectorAll("[data-theme-button]"),
  ] as HTMLButtonElement[]

  changeActive(buttonEls, savedTheme)

  buttonEls.forEach((el) => {
    el.addEventListener("click", () => {
      const theme = el.dataset.themeButton

      if (theme) {
        changeTheme(theme, lightModeQuery)
        changeActive(buttonEls, theme)
        localStorage.setItem("theme", theme)
      }
      el.blur()
    })
  })

  lightModeQuery.addEventListener("change", () =>
    changeMode(lightModeQuery, darkModeQuery)
  )
  darkModeQuery.addEventListener("change", () =>
    changeMode(lightModeQuery, darkModeQuery)
  )
}
