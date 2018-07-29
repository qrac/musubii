<template lang="pug">
.group.is-wrap
  .inner
    .group(v-if="demo === 'basic'")
      .grid.is-center
        .col.is-mobile-12.is-tablet-4
          .group.is-demo-box-1
            form.form.is-space(action="" method="post")
              p.heading ユーザーネーム
              .field
                input.input.is-mobile-full(type="text" name="username" value="demo")
              p.heading メールアドレス
              .field
                input.input.is-mobile-full(type="email" name="email" placeholder="example@gmail.com")
              p.texts.is-xs.is-danger ※半角英数のみ
              p.heading パスワード
              .field
                input.input.is-mobile-full(type="password" name="password")
              label.label.is-checkbox.is-block
                input.input(type="checkbox" name="checkbox")
                span.text.is-middle.is-sm 次回から自動的にログイン
              .btns
                button.btn.is-plain.is-success.is-mobile-full(type="submit") ログイン
    .group.is-space(v-else-if="demo === 'text'")
      .field
        input.input(type="text" name="text" placeholder="Text")
        input.input(type="text" name="text" placeholder="Disabled" disabled)
        input.input(type="text" name="text" value="Readonly" readonly)
      .field
        textarea.textarea(name="textarea" placeholder="Textarea")
        textarea.textarea(name="textarea" placeholder="Disabled" disabled)
        textarea.textarea(name="textarea" readonly) Readonly
    .group.is-space(v-else-if="demo === 'password'")
      .field
        input.input(type="password" name="password")
        input.input(type="password" name="password" disabled)
        input.input(type="password" name="password" value="Readonly" readonly)
    .group.is-space(v-else-if="demo === 'url'")
      .field
        input.input(type="url" name="url" placeholder="example.com")
        input.input(type="url" name="url" placeholder="example.com" disabled)
        input.input(type="url" name="url" value="example.com" readonly)
    .group.is-space(v-else-if="demo === 'email'")
      .field
        input.input(type="email" name="email" placeholder="example@gmail.com")
        input.input(type="email" name="email" placeholder="example@gmail.com" disabled)
        input.input(type="email" name="email" value="example@gmail.com" readonly)
    .group.is-space(v-else-if="demo === 'tel'")
      .field
        input.input(type="tel" name="tel" maxlength="13" placeholder="000-0000-0000")
        input.input(type="tel" name="tel" maxlength="13" placeholder="000-0000-0000" disabled)
        input.input(type="tel" name="tel" maxlength="13" value="000-0000-0000" readonly)
    .group.is-space(v-else-if="demo === 'number'")
      .field
        input.input(type="number" name="number" maxlength="5" step="100" placeholder="10000")
        input.input(type="number" name="number" maxlength="5" step="100" placeholder="10000" disabled)
        input.input(type="number" name="number" maxlength="5" step="100" value="10000" readonly)
    .group.is-space(v-else-if="demo === 'search'")
      .field
        input.input(type="search" name="search" placeholder="Search")
        input.input(type="search" name="search" placeholder="Search" disabled)
        input.input(type="search" name="search" value="Search" readonly)
    .group.is-space(v-else-if="demo === 'date'")
      .field
        input.input.is-mobile-full.is-desktop-auto(type="datetime-local" name="datetime-local" value="2017-02-02T00:00:00")
        input.input.is-mobile-full.is-desktop-auto(type="datetime-local" name="datetime-local" value="2017-02-02T00:00:00" disabled)
      .field
        input.input.is-mobile-full.is-desktop-auto(type="date" name="date" value="2017-02-02")
        input.input.is-mobile-full.is-desktop-auto(type="date" name="date" value="2017-02-02" disabled)
      .field
        input.input.is-mobile-full.is-desktop-auto(type="month" name="month" value="2017-02")
        input.input.is-mobile-full.is-desktop-auto(type="month" name="month" value="2017-02" disabled)
    .group.is-space(v-else-if="demo === 'time'")
      .field
        input.input.is-mobile-0.is-desktop-auto(type="time" name="time" value="00:00:00")
        input.input.is-mobile-0.is-desktop-auto(type="time" name="time" value="00:00:00" disabled)
    .group.is-space(v-else-if="demo === 'file'")
      .field
        input.input(type="file" name="file")
        input.input(type="file" name="file" disabled)
      .field
        label.btn.is-plain
          span.text ファイル選択
          input.input(type="file" name="file")
        label.btn.is-plain.is-disable
          span.text ファイル選択
          input.input(type="file" name="file" disabled)
    .group.is-space(v-else-if="demo === 'color'")
      .field
        input.input(type="color" name="color" value="#1cb4c7")
        input.input(type="color" name="color" value="#1cb4c7" disabled)
    .group.is-space(v-else-if="demo === 'range'")
      .field
        input.input(type="range" name="range")
        input.input(type="range" name="range" disabled)
      .field
        input.input(type="range" name="range" step="10")
        input.input(type="range" name="range" min="1" max="5" value="3" list="range-five")
        datalist#range-five
          option(value="1")
          option(value="2")
          option(value="3")
          option(value="4")
          option(value="5")
    .group.is-space(v-else-if="demo === 'radio'")
      .field
        label.label.is-radio
          input.input(type="radio" name="radio-demo-1" checked)
          span.text.is-middle むすびー
        label.label.is-radio
          input.input(type="radio" name="radio-demo-1")
          span.text.is-middle むすびい
        label.label.is-radio
          input.input(type="radio" name="radio-demo-1" disabled)
          span.text.is-middle むすび
      .field.is-middle
        input.input#radio-demo-2-1(type="radio" name="radio-demo-2" checked)
        label.label.is-radio(for="radio-demo-2-1")
          span.text.is-middle ムスビー
        input.input#radio-demo-2-2(type="radio" name="radio-demo-2")
        label.label.is-radio(for="radio-demo-2-2")
          span.text.is-middle ムスビイ
        input.input#radio-demo-2-3(type="radio" name="radio-demo-2" disabled)
        label.label.is-radio(for="radio-demo-2-3")
          span.text.is-middle ムスビ
    .group.is-space(v-else-if="demo === 'checkbox'")
      .field
        label.label.is-checkbox
          input.input(type="checkbox" name="checkbox-demo-1" checked)
          span.text.is-middle HTML
        label.label.is-checkbox
          input.input(type="checkbox" name="checkbox-demo-1")
          span.text.is-middle CSS
        label.label.is-checkbox
          input.input(type="checkbox" name="checkbox-demo-1" disabled)
          span.text.is-middle JavaScript
      .field.is-middle
        input.input#checkbox-demo-2-1(type="checkbox" name="checkbox-demo-2" checked)
        label.label.is-checkbox(for="checkbox-demo-2-1")
          span.text.is-middle Pug
        input.input#checkbox-demo-2-2(type="checkbox" name="checkbox-demo-2")
        label.label.is-checkbox(for="checkbox-demo-2-2")
          span.text.is-middle Stylus
        input.input#checkbox-demo-2-3(type="checkbox" name="checkbox-demo-2" disabled)
        label.label.is-checkbox(for="checkbox-demo-2-3")
          span.text.is-middle TypeScript
    .group.is-space(v-else-if="demo === 'select'")
      .field
        - var select_num = ["A", "B", "C", "D", "E"]
        .select
          select
            each val in select_num
              option= "Select " + val
        .select
          select(disabled)
            each val in select_num
              option= "Select " + val
      .field
        .select.is-multiple
          select(size="5")
            each val in select_num
              option= "Select " + val
        .select.is-multiple
          select(size="5" disabled)
            each val in select_num
              option= "Select " + val
      .field
        .select.is-multiple
          select(size="5" multiple)
            each val in select_num
              option= "Select " + val
        .select.is-multiple
          select(size="5" multiple disabled)
            each val in select_num
              option= "Select " + val
    .group.is-space(v-else-if="demo === 'button'")
      .btns
        button.btn.is-plain.is-primary(type="button") 汎用ボタン
        button.btn.is-plain.is-primary(type="button" disabled) 汎用ボタン
      .btns
        button.btn.is-plain(type="reset") リセット
        button.btn.is-plain(type="reset" disabled) リセット
      .btns
        button.btn.is-plain.is-success(type="submit") 送信
        button.btn.is-plain.is-success(type="submit" disabled) 送信
    .group.is-space(v-else-if="demo === 'round'")
      .field
        input.input.is-round(type="text" name="text" placeholder="Text")
        .select.is-round
          select
            each val in select_num
              option= "Select " + val
    .group.is-space(v-else-if="demo === 'field'")
      .field
        input.input(type="text" name="text" placeholder="Text")
        input.input.is-mobile-0(type="text" name="text" placeholder="Text")
      .field.is-middle
        span.text 天地中央揃え
        input.input.is-mobile-0(type="text" name="text" placeholder="Text")
    .group.is-space(v-else-if="demo === 'flex'")
      .field
        - for (var i = 1; i <= 3; i++)
          input.input.is-mobile-full.is-tablet-0(type="text" name="text" placeholder="Text")
    .group.is-space(v-else-if="demo === 'bar'")
      .field.is-bar
        .select
          select
            each val in select_num
              option= "カテゴリー " + val
        input.input(type="text" name="text" placeholder="キーワード")
        button.btn.is-plain.is-info(type="submit")
          i.fas.fa-search(aria-hidden="true")
</template>

<script>
export default {
  props: {
    demo: {
      type: String,
      default: ""
    }
  }
};
</script>