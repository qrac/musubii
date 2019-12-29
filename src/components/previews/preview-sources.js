import DemoLink from "~/components/parts/demo-link"

import pkg from "../../../package.json"
import pjt from "../../../project.json"

export default ({ title, docsPath, scssPath }) => {
  const docsUrl = pkg.repository + "/tree/master/src/pages/" + docsPath + ".mdx"
  const scssUrl = pkg.repository + "/tree/master/src/scss/" + scssPath + ".scss"
  return (
    <div className="demo-box is-preview">
      <div className="demo-box is-line">
        <ul className="demo-list is-disc">
          {(() => {
            if (docsPath) {
              return (
                <li className="demo-item">
                  <span>Document: </span>
                  <DemoLink href={docsUrl}>
                    {title} / {pjt.site.title} - GitHub Repository Source (MDX)
                  </DemoLink>
                </li>
              )
            }
          })()}
          {(() => {
            if (scssPath) {
              return (
                <li className="demo-item">
                  <span>SCSS: </span>
                  <DemoLink href={scssUrl}>
                    {title} / {pjt.site.title} - GitHub Repository Source (SCSS)
                  </DemoLink>
                </li>
              )
            }
          })()}
        </ul>
      </div>
    </div>
  )
}
