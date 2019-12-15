import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import hljs from "highlight.js/lib/highlight"

hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("js", require("highlight.js/lib/languages/javascript"))
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"))

class DemoPre extends React.Component {
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
    const language = this.props.children.props.className.split("-")[1]
    const highlightedCode = hljs.highlight(
      language,
      this.props.children.props.children
    ).value
    return (
      <div className="demo-pre-wrap">
        <div className="demo-pre-widget">
          <CopyToClipboard
            text={this.props.children.props.children}
            onCopy={() => this.copyTimeout()}
          >
            <button className="button is-plain is-xs">
              {this.state.copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
        <pre className="demo-pre">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    )
  }
}

export default DemoPre
