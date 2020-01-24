import DemoImageFeature2 from "~/assets/images/demo-image-feature-2"

export default () => {
  return (
    <section className="section is-feature is-padding-horizontal-safe is-wide-lg">
      <div className="inner is-padding-horizontal-md is-space">
        <div className="grid is-middle is-center is-gap-xl">
          <div className="column">
            <DemoImageFeature2 />
          </div>
          <div className="column">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">
                <span className="text">簡単で分かりやすい記法</span>
              </h2>
              <p className="text is-line-height-lg is-sm">
                命名規則は単純で、特定の要素に{" "}
                <code className="demo-inline-code">.is-(xxxx)</code>{" "}
                のclassを加えていくだけです。英小文字・数字・ハイフン1つで繋ぐルールなので覚えやすい。インブラウザデザイン中にスピーディな修正・追加を試すことができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
