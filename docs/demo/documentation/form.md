# Form

フォームはブラウザのデフォルト機能を活かすことを推奨しています。`form` の中に `form` を入れることはできません。`form` タグは `action` に送信先プログラムを指定し、`method` にはボディに収めて送信する `post` またはセパレータ `?` で URL に追加する `get` を指定します。

<demo-form demo="basic"/>

```html
<form class="form is-space" action="..." method="post">
  <p class="heading">ユーザーネーム</p>
  <div class="field">
    <input class="input is-mobile-full" type="text" name="username" value="demo">
  </div>
  <p class="heading">メールアドレス</p>
  <div class="field">
    <input class="input is-mobile-full" type="email" name="email" placeholder="example@gmail.com">
  </div>
  <p class="heading">パスワード</p>
  <div class="field">
    <input class="input is-mobile-full" type="password" name="password">
  </div>
  <p class="texts is-danger is-xs">※半角英数のみ</p>
  <label class="label is-checkbox is-block">
    <input class="input" type="checkbox" name="checkbox">
    <span class="text is-middle is-sm">次回から自動的にログイン</span>
  </label>
  <div class="btns">
    <button class="btn is-plain is-success is-mobile-full" type="submit">ログイン</button>
  </div>
</form>
```

## Text

1 行テキスト欄は `input[type="text"]` タグに class `.input` 付与で装飾し使用します。

2 行以上のテキスト欄は `textarea` タグに class `.textarea` 付与で装飾し使用します。`rows` 属性で行数の目安を設定、`cols` 属性で文字数の目安を設定し初期サイズを調整できます。CSS で初期サイズを上書きすることも可能です。

<demo-form demo="text"/>

```html
<input class="input" type="text" name="text" placeholder="Text">
<input class="input" type="text" name="text" placeholder="Disabled" disabled>
<input class="input" type="text" name="text" value="Readonly" readonly>

<textarea class="textarea" name="textarea"></textarea>
<textarea class="textarea" name="textarea" disabled></textarea>
<textarea class="textarea" name="textarea" readonly>Readonly</textarea>
```

## Password

パスワード入力欄は `input[type="password"]` タグに class `.input` 付与で装飾し使用します。入力した文字は `*` となり表示されます。ただし、これによって通信時に暗号化がなされるわけではありません。

<demo-form demo="password"/>

```html
<input class="input" type="password" name="password">
<input class="input" type="password" name="password" disabled>
<input class="input" type="password" name="password" value="Readonly" readonly>
```

## URL

URL 入力欄は `input[type="url"]` タグに class `.input` 付与で装飾し使用します。

<demo-form demo="url"/>

```html
<input class="input" type="url" name="url" placeholder="example.com">
<input class="input" type="url" name="url" placeholder="example.com" disabled>
<input class="input" type="url" name="url" value="example.com" readonly>
```

## Email

Email 入力欄は `input[type="email"]` タグに class `.input` 付与で装飾し使用します。

<demo-form demo="email"/>

```html
<input class="input" type="email" name="email" placeholder="example@gmail.com">
<input class="input" type="email" name="email" placeholder="example@gmail.com" disabled>
<input class="input" type="email" name="email" value="example@gmail.com" readonly>
```

## TEL

TEL 入力欄は `input[type="tel"]` タグに class `.input` 付与で装飾し使用します。

<demo-form demo="tel"/>

```html
<input class="input" type="tel" name="tel" maxlength="13" placeholder="000-0000-0000">
<input class="input" type="tel" name="tel" maxlength="13" placeholder="000-0000-0000" disabled>
<input class="input" type="tel" name="tel" maxlength="13" value="000-0000-0000" readonly>
```

## Number

数値入力欄は `input[type="number"]` タグに class `.input` 付与で装飾し使用します。`step` はキー入力やブラウザのデフォルト機能でステップ数に応じた数値増減を可能にする属性です。

<demo-form demo="number"/>

```html
<input class="input" type="number" name="number" maxlength="5" step="100" placeholder="10000">
<input class="input" type="number" name="number" maxlength="5" step="100" placeholder="10000" disabled>
<input class="input" type="number" name="number" maxlength="5" step="100" value="10000" readonly>
```

