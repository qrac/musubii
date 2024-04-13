import svgFeature1 from "../../assets/images/feature-1.svg"
import svgFeature2 from "../../assets/images/feature-2.svg"
import svgFeature3 from "../../assets/images/feature-3.svg"
import svgFeature4 from "../../assets/images/feature-4.svg"

export function Features() {
  return (
    <>
      <FeatureAbout />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
    </>
  )
}

export function FeatureAbout() {
  return (
    <section className="section is-feature wide:is-lg">
      <div className="inner is-px-xl">
        <div className="box is-space-md">
          <h2 className="text is-primary is-strong is-center is-lg fablet:is-xl tablet:is-xxl is-indent-half">
            腹が減ってはコードが書けぬ！
          </h2>
          <p className="text is-auto-phrase is-line-height-lg is-center is-sm">
            ウェブ制作の腹ごなしに、CSSフレームワークMUSUBii（むすびー）をどうぞ。
            <br />
            MUSUBiiは、日本語サイトのデザイン・コーディングを元気づけます。
          </p>
        </div>
      </div>
    </section>
  )
}

export function Feature1() {
  return (
    <section className="section is-feature wide:is-lg">
      <div className="inner is-px-xl">
        <div className="grid is-flex is-center is-middle is-gap-xl">
          <div className="column is-flex-full tablet:is-flex-4">
            <img
              src={svgFeature1}
              width={528}
              height={418}
              className="illustration"
              alt="Feature 1"
            />
          </div>
          <div className="column is-flex-full tablet:is-flex-6 ">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">必要なものを食べておく</h2>
              <p className="text is-auto-phrase is-line-height-lg is-sm">
                ウェブ制作は小技の積み重ねなので、毎回1から作っていたら辛いですよね。MUSUBiiにはボタン・フォーム・グリッドなど利用頻度の高い汎用スタイルが詰まっています。まずはMUSUBiiをほおばってウェブ制作を始めてみましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Feature2() {
  return (
    <section className="section is-feature wide:is-lg">
      <div className="inner is-px-xl">
        <div className="grid is-flex is-center is-middle is-reverse is-gap-xl">
          <div className="column is-flex-full tablet:is-flex-4">
            <img
              src={svgFeature2}
              width={528}
              height={418}
              className="illustration"
              alt="Feature 2"
            />
          </div>
          <div className="column is-flex-full tablet:is-flex-6 ">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">簡単で分かりやすい記法</h2>
              <p className="text is-auto-phrase is-line-height-lg is-sm">
                命名規則は単純で、特定の要素に{" "}
                <code className="code">.is-(xxxx)</code>{" "}
                のclassを加えていくだけです。英小文字・数字・ハイフン1つで繋ぐルールなので覚えやすい。インブラウザデザイン中にスピーディな修正・追加を試すことができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Feature3() {
  return (
    <section className="section is-feature wide:is-lg">
      <div className="inner is-px-xl">
        <div className="grid is-flex is-center is-middle is-gap-xl">
          <div className="column is-flex-full tablet:is-flex-4">
            <img
              src={svgFeature3}
              width={528}
              height={418}
              className="illustration"
              alt="Feature 3"
            />
          </div>
          <div className="column is-flex-full tablet:is-flex-6 ">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">テーマカラー切り替え</h2>
              <p className="text is-auto-phrase is-line-height-lg is-sm">
                CSS
                Variablesでダークモードに対応したテーマカラーを使用できます。また、MUSUBiiはv8でTailwind
                CSSのカラーパレットを採用したため、v7以前の色を再現するレガシーテーマも付属しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Feature4() {
  return (
    <section className="section is-feature wide:is-lg">
      <div className="inner is-px-xl">
        <div className="grid is-flex is-center is-middle is-reverse is-gap-xl">
          <div className="column is-flex-full tablet:is-flex-4">
            <img
              src={svgFeature4}
              width={528}
              height={418}
              className="illustration"
              alt="Feature 4"
            />
          </div>
          <div className="column is-flex-full tablet:is-flex-6 ">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">日本語サイト向けに最適化</h2>
              <p className="text is-auto-phrase is-line-height-lg is-sm">
                MUSUBiiは開発者であるデザイナーのクラクが年間30以上の日本語サイトに組み込み検証を続けた実用性重視のCSSフレームワークです。実務に最低限必要なCSSを厳選するとともにブラウザ間のバグフィックスにも努めています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
