import React from "react"

class ToggleTheme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: ""
    }
    this.toggleThemeMode = this.toggleThemeMode.bind(this)
    this.toggleThemeAttr = this.toggleThemeAttr.bind(this)
  }
  componentDidMount() {
    const isLocal = localStorage.getItem("theme")
    const isDark = window.matchMedia("(prefers-color-scheme: dark)")

    if (isLocal) {
      this.setState({ theme: localStorage.getItem("theme") })
    } else if (isDark.matches) {
      this.setState({ theme: "dark" })
    } else {
      this.setState({ theme: "light" })
    }

    isDark.addListener(this.toggleThemeMode)
  }
  toggleThemeMode(mql) {
    if (process.browser && mql.matches) {
      document.body.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
      this.setState({ theme: "dark" })
    } else if (process.browser) {
      document.body.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      this.setState({ theme: "light" })
    }
  }
  toggleThemeAttr() {
    if (process.browser && this.state.theme === "light") {
      document.body.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
      this.setState({ theme: "dark" })
    } else if (process.browser && this.state.theme === "dark") {
      document.body.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      this.setState({ theme: "light" })
    }
  }
  render() {
    return (
      <button
        className={
          this.props.checkHome
            ? [
                "button",
                "is-plain",
                "is-bg-body",
                "is-home",
                "is-circle",
                "is-xs"
              ].join(" ")
            : ["button", "is-plain", "is-bg-body", "is-circle", "is-xs"].join(
                " "
              )
        }
        type="button"
        onClick={this.toggleThemeAttr}
      >
        {(() => {
          if (this.state.theme === "light") {
            return (
              <svg
                className="icon is-moon is-fill-none-stroke is-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )
          } else if (this.state.theme === "dark") {
            return (
              <svg
                className="icon is-sun is-fill-none-stroke is-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )
          }
        })()}
      </button>
    )
  }
}

export default ToggleTheme