## Search

検索入力欄は `input[type="search"]` タグに class `.input` 付与で装飾し使用します。ブラウザのデフォルト機能で入力した値をリセットする UI が使えたりします。

<demo-form demo="search"/>

```html
<input class="input" type="search" name="search" placeholder="Search">
<input class="input" type="search" name="search" placeholder="Search" disabled>
<input class="input" type="search" name="search" value="Search" readonly>
```

## Date

日付入力欄は `input[type="datetime-local"]` `input[type="date"]` `input[type="month"]` タグに class `.input` 付与で装飾し使用します。ブラウザのデフォルト機能でデイトピッカーやドラムロールを使った日付選択が可能です。

<demo-form demo="date"/>

```html
<input class="input" type="datetime-local" name="datetime-local" value="2017-02-02T00:00:00">
<input class="input" type="datetime-local" name="datetime-local" value="2017-02-02T00:00:00" disabled>

<input class="input" type="date" name="date" value="2017-02-02">
<input class="input" type="date" name="date" value="2017-02-02" disabled>

<input class="input" type="month" name="month" value="2017-02">
<input class="input" type="month" name="month" value="2017-02" disabled>
```

## Time

時間入力欄は `input[type="time"]` タグに class `.input` 付与で装飾し使用します。ブラウザのデフォルト機能で時間に対応した値の増減が可能です。

<demo-form demo="time"/>

```html
<input class="input" type="time" name="time" value="00:00:00">
<input class="input" type="time" name="time" value="00:00:00" disabled>
```

## File

