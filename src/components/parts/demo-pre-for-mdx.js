import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import hljs from "highlight.js/lib/highlight"

//hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"))
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("js", require("highlight.js/lib/languages/javascript"))
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"))

class DemoPreForMdx extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false
    }
  }
  copyTimeout() {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 1000)
  }
  render() {
    const language = (() => {
      if (this.props.children.props.className) {
        return this.props.children.props.className.split("-")[1]
      }
    })()
    const copyCode = (() => {
      if (this.props.children.props.children) {
        return this.props.children.props.children
      }
    })()
    const viewCode = (() => {
      if (language && copyCode) {
        return hljs.highlight(language, copyCode).value
      } else if (copyCode) {
        return copyCode
      }
    })()
    return (
      <div className="demo-pre-wrap">
        <CopyToClipboard text={copyCode} onCopy={() => this.copyTimeout()}>
          <button className="demo-pre-copy-button">
            {this.state.copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
        <pre className="demo-pre">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: viewCode }}
          ></code>
        </pre>
      </div>
    )
  }
}

export default DemoPreForMdx
