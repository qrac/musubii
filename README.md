# MUSUBii

## Demo & Document

- [Demo Page][link-demo-1]

## About

*「腹が減ってはコードが書けぬ」*

Webデザインの腹ごなしに、HTML/CSSフレームワーク「MUSUBii（むすびー）」をどうぞ。MUSUBiiは、日本語サイトのデザイン・コーディングを元気づけます。

- OOCSSを応用したラフな設計
- 日本語フォントの利用を想定
- Javascript 未使用

## Install

### Download

ファイルをダウンロード後、CSSファイル `musubii.min.css` を読み込んでお使いください。

```html
<link rel="stylesheet" href="css/musubii.min.css">
```

```pug
link(rel="stylesheet" href="css/musubii.min.css")
```

### npm

npmをお使いの場合は、コマンドでインストールが可能です。

```
npm install musubii
```

### CDN([jsDelivr][link-jsdelivr])

CDN配信サービスjsDelivrを使用できます。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/musubii/2.0.0/css/musubii.min.css">
```

```pug
link(rel="stylesheet" href="https://cdn.jsdelivr.net/musubii/2.0.0/css/musubii.min.css")
```

## Basic rules

### Object + State

OOCSSを踏襲しつつシンプルなCSS設計となっています。
要素 `.(xxxx)` 1つに対して、状態 `.is-(xxxx)` を複数追加してスタイリングするのが基本です。
また、すべてのクラス名は英小文字・数字・ハイフン1つで構成されています。

### CSS Layers

CSSのレイヤーは主に4つに分類されています。

- *Base* … リセットCSSなどの下地
- *Layout* … 余白・マージン・グリッドシステム
- *Module* … ボタン・テキスト・リスト・見出しなど
- *Utility* … 調整用モディファイア

### Responsive

5つの画面サイズで可変するレスポンシブウェブデザインになっています。

- *Mobile* … ~ 575px
- *Fablet* … 576px ~ 767px
- *Tablet* … 768px ~ 991px
- *Desktop* … 992px ~ 1199px
- *Wide* … 1200px ~

## Support

| Chrome | Firefox | IE | Ege | Safari(Mac) |
|:------:|:------:|:------:|:------:|:------:|
| Newest | Newest | 11~ | Newest | Newest |

| Safari(iOS) | Chrome(Android) | Browser(Android) |
|:------------:|:------------:|:------------:|
| Newest | Newest | 4.4~ |

## License

- MIT
- Author: [Qrac][link-twitter]

[link-demo-1]:https://qrac.github.io/musubii/
[link-jsdelivr]:https://www.jsdelivr.com/projects/musubii
[link-twitter]:https://twitter.com/Qrac_jp