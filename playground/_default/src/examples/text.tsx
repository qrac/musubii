import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"
import { DemoCheckbox } from "../demos/checkbox"

const weightStrings = ["normal", "strong"]
const weightNums = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const weights = [...weightStrings, ...weightNums.map((weight) => `${weight}`)]
const fonts = ["sans", "sans-en", "serif", "serif-en", "mono"]
const features = ["halt", "palt", "palt-fix"]
const trims = ["both", "start", "end"]
const lineHeights = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]
const transforms = ["italic", "delete", "capitalize", "uppercase", "lowercase"]
const textAligns = ["left", "center", "right", "justify"]
const wraps = ["nowrap", "break"]
const overflows = ["hidden", "scroll-x", "scroll-y", "ellipsis"]

export function ExampleText() {
  const [weight, setWeight] = useState<string | undefined>()
  const [font, setFont] = useState<string | undefined>()
  const [feature, setFeature] = useState<string | undefined>()
  const [trim, setTrim] = useState<string | undefined>()
  const [lineHeight, setLineHeight] = useState<string | undefined>()
  const [transform, setTransform] = useState<string | undefined>()
  const [textAlign, setTextAlign] = useState<string | undefined>()
  const [wrap, setWrap] = useState<string | undefined>()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [overflow, setOverflow] = useState<string | undefined>()
  const fontClass = font ? `is-font-${font}` : undefined
  const featureClass = feature ? `is-${feature}` : undefined
  const trimClass = trim ? `is-trim-${trim}` : undefined
  const weightClass = weight
    ? weight?.match(/\d+/)
      ? `is-weight-${weight}`
      : `is-${weight}`
    : undefined
  const lineHeightClass = lineHeight
    ? `is-line-height-${lineHeight}`
    : undefined
  const transformClass = transform ? `is-${transform}` : undefined
  const textAlignClass = textAlign ? `is-${textAlign}` : undefined
  const wrapClass = wrap ? `is-${wrap}` : undefined
  const overflowClass = `is-overflow-${overflow}`
  const modifiedClasses = clsx(
    fontClass,
    featureClass,
    trimClass,
    weightClass,
    lineHeightClass,
    transformClass,
    textAlignClass,
    wrapClass
  )
  return (
    <div className="demo-boxes">
      <div className="demo-box is-settings">
        <DemoFieldsets>
          <DemoFieldset title="weight">
            <DemoRadios
              patterns={[undefined, ...weights]}
              checkedValue={weight}
              onChange={setWeight}
            />
          </DemoFieldset>
          <DemoFieldset title="font">
            <DemoRadios
              patterns={[undefined, ...fonts]}
              checkedValue={font}
              onChange={setFont}
            />
          </DemoFieldset>
          <DemoFieldset title="feature">
            <DemoRadios
              patterns={[undefined, ...features]}
              checkedValue={feature}
              onChange={setFeature}
            />
          </DemoFieldset>
          <DemoFieldset title="trim">
            <DemoRadios
              patterns={[undefined, ...trims]}
              checkedValue={trim}
              onChange={setTrim}
            />
          </DemoFieldset>
          <DemoFieldset title="line-height">
            <DemoRadios
              patterns={[undefined, ...lineHeights]}
              checkedValue={lineHeight}
              onChange={setLineHeight}
            />
          </DemoFieldset>
          <DemoFieldset title="transform">
            <DemoRadios
              patterns={[undefined, ...transforms]}
              checkedValue={transform}
              onChange={setTransform}
            />
          </DemoFieldset>
          <DemoFieldset title="text-align">
            <DemoRadios
              patterns={[undefined, ...textAligns]}
              checkedValue={textAlign}
              onChange={setTextAlign}
            />
          </DemoFieldset>
          <DemoFieldset title="wrap">
            <DemoRadios
              patterns={[undefined, ...wraps]}
              checkedValue={wrap}
              onChange={setWrap}
            />
          </DemoFieldset>
          <DemoFieldset title="overflow">
            <DemoRadios
              patterns={[undefined, ...overflows]}
              checkedValue={overflow}
              onChange={setOverflow}
            />
          </DemoFieldset>
          <DemoFieldset title="other">
            <DemoCheckbox
              label="disabled"
              checkedValue={isDisabled}
              onChange={setIsDisabled}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <ExampleTextDark
        modifiedClasses={modifiedClasses}
        isDisabled={isDisabled}
      />
      <ExampleTextLight
        modifiedClasses={modifiedClasses}
        isDisabled={isDisabled}
      />
      <ExampleTextColor
        modifiedClasses={modifiedClasses}
        isDisabled={isDisabled}
      />
      <ExampleTextVercial modifiedClasses={modifiedClasses} />
      <ExampleTextLink modifiedClasses={modifiedClasses} />
      <ExampleTextLong
        modifiedClasses={modifiedClasses}
        overflowClass={overflowClass}
      />
      <ExampleTextBlockquote />
      <ExampleTextCode />
    </div>
  )
}

