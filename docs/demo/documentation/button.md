# Button

## Plain

ボタンを作るには、ボタンをまとめるブロック要素の class を `.btns` 、ボタン自体の class を `.btn` にします。装飾をプレーンタイプにするには `.btn` に `.is-plain` を付与します。

<demo-button demo="plain"/>

```html
<div class="btns">
  <button class="btn is-plain">戻る</button>
  <button class="btn is-plain is-primary">決定</button>
  <button class="btn is-plain is-success">登録</button>
  <button class="btn is-plain is-danger">削除</button>
  <button class="btn is-plain is-disable">不可</button>
  <button class="btn is-plain is-primary">
    <i class="fas fa-flag" aria-hidden="true"></i>
    <span class="text">FontAwesome</span>
  </button>
  <button class="btn is-plain is-success">
    <span class="text">FontAwesome</span>
    <i class="fas fa-angle-right is-fit" aria-hidden="true"></i>
  </button>
  <button class="btn is-plain is-primary">
    <i class="material-icons">face</i>
    <span class="text">Material Icons</span>
  </button>
  <button class="btn is-plain is-success">
    <span class="text">Material Icons</span>
    <i class="material-icons">keyboard_arrow_right</i>
  </button>
</div>
```

## Melt

ホバーしたときに浮き上がるボタンを作るには `.btn` に `.is-melt` を付与します。

<demo-button demo="melt"/>

```html
<button class="btn is-melt">...</button>
```

## Outline

アウトラインのみでボタンらしさを出すには `.btn` に `.is-outline` を付与します。

<demo-button demo="outline"/>

```html
<button class="btn is-outline">...</button>
```

## Ghost

背景に色や写真を透かせるボタンを作るには `.btn` に `.is-ghost` を付与します。

<demo-button demo="ghost"/>

```html
<button class="btn is-ghost">...</button>
```

## Floating

`.btn` に class `.is-floating` を付与することで、ドロップシャドウを付けられます。

<demo-button demo="floating"/>

```html
<button class="btn is-plain is-floating">...</button>
```

## Round

`.btn` に class `.is-round` を付与することでボタンの角を丸められます。

<demo-button demo="round"/>

```html
<button class="btn is-plain is-round">...</button>
```

## Circle

`.btn` に class `.is-circle` を付与することでボタンの円形にできます。

<demo-button demo="circle"/>

```html
<button class="btn is-plain is-circle">...</button>
```

## Size

サイズを表す class を付与することでボタンの大きさを変化させられます。角丸のサイズは相対的に変化します。デフォルトは `.is-md`。サイズは設定してあるメディアクエリごとに指定可能です。

<demo-button demo="size"/>

```html
<div class="btns">
  <button class="btn is-xxs">極小</button>
  <button class="btn is-xs">小さい</button>
  <button class="btn is-sm">小さめ</button>
  <button class="btn is-md">中くらい</button>
  <button class="btn is-lg">大きめ</button>
  <button class="btn is-xl">大きい</button>
  <button class="btn is-xxl">特大</button>
</div>

<div class="btns is-xxs">
  <button class="btn">まとめて極小</button>
  <button class="btn">まとめて極小</button>
  <button class="btn">まとめて極小</button>
  <button class="btn">まとめて極小</button>
  <button class="btn">まとめて極小</button>
</div>
```

<table-size table="basic"/>

<table-size table="responsive"/>

## Flex

ボタン幅を変更するには `.btn` に `.is-(xxxx)-(yy)` 形式の幅を表す class を付与します。幅は設定してあるメディアクエリごとに指定可能です。

<demo-button demo="flex"/>

<table-flex/>

## Position

`.btns` に class `.is-left` `.is-center` `.is-right` を付与することでボタンの寄せる方向を変化させられます。

<demo-button demo="position"/>

```html
<div class="btns is-left">...</div>

<div class="btns is-center">...</div>

<div class="btns is-right">...</div>
```

## Bar

`.btns` に class `.is-bar` を付与することで子要素のボタンを連結させられます。

<demo-button demo="bar"/>

```html
<div class="btns is-bar">
  <button class="btn is-plain">...</button>
  <button class="btn is-plain">...</button>
  <button class="btn is-plain">...</button>
</div>
```
