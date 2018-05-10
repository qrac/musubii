# Table

テーブルの装飾には、親要素に `.table` 、変化させたい箇所に class を付与します。幅の指定や連結は、HTML タグへの記述で行います。

<demo-table demo="basic"/>

```html
<table class="table is-stripe is-border is-center is-middle">
  <thead>
    <tr class="is-paint">
      <th width="20"></th>
      <th>見出しセル</th>
      <th>見出しセル</th>
      <th colspan="2">見出しセル</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="is-paint" rowspan="2">#1</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
    </tr>
    <tr>
      <td>データセル</td>
      <td class="is-spot">スポット表示</td>
      <td>データセル</td>
      <td>データセル</td>
    </tr>
    <tr>
      <td class="is-paint">#2</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
    </tr>
    <tr>
      <td class="is-paint">#3</td>
      <td>データセル</td>
      <td>データセル</td>
      <td class="is-danger">エラー表示</td>
      <td>データセル</td>
    </tr>
    <tr>
      <td class="is-paint">#4</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
      <td>データセル</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th class="is-right" colspan="5">テーブルフッター</th>
    </tr>
  </tfoot>
</table>
```

## Line

テーブルに線を加えるには `.table` に `.is-line` または `.is-outline` または `.is-border` を付与ます。

<demo-table demo="line"/>

```html
<table class="table is-line">
  ...
</table>

<table class="table is-outline">
  ...
</table>

<table class="table is-border">
  ...
</table>
```

## Align

`.table` または子要素にクラス名 `.is-left` `.is-center` `.is-right` `.is-middle` を付与することでテキストの寄せる方向を変化させられます。

<demo-table demo="align"/>

```html
<table class="table">
  <thead>
    <tr>
      <th class="is-left"></th>
      <th class="is-center"></th>
      <th class="is-right"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="is-left"></td>
      <td class="is-center"></td>
      <td class="is-right is-middle"></td>
    </tr>
  </tbody>
</table>
```

## Paint

テーブルのセルを塗るには `.is-(xxxx)` の形式で塗り設定を行います。`tr` タグに設定して一行すべて塗ることもできます。`.table` に `.is-stripe` を設定した場合は、自動的に 1 行飛ばしで薄グレーが塗られます。

<demo-table demo="paint"/>

```html
<table class="table">
  <tbody>
    <tr>
      <td class="is-paint"></td>
      <td></td>
    </tr>
    <tr>
      <td class="is-paint"></td>
      <td class="is-spot"></td>
    </tr>
    <tr>
      <td class="is-paint"></td>
      <td class="is-danger"></td>
    </tr>
  </tbody>
</table>

<table class="table is-stripe">
  ...
</table>
```

## Scroll

情報が多いテーブルをモバイルなどで表示させた場合、文字の折り返しに限界が来てレイアウトが崩れます。データが多くなる場合、`.table` を`.is-scroll-x` 付きの親要素でラッピングし横スクロール機能を持たせます。

<demo-table demo="scroll"/>

```html
<div class="group is-scroll-x">
  <table class="table">
    ...
  </table>
</div>
```
