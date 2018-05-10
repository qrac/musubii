# Detail

## Markup

要素 `.(xxxx)` 1 つに対して、装飾 `.is-(xxxx)` を複数追加してスタイリングするのが基本。すべての class は英小文字・数字・ハイフン 1 つで構成されています。

<div class="group is-wrap is-example">
  <div class="btns">
    <button class="btn is-plain is-primary">ボタンの例 A</button>
    <button class="btn is-plain is-success">ボタンの例 B</button>
    <button class="btn is-plain is-success is-round">ボタンの例 C</button>
    <button class="btn is-plain is-success is-round is-lg">ボタンの例 D</button>
  </div>
</div>

```html
<button class="btn is-plain is-primary">ボタンの例 A</button>
<button class="btn is-plain is-success">ボタンの例 B</button>
<button class="btn is-plain is-success is-round">ボタンの例 C</button>
<button class="btn is-plain is-success is-round is-lg">ボタンの例 D</button>
```

## Unit

単位は em ベース。要素の大きさを汎用モディファイアによるフォントサイズ変更で一括調整できます。また、すべての値には 16 を割れる数値を用いているため、サイズ変更を行った場合に割り切れない端数が出づらくなっています。

## Layers

CSS のレイヤーは大きく 4 つに分類。リセット CSS として [Shitaji.CSS](https://qrac.github.io/shitajicss/) をインポートしています。

* **Base** … 文字色などの下地
* **Layout** … 余白・マージン・グリッドシステム
* **Module** … ボタン・テキスト・リスト・見出しなど
* **Utility** … 調整用モディファイア

## Responsive

5 つの画面サイズで可変できるレスポンシブウェブデザインになっています。

* **Mobile** … ~ 575px
* **Fablet** … 576px ~ 767px
* **Tablet** … 768px ~ 991px
* **Desktop** … 992px ~ 1199px
* **Wide** … 1200px ~
