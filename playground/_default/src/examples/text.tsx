import { useState } from "react"
import clsx from "clsx"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoRadios } from "../demos/radio"

const weightStrings = ["normal", "strong"]
const weightNums = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const weights = [...weightStrings, ...weightNums.map((weight) => `${weight}`)]
const lineHeights = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]
const transforms = ["italic", "delete", "capitalize", "uppercase", "lowercase"]
const textAligns = ["left", "center", "right", "justify"]
const wraps = ["nowrap", "break"]
const overflows = ["hidden", "scroll-x", "scroll-y", "ellipsis"]

export function ExampleText() {
  const [weight, setWeight] = useState<string | undefined>()
  const [lineHeight, setLineHeight] = useState<string | undefined>()
  const [transform, setTransform] = useState<string | undefined>()
  const [textAlign, setTextAlign] = useState<string | undefined>()
  const [wrap, setWrap] = useState<string | undefined>()
  const [overflow, setOverflow] = useState<string | undefined>()
  const weightClass = weight
    ? weight?.match(/\d+/)
      ? `is-weight-${weight}`
      : `is-${weight}`
    : undefined
  const lineHeightClass = lineHeight
    ? `is-line-height-${lineHeight}`
    : undefined
  const transformClass = `is-${transform}`
  const textAlignClass = `is-${textAlign}`
  const wrapClass = `is-${wrap}`
  const overflowClass = `is-overflow-${overflow}`
  const modifiedClasses = clsx(
    weightClass,
    lineHeightClass,
    transformClass,
    textAlignClass,
    wrapClass
  )
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="weight">
            <DemoRadios
              patterns={[undefined, ...weights]}
              checkedValue={weight}
              onChange={setWeight}
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
        </DemoFieldsets>
      </div>
      <ExampleTextDark modifiedClasses={modifiedClasses} />
      <ExampleTextLight modifiedClasses={modifiedClasses} />
      <ExampleTextColor modifiedClasses={modifiedClasses} />
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

function ExampleTextDark({ modifiedClasses }: { modifiedClasses?: string }) {
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
            >
              ダーク
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

function ExampleTextLight({ modifiedClasses }: { modifiedClasses?: string }) {
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
            >
              ライト
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

function ExampleTextColor({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box">
        <p className={clsx("text", modifiedClasses)}>
          <span className="text">基本です</span>
          <span className="text is-primary">重要です</span>
          <span className="text is-secondary">重要かも</span>
          <span className="text is-info">情報あり</span>
          <span className="text is-success">成功した</span>
          <span className="text is-warning">注意する</span>
          <span className="text is-danger">禁止する</span>
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
