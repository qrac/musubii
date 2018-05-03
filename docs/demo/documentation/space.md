# Space

`.is-space` を付与した要素の子要素は自動的に間隔が開きます。

* class `.heading` の上は広めに開く
* class `.groups` を付与した要素の上はかなり広く開く
* class `.heading + .field + .texts` の組み合わせは狭まる

<demo-space demo="basic"/>

```html
<div class="group is-space">
  <p class="heading">見出し</p>
  <p class="texts">テキストテキストテキストテキストテキストテキスト</p>
  <p class="heading">見出し</p>
  <p class="texts">テキストテキストテキストテキストテキストテキスト</p>
</div>
```
