<template lang="pug">
.group.is-wrap
  - var list_text_a = "リストのテキストは1行目以外をインデントして読みやすくする"
  - var list_text_b = "リストを入れ子にした場合は、その分インデントを追加して構造を見せる"
  - var list_text_c = "自由にナンバリング付きの米印などを置ける注釈用のスタイル"
  mixin list-basic(style)
    ul.list(class=style)
      - for (var i = 1; i <= 3; i++)
        li.item= list_text_a
      li.item= list_text_a
        ul.list(class=style)
          - for (var i = 1; i <= 4; i++)
            li.item= list_text_b
  mixin list-num(style)
    ol.list(class=style)
      - for (var i = 1; i <= 3; i++)
        li.item= list_text_a
      li.item= list_text_a
        ol.list(class=style)
          - for (var i = 1; i <= 4; i++)
            li.item= list_text_b
  .inner
    .group.is-space(v-if="demo === 'basic'")
      +list-basic("is-disc")
      +list-basic("is-circle")
      +list-num("is-decimal")
    .group(v-else-if="demo === 'note'")
      ul.list.is-note
        li.item
          span.text ※1
          span.text= list_text_c
        li.item
          span.text ※2
          span.text= list_text_c
        li.item
          span.text ※3
          span.text= list_text_c
        li.item
          span.text ※
          span.text= list_text_c
        li.item
          span.text ※100
          span.text= list_text_c
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