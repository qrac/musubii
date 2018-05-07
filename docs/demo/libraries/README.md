---
sidebar: auto
---

# Libraries

MUSUBii は各種ライブラリとの併用が可能です。依存関係はありません。

## Yaku Han JP

[Yaku Han JP](https://qrac.github.io/yakuhanjp/) を読み込み CSS に font-family を追加するとカッコや句読点を詰めて表示できます。カッコのみを詰める少量タイプや明朝体・丸ゴシックも利用可能。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanjp.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanjp_s.min.css">
```

## Google Fonts

[Google Fonts](https://fonts.google.com/) は Google が配信している Web Font です。[日本語の早期アクセス版](https://googlefonts.github.io/japanese/)もあります。

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,700,900">
<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css">
```

## Font Awesome

[Font Awesome](http://fontawesome.com/) は CDN で SVG もしくは Web Font を使ったアイコン表示が可能。バージョン 5 からはグリフや class 名が多少変更になっており、JS を使ったインライン SVG アイコン表示にも対応しています。

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.1/css/all.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

## Material Icons

[Material Icons](https://material.io/icons/) は Google がマテリアルデザイン向けに開発したアイコンです。

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Vue.js

[Vue.js](https://jp.vuejs.org/) は、データバインディングなどが得意で UI 構築に特化している JS フレームワークです。

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## jQuery

各バージョンの [jQuery](https://jquery.com/) を CDN 経由で使えます。本家よりも [Google Hosted Libraries](https://developers.google.com/speed/libraries/#jquery) からの配信が比較的安定しています。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```
