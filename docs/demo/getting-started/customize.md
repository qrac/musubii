# Customize

MUSUBii は、ほぼすべての項目を SCSS 変数でカスタマイズできます。また、必要な CSS だけを抽出して使うことも可能。不要なオーバーライドを行わず、制作するプロジェクトに合った無駄のないマークアップを始めましょう。

## npm

まずは npm で MUSUBii と必要なライブラリをインストール。すべて自作です。

* [Sass Dashi](https://github.com/qrac/sass-dashi)：SCSS 変数と mixin のパック ※必須
* [MOFTONE](https://qrac.github.io/moftone/)：[マテリアルデザインカラー](https://qrac.github.io/mdtone/)を淡い色合いに変える調整変数
* [Shitaji.CSS](https://qrac.github.io/shitajicss/)：リセット CSS

```bash
npm i -D musubii sass-dashi moftone shitajicss
```

## gulp

gulp の場合は、さらにライブラリを追加。

* [node-sass-package-importer](https://www.npmjs.com/package/node-sass-package-importer)

```bash
npm i -D node-sass-package-importer
```

`gulpfile.js` に追記。これによって、コンパイル時に簡単なパスで `node_modules` の SCSS を取り込めるようになります。

```js
const packageImporter = require("node-sass-package-importer");

// SCSS > CSS
gulp.task("scss", () => {
  return gulp
    .src(paths.src_scss + "**/*.scss")
    .pipe(
      sass({
        importer: packageImporter({
          extensions: [".scss", ".css"]
        })
      })
    )
    .pipe(gulp.dest(paths.dist_css));
});
```

## Import

SCSS ファイルまたは単一 Vue コンポーネントなどで MUSUBii の必要な SCSS ファイルを読み込みます。`~` は `node_modules` へのパスで、どのディレクトリからでも簡単な記述でインポートが可能。

```scss
@import "~moftone/src/scss/tone/_moftone.scss";
@import "~sass-dashi/src/scss/_dashi.scss"; // ※必須
@import "~musubii/src/scss/config/_variable.scss"; // ※必須

@import "~shitajicss/src/scss/_shitaji.scss";

@import "~musubii/src/scss/base/_global.scss";
@import "~musubii/src/scss/layout/_section.scss";
@import "~musubii/src/scss/layout/_grid.scss";
@import "~musubii/src/scss/layout/_space.scss";
@import "~musubii/src/scss/module/_heading.scss";
@import "~musubii/src/scss/module/_text.scss";
@import "~musubii/src/scss/module/_button.scss";
@import "~musubii/src/scss/module/_list.scss";
@import "~musubii/src/scss/module/_table.scss";
@import "~musubii/src/scss/module/_form.scss";
@import "~musubii/src/scss/module/_icon.scss";
@import "~musubii/src/scss/module/_alert.scss";
@import "~musubii/src/scss/module/_wysiwyg.scss";
@import "~musubii/src/scss/utility/_size.scss";
@import "~musubii/src/scss/utility/_flex.scss";
@import "~musubii/src/scss/utility/_deco.scss";
@import "~musubii/src/scss/utility/_display.scss";
@import "~musubii/src/scss/utility/_clearfix.scss";
```

## Override

SCSS は先に同名の変数を宣言することで `!default` の付与された変数を宣言させない仕様です。よって、読み込んだ変数ファイルよりも前に変数を記述することで、無駄な CSS 出力をせずに変更できます。また、カスタマイズ用の変数も 1 つのファイルにすると管理しやすくなります。

```scss
// プライマリーカラーをオレンジに変えたい場合
$primary: #fb8c00;

// カスタマイズ用の変数を1ファイルで管理する場合
@import "config/_customize.scss";

// 読み込む変数↓より前に記述する↑
@import "~moftone/src/scss/tone/_moftone.scss";
@import "~sass-dashi/src/scss/_dashi.scss";
@import "~musubii/src/scss/config/_variable.scss";
```

## Break Point

ブレイクポイントの変更ができる変数。メディアクエリの値を一括で変更することが可能。

| Variable                | Description        | Default  |
| ----------------------- | ------------------ | -------- |
| `$screen-width-mobile`  | モバイルサイズ     | `0px`    |
| `$screen-width-fablet`  | ファブレットサイズ | `576px`  |
| `$screen-width-tablet`  | タブレットサイズ   | `768px`  |
| `$screen-width-desktop` | デスクトップサイズ | `992px`  |
| `$screen-width-wide`    | ワイドサイズ       | `1200px` |

## Theme Color

テーマカラーの変更ができる変数。役割に応じたボタンやリンク色を一括で変更可能。`Default` で設定されている変数は、ライブラリを使った場合に [MOFTONE](https://qrac.github.io/moftone/) または [iOSTONE](https://qrac.github.io/iostone/)、使わなかった場合に [MDTONE](https://qrac.github.io/mdtone/) の色を参照します。

| Variable   | Description | Default       |
| ---------- | ----------- | ------------- |
| `$primary` | 基本色      | `$cyan-500`   |
| `$info`    | 案内色      | `$blue-500`   |
| `$success` | 決定色      | `$green-a700` |
| `$warning` | 警告色      | `$orange-600` |
| `$danger`  | 危険色      | `$red-500`    |

## Size

XXL〜XXS までのサイズ設定を変更できる変数。拡大率すべてに影響します。

| Variable         | Description | Default |
| ---------------- | ----------- | ------- |
| `$font-size-xxl` | XXL         | `200%`  |
| `$font-size-xl`  | XL          | `150%`  |
| `$font-size-lg`  | Large       | `125%`  |
| `$font-size-md`  | Medium      | `100%`  |
| `$font-size-sm`  | Small       | `87.5%` |
| `$font-size-xs`  | XS          | `75%`   |
| `$font-size-xxs` | XXS         | `62.5%` |

## Weight

フォントの太さを変更できる変数。

| Variable              | Description | Default |
| --------------------- | ----------- | ------- |
| `$font-weight-normal` | Normal      | `400`   |
| `$font-weight-strong` | Strong      | `700`   |
| `$font-weight-100`    | Weight 100  | `100`   |
| `$font-weight-200`    | Weight 200  | `200`   |
| `$font-weight-300`    | Weight 300  | `300`   |
| `$font-weight-400`    | Weight 400  | `400`   |
| `$font-weight-500`    | Weight 500  | `500`   |
| `$font-weight-600`    | Weight 600  | `600`   |
| `$font-weight-700`    | Weight 700  | `700`   |
| `$font-weight-800`    | Weight 800  | `800`   |
| `$font-weight-900`    | Weight 900  | `900`   |

## Font Family

フォントファミリーを変更できる変数。

| Variable      | Description | Default                                                                                                      |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `$font-sans`  | ゴシック体  | `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans Japanese", Meiryo, "Yu Gothic Medium", sans-serif` |
| `$font-serif` | 明朝体      | `"Hiragino Mincho ProN", "Noto Serif Japanese", "Yu Mincho", YuMincho, serif`                                |
| `$font-mono`  | コード用    | `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", Meiryo, monospace, serif`                        |

## Global

全体に影響する変数。

| Variable            | Description        | Default      |
| ------------------- | ------------------ | ------------ |
| `$body-text-color`  | テキストの色       | `$dark-2`    |
| `$body-font-family` | フォントファミリー | `$font-sans` |
| `$body-line-height` | 行間               | `1.5`        |

## Section

`.section` 直下の `.inner` 類を調整する変数。

| Variable                        | Description                     | Default  |
| ------------------------------- | ------------------------------- | -------- |
| `section-inner-width-fablet`    | `.inner` サイズ：ファブレット時 | `540px`  |
| `section-inner-width-tablet`    | `.inner` サイズ：タブレット時   | `720px`  |
| `section-inner-width-desktop`   | `.inner` サイズ：デスクトップ時 | `960px`  |
| `section-inner-width-wide`      | `.inner` サイズ：ワイド時       | `1140px` |
| `section-inner-padding`         | `.inner` の `padding`           | `0 16px` |
| `section-inner-vw-width-fablet` | `.inner-vw` のサイズ            | `90vw`   |
| `section-inner-vw-padding`      | `.inner-vw` の `padding`        | `0 1em`  |
| `section-inner-soft-padding`    | `.inner-soft` の `padding`      | `0 1em`  |

## Space

`.is-space` 直下のマージンを調整する変数。

| Variable                | Description                                 | Default |
| ----------------------- | ------------------------------------------- | ------- |
| `$space-margin-default` | 基本のマージン                              | `1em`   |
| `$space-margin-heading` | `.heading` のマージン                       | `1.5em` |
| `$space-margin-groups`  | `.groups` のマージン                        | `3em`   |
| `$space-margin-field`   | `.heading` + `.field` + `.texts` のマージン | `0.5em` |

## Grid

グリッドの分割数や溝を調整する変数。

| Variable            | Description | Default |
| ------------------- | ----------- | ------- |
| `$grid-split`       | 分割数      | `12`    |
| `$grid-gap-default` | 溝の大きさ  | `0.5em` |

## Heading

見出し専用の変数はありません。

## Text

テキスト・リンク・引用やコードブロックを調整する変数。

| Variable                         | Description                          | Default        |
| -------------------------------- | ------------------------------------ | -------------- |
| `$texts-line-height`             | `texts` の行間                       | `1.9`          |
| `$text-link-border-bottom-width` | リンクテキスト：下線の太さ           | `1px`          |
| `$text-link-border-bottom-style` | リンクテキスト：下線のスタイル       | `solid`        |
| `$blockquote-background-color`   | 引用：背景色                         | `$grey-100`    |
| `$blockquote-border-left-width`  | 引用：左線の太さ                     | `0.5em`        |
| `$blockquote-border-left-color`  | 引用：左線の色                       | `$dark-9`      |
| `$blockquote-border-radius`      | 引用：角丸の大きさ                   | `0.125em`      |
| `$blockquote-padding`            | 引用：余白の大きさ                   | `1.5em`        |
| `$code-padding`                  | インラインコード：余白の大きさ       | `0.2em 0.5em`  |
| `$code-background-color`         | インラインコード：背景色             | `$grey-100`    |
| `$code-border-radius`            | インラインコード：角丸の大きさ       | `0.1875em`     |
| `$code-text-color`               | インラインコード：文字色             | `$indigo-500`  |
| `$code-font-size`                | インラインコード：文字サイズ         | `0.875em`      |
| `$code-font-family`              | インラインコード：フォントファミリー | `$font-mono`   |
| `$pre-background-color`          | コードブロック：背景色               | `$grey-100`    |
| `$pre-border-radius`             | コードブロック：角丸の大きさ         | `0.125em`      |
| `$pre-text-color`                | コードブロック：文字色               | `$indigo-500`  |
| `$pre-font-family`               | コードブロック：フォントファミリー   | `$font-mono`   |
| `$pre-white-space`               | コードブロック：折り返しの設定       | `pre`          |
| `$pre-code-padding`              | コードブロック：余白の大きさ         | `1.25em 1.5em` |

## Button

ボタンを調整する変数。役割毎の色はテーマカラーで変更します。

| Variable                                      | Description                    | Default                            |
| --------------------------------------------- | ------------------------------ | ---------------------------------- |
| `$btns-gap-default`                           | 複数ボタンの距離               | `0.5em`                            |
| `$btn-padding`                                | ボタン共通：余白の大きさ       | `0 1em`                            |
| `$btn-border-width`                           | ボタン共通：線の太さ           | `1px`                              |
| `$btn-border-radius`                          | ボタン共通：角丸の大きさ       | `0.1875em`                         |
| `$btn-line-height`                            | ボタン共通：ボタンの高さ       | `2.5em`                            |
| `$btn-transition`                             | ボタン共通：変化の速度         | `ease-out 0.12s`                   |
| `$btn-round-border-radius`                    | ラウンド：角丸の大きさ         | `999em`                            |
| `$btn-circle-border-radius`                   | 円型：角丸の大きさ             | `1.25em`                           |
| `$btn-floating-shadow`                        | フローティング：影             | `0 1px 3px 0 rgba(0, 0, 0, 0.24)`  |
| `$btn-floating-hover-shadow`                  | フローティング：影（ホバー）   | `0 4px 12px 0 rgba(0, 0, 0, 0.24)` |
| `$btn-plain-default-background-color`         | プレーン：背景色               | `$grey-100`                        |
| `$btn-plain-default-hover-background-color`   | プレーン：背景色（ホバー）     | `darken($grey-100, 5%)`            |
| `$btn-melt-default-hover-background-color`    | メルト：背景色（ホバー）       | `$dark-9`                          |
| `$btn-outline-default-background-color`       | アウトライン：背景色           | `$light`                           |
| `$btn-outline-default-hover-background-color` | アウトライン：背景色（ホバー） | `darken($light, 5%)`               |
| `$btn-outline-default-border-color`           | アウトライン：線の色           | `$dark-7`                          |
| `$btn-ghost-default-border-color`             | ゴースト：線の色               | `$light`                           |
| `$btn-ghost-default-text-color`               | ゴースト：文字色               | `$light`                           |
| `$btn-ghost-default-hover-background-color`   | ゴースト：背景色（ホバー）     | `$light`                           |
| `$btn-ghost-default-hover-text-color`         | ゴースト：文字色（ホバー）     | `$dark-2`                          |
| `$btn-disable-background-color`               | 非活性：背景色                 | `$grey-400`                        |
| `$btn-disable-background-color-alpha`         | 非活性：背景色（透過用）       | `$dark-6`                          |
| `$btn-disable-text-color`                     | 非活性：文字色                 | `$dark-6`                          |
| `$btn-ghost-disable-background-color`         | 非活性ゴースト：背景色         | `$light-8`                         |
| `$btn-ghost-disable-border-color`             | 非活性ゴースト：線の色         | `$light-4`                         |
| `$btn-ghost-disable-text-color`               | 非活性ゴースト：文字色         | `$light-4`                         |

## List

リストを調整する変数。

| Variable                      | Description               | Default  |
| ----------------------------- | ------------------------- | -------- |
| `$list-margin-left`           | 左のマージン              | `1.5em`  |
| `$list-item-margin-top`       | リストアイテムの距離      | `0.25em` |
| `$list-note-item-margin-left` | `.is-note` アイテムの距離 | `0.25em` |

## Table

テーブルを調整する変数。

| Variable                         | Description               | Default          |
| -------------------------------- | ------------------------- | ---------------- |
| `$table-padding`                 | マスの余白                | `0.75em 1em`     |
| `$table-background-color`        | 背景色                    | `$light`         |
| `$table-border-width`            | 線の太さ                  | `1px`            |
| `$table-border-color`            | 線の色                    | `$blue-grey-100` |
| `$table-stripe-background-color` | ストライプ時の背景色      | `$grey-100`      |
| `$table-paint-background-color`  | `.is-paint` マスの背景色  | `$cyan-500`      |
| `$table-paint-text-color`        | `.is-paint` マスの文字色  | `$light`         |
| `$table-spot-background-color`   | `.is-spot` マスの背景色   | `$yellow-200`    |
| `$table-danger-background-color` | `.is-danger` マスの背景色 | `$red-100`       |

## Form

フォームを調整する変数。

| Variable                           | Description                                | Default                                |
| ---------------------------------- | ------------------------------------------ | -------------------------------------- |
| `$field-gap-default`               | `.field` 直下要素の距離                    | `0.5em`                                |
| `$input-height`                    | インプット要素：高さ                       | `2.5em`                                |
| `$input-padding`                   | インプット要素：余白の大きさ               | `0 0.75em`                             |
| `$input-background-color`          | インプット要素：背景色                     | `$light`                               |
| `$input-border-width`              | インプット要素：線の太さ                   | `1px`                                  |
| `$input-border-color`              | インプット要素：線の色                     | `$dark-6`                              |
| `$input-border-radius`             | インプット要素：角丸の大きさ               | `2px`                                  |
| `$input-shadow`                    | インプット要素：内側の影                   | `inset 0 1px 1px rgba(0, 0, 0, 0.075)` |
| `$input-round-border-radius`       | ラウンド：角丸の大きさ                     | `999em`                                |
| `$input-disable-background-color`  | 非活性：背景色                             | `$grey-300`                            |
| `$input-disable-text-color`        | 非活性：文字色                             | `$dark-6`                              |
| `$input-readonly-background-color` | 読み取り専用：背景色                       | `$grey-200`                            |
| `$input-readonly-text-color`       | 読み取り専用：文字色                       | `$dark-2`                              |
| `$input-placeholder-color`         | プレースホルダーの色                       | `$dark-6`                              |
| `$textarea-padding`                | テキストエリア：余白の大きさ               | `calc(0.5em - 1.5px) 0.5em`            |
| `$radio-gap-default`               | ラジオ・チェックボックス：テキストとの距離 | `0.5em`                                |
| `$radio-gap-after`                 | ラジオ・チェックボックス：選択肢の距離     | `1em`                                  |
| `$select-angle-size`               | セレクトボタン：角マークのサイズ           | `0.5em`                                |
| `$select-angle-border-width`       | セレクトボタン：角マークの太さ             | `2px`                                  |
| `$select-angle-border-color`       | セレクトボタン：角マークの色               | `$dark-5`                              |

## Icon

アイコンを調整する変数。

| Variable              | Description                    | Default                                                      |
| --------------------- | ------------------------------ | ------------------------------------------------------------ |
| `$icon-class-default` | 認識される class               | `".icon, .im, .fa, .fas, .far, .fal, .fab, .material-icons"` |
| `$icon-margin-left`   | アイコンとテキストの距離       | `0.375em`                                                    |
| `$icon-fit-width`     | `.is-fit` を付与した場合の横幅 | `1em`                                                        |

## Alert

アラートを調整する変数。役割毎の色はテーマカラーと分離しています。

| Variable                          | Description        | Default                    |
| --------------------------------- | ------------------ | -------------------------- |
| `$alert-padding`                  | 余白の大きさ       | `0.675em 0.875em`          |
| `$alert-border-width`             | 線の太さ           | `1px`                      |
| `$alert-border-radius`            | 角丸の大きさ       | `2px`                      |
| `$alert-default-background-color` | デフォルト：背景色 | `$grey-100`                |
| `$alert-default-border-color`     | デフォルト：線の色 | `$grey-300`                |
| `$alert-primary-background-color` | 基本：背景色       | `lighten($cyan-100, 8%)`   |
| `$alert-primary-border-color`     | 基本：線の色       | `$cyan-200`                |
| `$alert-info-background-color`    | 案内：背景色       | `lighten($blue-100, 7%)`   |
| `$alert-info-border-color`        | 案内：線の色       | `$blue-200`                |
| `$alert-success-background-color` | 決定：背景色       | `lighten($green-a100, 7%)` |
| `$alert-success-border-color`     | 決定：線の色       | `lighten($green-a200, 3%)` |
| `$alert-warning-background-color` | 警告：背景色       | `lighten($orange-100, 5%)` |
| `$alert-warning-border-color`     | 警告：線の色       | `$orange-200`              |
| `$alert-danger-background-color`  | 危険：背景色       | `lighten($red-100, 5%)`    |
| `$alert-danger-border-color`      | 危険：線の色       | `lighten($red-a100, 5%)`   |

## WYSIWYG

WYSIWYG 出力の要素を調整する変数。

| Variable                        | Description              | Default   |
| ------------------------------- | ------------------------ | --------- |
| `$wysiwyg-heading-font-weight`  | 見出し文字の太さ         | `700`     |
| `$wysiwyg-h1-font-size`         | H1 のサイズ              | `2em`     |
| `$wysiwyg-h2-font-size`         | H2 のサイズ              | `1.5em`   |
| `$wysiwyg-h3-font-size`         | H3 のサイズ              | `1.25em`  |
| `$wysiwyg-h4-font-size`         | H4 のサイズ              | `1em`     |
| `$wysiwyg-h5-font-size`         | H5 のサイズ              | `0.875em` |
| `$wysiwyg-h6-font-size`         | H6 のサイズ              | `0.75em`  |
| `$wysiwyg-small-font-size`      | スモール文字のサイズ     | `80%`     |
| `$wysiwyg-strong-font-weight`   | ストロング文字の太さ     | `700`     |
| `$wysiwyg-table-th-font-weight` | テーブル見出し文字の太さ | `400`     |
| `$wysiwyg-hr-border-width`      | 水平罫線の太さ           | `1px`     |
| `$wysiwyg-hr-border-style`      | 水平罫線のスタイル       | `solid`   |
| `$wysiwyg-hr-border-color`      | 水平罫線の色             | `$dark-7` |
