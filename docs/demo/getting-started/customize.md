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

## Replace

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

| Variable            | Description              | Default      |
| ------------------- | ------------------------ | ------------ |
| `$body-text-color`  | 全体のテキストカラー     | `$dark-2`    |
| `$body-font-family` | 全体のフォントファミリー | `$font-sans` |
| `$body-line-height` | 全体の行間               | `1.5`        |

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
