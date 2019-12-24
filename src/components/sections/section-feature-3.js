import DemoImageFeature3 from "~/assets/images/demo-image-feature-3"

export default () => {
  return (
    <section className="section is-feature is-wide-lg">
      <div className="inner is-padding-right-left-md is-space">
        <div className="grid is-middle is-center is-gap-xl">
          <div className="column">
            <DemoImageFeature3 />
          </div>
          <div className="column">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">
                <span className="text is-margin-right-xs">
                  SCSSでダークモード対応
                </span>
                <span className="badge is-plain is-info is-position-top-fix is-xxs">
                  <span className="text is-strong">NEW</span>
                </span>
              </h2>
              <p className="text is-line-height-lg is-sm">
                v7以降はSCSSのカスタマイズ機能を大幅拡張しました。変数でCSS
                Variablesを有効化すると簡単にダークモード対応ができます。その他、セレクタ名を変更したり、mixinだけ利用する使い方も可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