function ExampleTextDark({
  modifiedClasses,
  isDisabled,
}: {
  modifiedClasses?: string
  isDisabled?: boolean
}) {
  return (
    <>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className={clsx(
                "text",
                index === 0 && "is-dark",
                index !== 0 && `is-dark-${index}`
              )}
              aria-disabled={isDisabled ? true : undefined}
            >
              ダーク
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

function ExampleTextLight({
  modifiedClasses,
  isDisabled,
}: {
  modifiedClasses?: string
  isDisabled?: boolean
}) {
  return (
    <>
      <div className="demo-box" style={{ background: "#0f172a" }}>
        <p className={clsx("text", modifiedClasses)}>
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className={clsx(
                "text",
                index === 0 && "is-light",
                index !== 0 && `is-light-${index}`
              )}
              aria-disabled={isDisabled ? true : undefined}
            >
              ライト
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

function ExampleTextColor({
  modifiedClasses,
  isDisabled,
}: {
  modifiedClasses?: string
  isDisabled?: boolean
}) {
  return (
    <>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          <span
            className="text is-tx-1"
            aria-disabled={isDisabled ? true : undefined}
          >
            テキスト1
          </span>
          <span
            className="text is-tx-2"
            aria-disabled={isDisabled ? true : undefined}
          >
            テキスト2
          </span>
          <span
            className="text is-tx-3"
            aria-disabled={isDisabled ? true : undefined}
          >
            テキスト3
          </span>
          <span
            className="text is-lk"
            aria-disabled={isDisabled ? true : undefined}
          >
            リンク
          </span>
          <span
            className="text is-lk-tx"
            aria-disabled={isDisabled ? true : undefined}
            style={{ background: "var(--theme-lk)" }}
          >
            リンクテキスト
          </span>
        </p>
      </div>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          <span className="text" aria-disabled={isDisabled ? true : undefined}>
            基本です
          </span>
          <span
            className="text is-primary"
            aria-disabled={isDisabled ? true : undefined}
          >
            重要です
          </span>
          <span
            className="text is-secondary"
            aria-disabled={isDisabled ? true : undefined}
          >
            重要かも
          </span>
          <span
            className="text is-info"
            aria-disabled={isDisabled ? true : undefined}
          >
            情報あり
          </span>
          <span
            className="text is-success"
            aria-disabled={isDisabled ? true : undefined}
          >
            成功した
          </span>
          <span
            className="text is-warning"
            aria-disabled={isDisabled ? true : undefined}
          >
            注意する
          </span>
          <span
            className="text is-danger"
            aria-disabled={isDisabled ? true : undefined}
          >
            禁止する
          </span>
        </p>
      </div>
    </>
  )
}

function ExampleTextVercial({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          <span className="text">基本の文字</span>
          <span className="text is-baseline">ベースライン</span>
          <span className="text is-top">トップ</span>
          <span className="text is-middle">ミドル</span>
          <span className="text is-bottom">ボトム</span>
          <span className="text is-xl">大きい文字</span>
        </p>
      </div>
    </>
  )
}

function ExampleTextLink({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          <a href="" className="text is-primary is-link">
            リンク
          </a>
          <a href="" className="text is-primary is-link-reverse">
            リバース
          </a>
          <a href="" className="text is-primary is-link" aria-disabled>
            リンク
          </a>
          <a href="" className="text is-primary is-link-reverse" aria-disabled>
            リバース
          </a>
        </p>
      </div>
    </>
  )
}

function ExampleTextLong({
  modifiedClasses,
  overflowClass,
}: {
  modifiedClasses?: string
  overflowClass?: string
}) {
  const overflowHeight = () => {
    switch (overflowClass) {
      case "is-overflow-hidden":
      case "is-overflow-scroll-y":
        return "3rem"
      case "is-overflow-scroll-x":
        return "1.5em"
      default:
        return undefined
    }
  }
  return (
    <>
      <div className="demo-box">
        <p
          className={clsx(
            "text is-strong is-lg",
            modifiedClasses,
            overflowClass
          )}
        >
          「日本語の見出し」を、調整（font-feature-settings）する
        </p>
      </div>
      <div className="demo-box">
        <p
          className={clsx("text", modifiedClasses, overflowClass)}
          style={{ height: overflowHeight() }}
        >
          山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。
        </p>
      </div>
      <div className="demo-box">
        <p
          className={clsx("text", modifiedClasses, overflowClass)}
          style={{ height: overflowHeight() }}
        >
          While climbing the mountain path, I thought like this. If you work on
          Ji, the corner will stand. It will be washed away if you let your
          heart stick. It's cramped if you can do it. Anyway, the world of
          people is hard to live. If you have difficulty living, you will want
          to move to a cheap place. When you realize that it is difficult to
          live wherever you go, poetry is born and you can paint.
        </p>
      </div>
    </>
  )
}

function ExampleTextBlockquote() {
  return (
    <div className="demo-box">
      <blockquote className="blockquote">
        引用の「blockquote」を使う場合。border-left と background-color
        を用いた装飾。
      </blockquote>
    </div>
  )
}

function ExampleTextCode() {
  return (
    <>
      <div className="demo-box">
        <p>
          テキストの途中に<code className="code">code</code>を表示させる。
        </p>
      </div>
      <div className="demo-box">
        <pre className="pre">
          <code className="code">{".my-css { color: red; }"}</code>
        </pre>
      </div>
    </>
  )
}
