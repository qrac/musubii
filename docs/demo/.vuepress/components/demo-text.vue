<template lang="pug">
.group.is-wrap
  .inner
    .group(v-if="demo === 'basic'")
      p.texts
        span.text デフォルト
        | ｜
        strong.text.is-strong ストロング
        | ｜
        small.text.is-small スモール
        | ｜
        span.text.is-italic Italic
        | ｜
        del.text.is-delete 削除
        | ｜
        span.text
          i.fas.fa-thumbs-up(aria-hidden="true")
          span.text アイコン追加
          i.material-icons face
        | ｜
        span.text
          span.text 注釈入れ
          sup ※1
    .group(v-else-if="demo === 'dark'")
      p.texts
        span.text.is-dark ダーク
        - for (var i = 1; i <= 9; i++)
          | &nbsp;
          span.text(class="is-dark-"+i)= "ダーク" + i
    .group(v-else-if="demo === 'light'")
      .group.is-wrap.is-paint
        p.texts
          span.text.is-light ライト
          - for (var i = 1; i <= 9; i++)
            | &nbsp;
            span.text(class="is-light-"+i)= "ライト" + i
    .group(v-else-if="demo === 'color'")
      p.texts
        span.text Normal
        | ｜
        span.text.is-primary Primary
        | ｜
        span.text.is-info Info
        | ｜
        span.text.is-success Success
        | ｜
        span.text.is-warning Warning
        | ｜
        span.text.is-danger Danger
    .group.is-space(v-else-if="demo === 'link'")
      p.texts
        a.text.is-link(href="") Link
        | ｜
        a.text.is-link.is-primary(href="") Primary
        | ｜
        a.text.is-link.is-info(href="") Info
        | ｜
        a.text.is-link.is-success(href="") Success
        | ｜
        a.text.is-link.is-warning(href="") Warning
        | ｜
        a.text.is-link.is-danger(href="") Danger
      p.texts
        a.text.is-link-reverse(href="") Link reverse
        | ｜
        a.text.is-link-reverse.is-primary(href="") Primary
        | ｜
        a.text.is-link-reverse.is-info(href="") Info
        | ｜
        a.text.is-link-reverse.is-success(href="") Success
        | ｜
        a.text.is-link-reverse.is-warning(href="") Warning
        | ｜
        a.text.is-link-reverse.is-danger(href="") Danger
    .group(v-else-if="demo === 'size'")
      p.texts
        span.text.is-xxs 極小
        span.text.is-xs 小さい
        span.text.is-sm 小さめ
        span.text.is-md 中くらい
        span.text.is-lg 大きめ
        span.text.is-xl 大きい
        span.text.is-xxl 特大
    .group(v-else-if="demo === 'align'")
      p.texts.is-left 左寄せのテキスト
      p.texts.is-center 中央寄せのテキスト
      p.texts.is-right 右寄せのテキスト
    .group(v-else-if="demo === 'transform'")
      p.texts
        span.text.is-capitalize capitalize
        | ｜
        span.text.is-lowercase lowercase
        | ｜
        span.text.is-uppercase uppercase
    .group(v-else-if="demo === 'ellipsis'")
      p.texts.is-sm.is-ellipsis
        | テキストを端で折り返さずに、三点リーダーで省略するスタイリング。テキストを端で折り返さずに、三点リーダーで省略するスタイリング。テキストを端で折り返さずに、三点リーダーで省略するスタイリング。
    .group(v-else-if="demo === 'blockquote'")
      blockquote.blockquote
        | 引用の「blockquote」を使う場合。border-left と background-color を用いた装飾。
    .group.is-space(v-else-if="demo === 'code'")
      p.texts
        | テキストの途中に&nbsp;
        code.code code
        | &nbsp;を表示させる。
      pre.pre
        code.code.css.
          html {
            box-sizing: border-box;
            font-family: sans-serif;
            overflow-y: scroll;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
          }
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