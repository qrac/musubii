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

ブレイクポイントの変更ができる変数。メディアクエリの mixin で用いている値も一括で変更することが可能。

| Variable                | Description        | Default |
| ----------------------- | ------------------ | ------- |
| `$screen-width-mobile`  | モバイルサイズ     | 0px     |
| `$screen-width-fablet`  | ファブレットサイズ | 576px   |
| `$screen-width-tablet`  | タブレットサイズ   | 768px   |
| `$screen-width-desktop` | デスクトップサイズ | 992px   |
| `$screen-width-wide`    | ワイドサイズ       | 1200px  |

## Theme Color

テーマカラーの変更ができる変数。役割に応じたボタンやリンク色を一括で変更可能。

| Variable   | Description              | Default     |
| ---------- | ------------------------ | ----------- |
| `$primary` | プライマリーカラー       | $cyan-500   |
| `$info`    | インフォメーションカラー | $blue-500   |
| `$success` | サクセスカラー           | $green-a700 |
| `$warning` | 警告色                   | $orange-600 |
| `$danger`  | 危険色                   | $red-500    |
