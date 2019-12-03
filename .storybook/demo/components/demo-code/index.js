//----------------------------------------------------
// Demo Code
//----------------------------------------------------

import React from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import hljs from "highlight.js/lib/highlight"
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))

import "./index.scss"

class DemoCode extends React.Component {
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
    const highlightedCode = hljs.highlight(this.props.language, this.props.code)
      .value
    return (
      <div className="demo-pre-wrap">
        <pre className="demo-pre">
          <code
            className="demo-code hljs"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
        <CopyToClipboard
          text={this.props.code}
          onCopy={() => this.copyTimeout()}
        >
          <button className="demo-code-copy-button">
            {this.state.copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    )
  }
}

export default DemoCode
