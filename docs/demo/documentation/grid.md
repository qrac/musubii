# Grid

Flexbox を用いた 12 分割+α のグリッドシステムです。付与する class によって、カラム幅の比率・配置の調整が可能になっています。`.grid > .col` が基本構造。`.grid` と `.col` には状態を表す class を付与します。

<demo-grid demo="basic"/>

```html
<div class="grid">
  <div class="col is-mobile-12 is-desktop-4">
    ...
  </div>
  <div class="col is-mobile-12 is-desktop-4">
    ...
  </div>
  <div class="col is-mobile-12 is-desktop-4">
    ...
  </div>
</div>
```

## Flex

カラム幅の比率を変更するには `.col` に `.is-(xxxx)-(yy)` 形式の幅を表す class を付与します。幅は設定してあるメディアクエリごとに指定可能です。

<demo-grid demo="flex"/>

<table-flex :split="true"/>

## Position

グリッド内の配置を Flexbox のプロパティで調整できます。使用するには `.grid` に `.is-center` （横中央寄せ）や `.is-between` （等間隔）などの対応した class を付与します。

<demo-grid demo="position"/>

```html
<div class="grid is-middle">
  <div class="col">...</div>
  <div class="col">...</div>
</div>

<div class="grid is-bottom">
  <div class="col">...</div>
  <div class="col">...</div>
</div>

<div class="grid is-center">
  <div class="col">...</div>
  <div class="col">...</div>
</div>

<div class="grid is-right">
  <div class="col">...</div>
  <div class="col">...</div>
</div>

<div class="grid is-between">
  <div class="col">...</div>
  <div class="col">...</div>
</div>

<div class="grid is-around">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
```

## Stretch

カラムはデフォルトで高さが揃いますが、更に子要素まで高さを揃えるには `.grid` に `.is-stretch` を付与します。

<demo-grid demo="stretch"/>

```html
<div class="grid is-stretch">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
```

## Reverse

グリッド内のカラムを通常とは逆に並べたい場合は `.grid` に `.is-reverse` を付与します。

<demo-grid demo="reverse"/>

```html
<div class="grid is-reverse">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
```

## Gap

グリッドの溝を消す場合は `.grid` に `.is-gap-none` を付与します。

<demo-grid demo="gap"/>

```html
<div class="grid is-gap-none">
  <div class="col">...</div>
  <div class="col">...</div>
</div>
```
