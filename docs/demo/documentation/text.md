# Text

テキストはブロック要素の class を `.texts`、インライン要素の class を `.text` に設定。装飾を施すにはモディファイアを付与します。

<demo-text demo="basic"/>

```html
<p class="texts">
  <span class="text">デフォルト</span>
  <strong class="text is-strong">ストロング</strong>
  <small class="text is-small">スモール</small>
  <span class="text is-italic">Italic</span>
  <del class="text is-delete">削除</del>
  <span class="text">
    <i class="fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="text">アイコン追加</span>
    <i class="material-icons">face</i>
  </span>
  <span class="text">
    <span class="text">注釈入れ</span>
    <sup>※1</sup>
  </span>
</p>
```

## Dark

`.is-dark` または `.is-dark-(x)` を付与し、黒文字の濃度を調整。RGB ではなくアルファ値を用いているので下地の色と馴染みやすいです。デフォルトのテキストは `.is-dark-2` と同じ。

<demo-text demo="dark"/>

```html
<p class="texts">
  <span class="text is-dark">ダーク</span>
  <span class="text is-dark-1">ダーク 1</span>
  <span class="text is-dark-2">ダーク 2</span>
  <span class="text is-dark-3">ダーク 3</span>
  <span class="text is-dark-4">ダーク 4</span>
  <span class="text is-dark-5">ダーク 5</span>
  <span class="text is-dark-6">ダーク 6</span>
  <span class="text is-dark-7">ダーク 7</span>
  <span class="text is-dark-8">ダーク 8</span>
  <span class="text is-dark-9">ダーク 9</span>
</p>
```

## Light

`.is-light` または `.is-light-(x)` を付与し、白文字を指定。RGB ではなくアルファ値を用いているので下地の色と馴染みやすいです。

<demo-text demo="light"/>

```html
<p class="texts">
  <span class="text is-light">ライト</span>
  <span class="text is-light-1">ライト 1</span>
  <span class="text is-light-2">ライト 2</span>
  <span class="text is-light-3">ライト 3</span>
  <span class="text is-light-4">ライト 4</span>
  <span class="text is-light-5">ライト 5</span>
  <span class="text is-light-6">ライト 6</span>
  <span class="text is-light-7">ライト 7</span>
  <span class="text is-light-8">ライト 8</span>
  <span class="text is-light-9">ライト 9</span>
</p>
```

## Color

テキストの色は役割に応じ class 付与で調整できます。

<demo-text demo="color"/>

```html
<p class="texts">
  <span class="text">Normal</span>
  <span class="text is-primary">Primary</span>
  <span class="text is-info">Info</span>
  <span class="text is-success">Success</span>
  <span class="text is-warning">Warning</span>
  <span class="text is-danger">Danger</span>
</p>
```

## Link

アンダーバーのリンクスタイルは `.is-link`、ホバーでアンダーバーを表示させるリンクスタイルは `.is-link-reverse` で使用できます。色変更のスタイルと組み合わせるのがベター。

<demo-text demo="link"/>

```html
<p class="texts">
  <a class="text is-link is-primary" href="...">Primary</a>
  <a class="text is-link is-info" href="...">Info</a>
  <a class="text is-link is-success" href="...">Success</a>
  <a class="text is-link is-warning" href="...">Warning</a>
  <a class="text is-link is-danger" href="...">Danger</a>
</p>

<p class="texts">
  <a class="text is-link-reverse is-primary" href="...">Primary</a>
  <a class="text is-link-reverse is-info" href="...">Info</a>
  <a class="text is-link-reverse is-success" href="...">Success</a>
  <a class="text is-link-reverse is-warning" href="...">Warning</a>
  <a class="text is-link-reverse is-danger" href="...">Danger</a>
</p>
```

## Size

サイズを表す class を付与することでテキストの大きさを変化させられます。デフォルトは `.is-md` の 1em。サイズは設定してあるメディアクエリごとに指定可能です。

<demo-text demo="size"/>

```html
<p class="texts">
  <span class="text is-xxs">極小</span>
  <span class="text is-xs">小さい</span>
  <span class="text is-sm">小さめ</span>
  <span class="text is-md">中くらい</span>
  <span class="text is-lg">大きめ</span>
  <span class="text is-xl">大きい</span>
  <span class="text is-xxl">特大</span>
</p>
```

<table-size table="basic"/>

<table-size table="responsive"/>

## Align

`.texts` に class `.is-left` `.is-center` `.is-right` を付与することでテキストの寄せる方向を変化させられます。寄せる方向は設定してあるメディアクエリごとに指定可能です。

<demo-text demo="align"/>

```html
<p class="texts is-left">左寄せのテキスト</p>
<p class="texts is-center">中央寄せのテキスト</p>
<p class="texts is-right">右寄せのテキスト</p>
```

<table-align/>

## Transform

英語テキストの大文字表示・小文字表示を CSS で指定できます。

<demo-text demo="transform"/>

```html
<p class="texts">
  <span class="text is-capitalize">capitalize</span>
  <span class="text is-lowercase">lowercase</span>
  <span class="text is-uppercase">uppercase</span>
</p>
```

## Ellipsis

テキストを端で折り返さずに三点リーダーで省略する場合は、ブロック要素に `.is-ellipsis` を付与します。三点リーダーを出すには親要素の横幅を確定させる必要があるので、可変要素内で利用する場合は flex ではなく calc などで親要素の横幅を明確にします。

<demo-text demo="ellipsis"/>

```html
<p class="texts is-ellipsis">...</p>
```

## Blockquote

引用枠を表示させる場合は `.blockquote` で囲います。

<demo-text demo="blockquote"/>

```html
<blockquote class="blockquote">...</blockquote>
```

## Code

テキスト中にインラインでコードを表示させる場合は `.code` で囲います。 ブロック要素としてコードを表示させたい場合は `.pre` の中に `.code` を書きます。

<demo-text demo="code"/>

```html
<p class="texts">
  テキストの途中に
  <code class="code">code</code>
  を表示させる。
</p>

<pre class="pre">
  <code class="code">
    html {
      box-sizing: border-box;
      font-family: sans-serif;
      overflow-y: scroll;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
  </code>
</pre>
```
