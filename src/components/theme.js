import React from "react"

class Theme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: ""
    }
    this.toggleMedia = this.toggleMedia.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
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

    isDark.addListener(this.toggleMedia)
  }
  toggleMedia(mql) {
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
  toggleTheme() {
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
      <button className="theme-button" type="button" onClick={this.toggleTheme}>
        {(() => {
          if (this.state.theme === "light") {
            return (
              <svg
                className="theme-icon is-moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-dark-4)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )
          } else if (this.state.theme === "dark") {
            return (
              <svg
                className="theme-icon is-sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-dark-4)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <style jsx>{`
          .theme-button {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            background: none;
            border: none;
            border-radius: 18px;
            transition: ease-out 0.12s;
          }
          .theme-button:hover {
            opacity: 0.75;
          }
          .theme-button:focus {
            box-shadow: 0 0 0 4px var(--focus-alpha);
            outline: none;
          }
          .theme-icon {
            flex: none;
            width: 20px;
            height: 20px;
          }
        `}</style>
      </button>
    )
  }
}

export default Theme
