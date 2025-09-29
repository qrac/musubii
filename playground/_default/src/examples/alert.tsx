import { useState } from "react"
import clsx from "clsx"
import {
  FiThumbsUp,
  FiAlertCircle,
  FiCheck,
  FiAlertTriangle,
  FiSlash,
} from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const tails = [
  "top-left",
  "top-center",
  "top-right",
  "right-top",
  "right-middle",
  "right-bottom",
  "bottom-left",
  "bottom-center",
  "bottom-right",
  "left-top",
  "left-middle",
  "left-bottom",
]

export function ExampleAlert() {
  const [tail, setTail] = useState<string | undefined>()
  const tailClass = tail ? `is-tail-${tail}` : undefined
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="tail">
            <DemoRadios
              patterns={[undefined, ...tails]}
              checkedValue={tail}
              onChange={setTail}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <div className="demo-box">
        <div className="demo-alerts">
          <div className={clsx("alert", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiThumbsUp className="icon is-lg" />
              <span className="text">
                WordPressプラグインの設定へようこそ！
              </span>
            </div>
          </div>
          <div className={clsx("alert is-primary", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiThumbsUp className="icon is-lg is-primary" />
              <span className="text is-primary">
                WordPressプラグインの設定へようこそ！
              </span>
            </div>
          </div>
          <div className={clsx("alert is-secondary", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiThumbsUp className="icon is-lg is-secondary" />
              <span className="text is-secondary">
                WordPressプラグインの設定へようこそ！
              </span>
            </div>
          </div>
          <div className={clsx("alert is-info", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiAlertCircle className="icon is-lg is-info" />
              <span className="text is-info">
                プラグインに関するチュートリアルはこちら。
              </span>
            </div>
          </div>
          <div className={clsx("alert is-success", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiCheck className="icon is-lg is-success" />
              <span className="text is-success">
                プラグインの設定は自動的に保存されました。
              </span>
            </div>
          </div>
          <div className={clsx("alert is-warning", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiAlertTriangle className="icon is-lg is-warning" />
              <span className="text is-warning">
                プラグインはアクティベートされていません。
              </span>
            </div>
          </div>
          <div className={clsx("alert is-danger", tailClass)}>
            <div className="box is-flex is-middle is-gap-xs">
              <FiSlash className="icon is-lg is-danger" />
              <span className="text is-danger">
                プラグインは削除されました。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
