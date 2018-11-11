# MUSUBii

## Site

- https://musubii.qranoko.jp

## About

_「腹が減ってはコードが書けぬ」_

Web デザインの腹ごなしに、HTML/CSS フレームワーク「MUSUBii（むすびー）」をどうぞ。MUSUBii は、日本語サイトのデザイン・コーディングを元気づけます。

- OOCSS を応用したラフな設計
- 日本語フォントの利用を想定
- JavaScript 未使用

## Detail

### Markup

要素 `.(xxxx)` 1 つに対して、状態 `.is-(xxxx)` を複数追加してスタイリングするのが基本です。また、すべてのクラス名は英小文字・数字・ハイフン 1 つで構成されています。

### Layers

CSS のレイヤーは主に 4 つに分類されています。

- _Base_ … リセット CSS などの下地
- _Layout_ … 余白・マージン・グリッドシステム
- _Module_ … ボタン・テキスト・リスト・見出しなど
- _Utility_ … 調整用モディファイア

### RWD

5 つの画面サイズで可変できるレスポンシブウェブデザインになっています。

- _Mobile_ … ~ 575px
- _Fablet_ … 576px ~ 767px
- _Tablet_ … 768px ~ 991px
- _Desktop_ … 992px ~ 1199px
- _Wide_ … 1200px ~

## Use

### Download

ファイルをダウンロード後、CSS ファイル `musubii.min.css` を読み込んでお使いください。

```html
<link rel="stylesheet" href="css/musubii.min.css">
```

### [CDN](https://www.jsdelivr.com/package/npm/musubii)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/musubii@6.6.0/docs/css/musubii.min.css">
```

### [npm](https://www.npmjs.com/package/musubii)

```
npm install musubii
```

## Support

日本で多く使われているブラウザを基準にバグフィックスを行なっています。

| Chrome | Firefox | IE  |  Ege   | Safari(Mac) |
| :----: | :-----: | :-: | :----: | :---------: |
| Newest | Newest  | 11~ | Newest |   Newest    |

| Safari(iOS) | Chrome(Android) | Browser(Android) |
| :---------: | :-------------: | :--------------: |
|   Newest    |     Newest      |       4.4~       |

## Develop

- MacBook Pro: 13-inch 2016 No-touchbar
- OS: macOS High Sierra 10.13.6
- Node.js: v10.9.0

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
