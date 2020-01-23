import DemoImageFeature4 from "~/assets/images/demo-image-feature-4"

export default () => {
  return (
    <section className="section is-feature is-padding-horizontal-safe is-wide-lg">
      <div className="inner is-padding-horizontal-md is-space">
        <div className="grid is-middle is-center is-gap-xl">
          <div className="column">
            <DemoImageFeature4 />
          </div>
          <div className="column">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">
                <span className="text">日本語サイト向けに最適化</span>
              </h2>
              <p className="text is-line-height-lg is-sm">
                MUSUBiiは開発者であるデザイナーのクラクが年間30以上の日本語サイトに組み込み検証を続けた実用性重視のCSSフレームワークです。実務に最低限必要なCSSを厳選するとともにブラウザ間のバグフィックスにも努めています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