ファイルアップロード欄は `input[type="file"]` タグです。デフォルト UI はブラウザによって異なりレイアウトを崩しがちなため、使用する場合は class `.input` 付与で幅を抑制させます（[参考](https://github.com/qrac/musubii/issues/2)）。

または `label` タグに `.btn` スタイルを当て `input[type="file"]` を非表示とするパターンが安全です。ただし、この場合はセット中のファイル名を表示する機能が失われるため、必要であれば JavaScript で実装します（[参考](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/file#Examples)）。

タグに `multiple` 属性を付与すると複数のファイル選択に対応できます。また、`accept` 属性では選択ファイルの形式を簡易的に絞り込むことができます（例：`accept=".jpg, .jpeg, .png"`）。

<demo-form demo="file"/>

```html
<input class="input" type="file" name="file">
<input class="input" type="file" name="file" disabled>

<label class="btn is-plain">
  <span class="text">ファイル選択</span>
  <input type="file" name="file" class="input">
</label>

<label class="btn is-plain">
  <span class="text">ファイル選択</span>
  <input type="file" name="file" class="input" disabled>
</label>
```

## Color

色選択欄は `input[type="color"]` タグです。16 進数 RGB の値に対応。デフォルト UI はブラウザによって異なり、対応していないブラウザではテキスト入力欄に置き換えられます。

色選択時にアクションを起こす場合は JavaScript での実装が必要です（[参考](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/color#Example)）。

<demo-form demo="color"/>

```html
<input type="color" name="color">
<input type="color" name="color" disabled>
```

## Range

レンジ入力欄は `input[type="range"]` タグです。デフォルト UI はブラウザによって多少異なります。

`min` 属性の初期値は `0`、`max` 属性の初期値は `100` 、`step` 属性の初期値は `1` 。`value` の値が入っていない場合は自動的に中央が選択されます。また、`list` 属性で `datalist` の id を指定することで詳細なレンジ入力欄が作成可能です（[参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Using_range_inputs)）。

<demo-form demo="range"/>

```html
<input type="range" name="range">
<input type="range" name="range" disabled>

<input type="range" name="range" step="10">

<input type="range" name="range" min="1" max="5" value="3" list="range-five">
<datalist id="range-five">
  <option value="1"></option>
  <option value="2"></option>
  <option value="3"></option>
  <option value="4"></option>
  <option value="5"></option>
</datalist>
```

## Radio

ラジオボタンは `input[type="radio"]` タグです。`name` で選択肢をまとめます。

`label` で `input` を子要素にすれば id を省略できます。分離させる場合は `label` から `for` 属性で対象 `input` の id を指定。

<demo-form demo="radio"/>

```html
<div class="field">
  <label class="label is-radio">
    <input type="radio" name="radio-demo-1" checked>
    <span class="text is-middle">むすびー</span>
  </label>
  <label class="label is-radio">
    <input type="radio" name="radio-demo-1">
    <span class="text is-middle">むすびい</span>
  </label>
  <label class="label is-radio">
    <input type="radio" name="radio-demo-1" disabled>
    <span class="text is-middle">むすび</span>
  </label>
</div>

<div class="field is-middle">
  <input id="radio-demo-2-1" type="radio" name="radio-demo-2" checked>
  <label class="label is-radio" for="radio-demo-2-1">
    <span class="text is-middle">ムスビー</span>
  </label>
  <input id="radio-demo-2-2" type="radio" name="radio-demo-2">
  <label class="label is-radio" for="radio-demo-2-2">
    <span class="text is-middle">ムスビイ</span>
  </label>
  <input id="radio-demo-2-3" type="radio" name="radio-demo-2" disabled>
  <label class="label is-radio" for="radio-demo-2-3">
    <span class="text is-middle">ムスビ</span>
  </label>
</div>
```

## Checkbox

ラジオボタンは `input[type="checkbox"]` タグです。`name` で選択肢をまとめます。

`label` で `input` を子要素にすれば id を省略できます。分離させる場合は `label` から `for` 属性で対象 `input` の id を指定。

<demo-form demo="checkbox"/>

```html
<div class="field">
  <label class="label is-checkbox">
    <input type="checkbox" name="checkbox-demo-1" checked>
    <span class="text is-middle">HTML</span>
  </label>
  <label class="label is-checkbox">
    <input type="checkbox" name="checkbox-demo-1">
    <span class="text is-middle">CSS</span>
  </label>
  <label class="label is-checkbox">
    <input type="checkbox" name="checkbox-demo-1" disabled>
    <span class="text is-middle">JavaScript</span>
  </label>
</div>

<div class="field is-middle">
  <input id="checkbox-demo-2-1" type="checkbox" name="checkbox-demo-2" checked>
  <label class="label is-checkbox" for="checkbox-demo-2-1">
    <span class="text is-middle">Pug</span>
  </label>
  <input id="checkbox-demo-2-2" type="checkbox" name="checkbox-demo-2">
  <label class="label is-checkbox" for="checkbox-demo-2-2">
    <span class="text is-middle">Sass</span>
  </label>
  <input id="checkbox-demo-2-3" type="checkbox" name="checkbox-demo-2" disabled>
  <label class="label is-checkbox" for="checkbox-demo-2-3">
    <span class="text is-middle">TypeScript</span>
  </label>
</div>
```

## Select

セレクトボタン・セレクトボックスは `select` タグに class `.select` 付与で装飾し使用します。`size` 属性で表示させる選択肢の数を設定、`multiple` 属性で複数選択が可能になります。

<demo-form demo="select"/>

```html
<div class="select">
  <select>
    <option>Select A</option>...
  </select>
</div>
<div class="select">
  <select disabled>
    <option>Select A</option>...
  </select>
</div>

<div class="select is-multiple">
  <select size="5">
    <option>Select A</option>...
  </select>
</div>
<div class="select is-multiple">
  <select size="5" disabled>
    <option>Select A</option>...
  </select>
</div>

<div class="select is-multiple">
  <select size="5" multiple>
    <option>Select A</option>...
  </select>
</div>
<div class="select is-multiple">
  <select size="5" multiple disabled>
    <option>Select A</option>...
  </select>
</div>
```

## Button

汎用ボタンは `button[type="button"]` タグ。リセットボタンは `button[type="reset"]` タグ。サブミットボタンは `button[type="submit"]` タグにそれぞれ class `.btn` を付与します。

`disabled` 属性を付与すると自動的にデザインも変わります。その他スタイリングの詳細はボタンページを参照ください。

<demo-form demo="button"/>

```html
<button type="button" class="btn is-plain is-primary">汎用ボタン</button>
<button type="button" class="btn is-plain is-primary" disabled>汎用ボタン</button>

<button type="reset" class="btn is-plain">リセット</button>
<button type="reset" class="btn is-plain" disabled>リセット</button>

<button type="submit" class="btn is-plain is-success">送信</button>
<button type="submit" class="btn is-plain is-success" disabled>送信</button>
```

## Round

`.input` `.select` は class `.is-round` を付与することでボタンの角を丸められます。

<demo-form demo="round"/>

```html
<input class="input is-round" type="text" name="text" placeholder="Text">

<div class="select is-round">
  <select>
    <option>Select A</option>...
  </select>
</div>
```

## Field

`.field` でラッピングした要素は横並びになり、後述する Flex が適応できるようになります。`.is-middle` 付与で天地を揃えるなどの微調整も可能です。

<demo-form demo="field"/>

```html
<div class="field">
  <input type="text" class="input" name="text" placeholder="Text">
  <input type="text" class="input is-mobile-0" name="text" placeholder="Text">
</div>

<div class="field is-middle">
  <span class="text">天地中央揃え</span>
  <input type="text" class="input is-mobile-0" name="text" placeholder="Text">
</div>
```

## Flex

`.field` 直下の要素は `.is-(xxxx)-(yy)` 形式の幅を表す class 付与で幅を変動させられます。設定してあるメディアクエリごとに指定が可能。

<demo-form demo="flex"/>

```html
<div class="field">
  <input type="text" class="input is-mobile-full is-tablet-0" name="text" placeholder="Text">
  <input type="text" class="input is-mobile-full is-tablet-0" name="text" placeholder="Text">
  <input type="text" class="input is-mobile-full is-tablet-0" name="text" placeholder="Text">
  <input type="text" class="input is-mobile-full is-tablet-0" name="text" placeholder="Text">
</div>
```

<table-flex/>

## Bar

`.field` に class `.is-bar` を付与することで子要素の `.input` `.select` `.btn` を連結させられます。

<demo-form demo="bar"/>

```html
<div class="field">
  <div class="select">
    <select>
      <option>カテゴリー A</option>...
    </select>
  </div>
  <input type="text" class="input" name="text" placeholder="キーワード">
  <button type="submit" class="btn is-plain is-info">
    <i class="fas fa-search" aria-hidden="true"></i>
  </button>
</div>
```

## Attribute

フォームの各要素は属性を付与することで簡単に機能や役割を持たせられます。フォームでよく利用する属性には以下のようなものがあります。

| Tag            | Detail                                    |
| -------------- | ----------------------------------------- |
| `name`         | `value` とセットで送信される名前          |
| `value`        | 送信用データの初期値                      |
| `placeholder`  | 入力前のヒントや例                        |
| `size`         | パーツの初期サイズ                        |
| `max`          | 数値や日付の最大値                        |
| `min`          | 数値や日付の最小値                        |
| `maxlength`    | 入力文字数の最大値                        |
| `minlength`    | 入力文字数の最小値                        |
| `autofocus`    | 遷移時にフォーカスさせる                  |
| `autocomplete` | 値の自動補完（デフォルトは ON）           |
| `list`         | `datalist` の id を指定して受け渡す       |
| `form`         | `<form>` の外にあるパーツを関連づけられる |
| `disabled`     | 無効状態                                  |
| `readonly`     | 読み取り専用                              |
| `required`     | 必須項目                                  |

※`autocomplete` を意図通りに動作させるため `name` には的確な名前を付けます（[参考](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill)）。

## Validation

フォームにはバリデーション機能が備わっています。`type="email"` や `type="url"` が入力形式を判別するほか、必須項目のチェックもされており、CSS では以下の擬似クラスを用いてスタイルを当てることができます。

| Class       | Detail                           |
| ----------- | -------------------------------- |
| `:valid`    | バリデーションをクリアしている   |
| `:invalid`  | バリデーションをクリアしていない |
| `:optional` | 任意項目                         |
| `:required` | 必須項目                         |
