import DemoImageFeature1 from "~/assets/images/demo-image-feature-1"

export default () => {
  return (
    <section className="section is-feature is-padding-horizontal-safe is-wide-lg">
      <div className="inner is-padding-horizontal-md is-space">
        <div className="grid is-middle is-center is-gap-xl">
          <div className="column">
            <DemoImageFeature1 />
          </div>
          <div className="column">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">
                <span className="text">必要なものを食べておく</span>
              </h2>
              <p className="text is-line-height-lg is-sm">
                Web制作は小技の積み重ねなので、毎回1から作っていたら辛いですよね。MUSUBiiにはリセットCSS・ボタン・グリッドなど利用頻度の高い汎用スタイルが詰まっています。まずはMUSUBiiをほおばってからWeb制作を始めてみましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
