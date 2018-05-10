# List

リストの基本形は `.list > .item` です。デフォルトスタイルでリストを作る場合、黒丸は `.is-disc`、 白丸は `.is-circle`、 ナンバリングは `.is-decimal` を `.list` に付与します。

<demo-list demo="basic"/>

```html
<ul class="list is-disc">
  <li class="item">...</li>
  <li class="item">...</li>
</ul>

<ul class="list is-circle">
  <li class="item">...</li>
  <li class="item">...</li>
</ul>

<ol class="list is-decimal">
  <li class="item">...</li>
  <li class="item">...</li>
</ol>
```

## Note

ナンバリング付きの米印など、カスタマイズが必要な場合は `.list` に `.is-note` を付与します。直下の要素が横並びになり自由に要素を置けます。

<demo-list demo="note"/>

```html
<ul class="list is-note">
  <li class="item">
    <span>※1</span>
    <span>...</span>
  </li>
  <li class="item">
    <span>※2</span>
    <span>...</span>
  </li>
</ul>
```
