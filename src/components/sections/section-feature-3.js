import Link from "next/link"

import DemoImageFeature3 from "~/assets/images/demo-image-feature-3"

export default () => {
  return (
    <section className="section is-feature is-padding-horizontal-safe is-wide-lg">
      <div className="inner is-padding-horizontal-md is-space">
        <div className="grid is-middle is-center is-gap-xl">
          <div className="column">
            <DemoImageFeature3 />
          </div>
          <div className="column">
            <div className="box is-feature-texts is-space-md">
              <h2 className="text is-xl">
                <span className="text is-margin-right-xs">
                  ダークモード対応
                </span>
                <span className="badge is-plain is-info is-position-top-fix is-xxs">
                  <span className="text is-strong">NEW</span>
                </span>
              </h2>
              <p className="text is-line-height-lg is-sm">
                v7以降は
                <Link href="/getting-started/using-with-scss">
                  <a className="text is-link is-primary">SCSS</a>
                </Link>
                のカスタマイズ機能を大幅拡張しました。変数でCSS
                Variablesを有効化すると簡単に
                <Link href="/getting-started/dark-mode">
                  <a className="text is-link is-primary">ダークモード</a>
                </Link>
                対応ができます。その他、セレクタ名を変更したり、mixinだけ利用する使い方も可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
