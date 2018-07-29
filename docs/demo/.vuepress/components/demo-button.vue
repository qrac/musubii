<template lang="pug">
.group.is-wrap
  mixin btn-basic(style)
    button.btn(class=style) 戻る
    button.btn.is-primary(class=style) 決定
    button.btn.is-success(class=style) 登録
    button.btn.is-danger(class=style) 削除
    button.btn.is-disable(class=style) 不可
    button.btn.is-primary(class=style)
      i.fas.fa-flag(aria-hidden="true")
      span.text FontAwesome
    button.btn.is-success(class=style)
      span.text FontAwesome
      i.fas.fa-angle-right.is-fit(aria-hidden="true")
    button.btn.is-primary(class=style)
      i.material-icons face
      span.text Material Icons
    button.btn.is-success(class=style)
      span.text Material Icons
      i.material-icons keyboard_arrow_right
  mixin btn-icon(style)
    button.btn(class=style)
      i.fas.fa-angle-left(aria-hidden="true")
    button.btn(class=style).is-primary
      i.fab.fa-twitter(aria-hidden="true")
    button.btn(class=style).is-success
      i.fas.fa-save(aria-hidden="true")
    button.btn(class=style).is-danger
      i.fas.fa-times(aria-hidden="true")
    button.btn(class=style).is-disable
      i.fas.fa-plus(aria-hidden="true")
  .inner
    .group.is-space(v-if="demo === 'plain'")
      .btns
        +btn-basic("is-plain")
    .group.is-space(v-else-if="demo === 'melt'")
      .btns
        +btn-basic("is-melt")
    .group.is-space(v-else-if="demo === 'outline'")
      .btns
        +btn-basic("is-outline")
    .group.is-space(v-else-if="demo === 'ghost'")
      .group.is-wrap.is-paint
        .btns
          +btn-basic("is-ghost")
    .group.is-space(v-else-if="demo === 'floating'")
      .btns
        +btn-basic("is-plain is-floating")
    .group.is-space(v-else-if="demo === 'round'")
      .btns
        +btn-basic("is-plain is-round")
      .group.is-wrap.is-paint
        .btns
          +btn-basic("is-ghost is-round")
    .group.is-space(v-else-if="demo === 'circle'")
      .btns
        +btn-icon("is-plain is-circle")
        +btn-icon("is-outline is-circle")
      .group.is-wrap.is-paint
        .btns
          +btn-icon("is-ghost is-circle")
    .group.is-space(v-else-if="demo === 'size'")
      .btns
        button.btn.is-plain.is-xxs 極小
        button.btn.is-plain.is-xs 小さい
        button.btn.is-plain.is-sm 小さめ
        button.btn.is-plain.is-md 中くらい
        button.btn.is-plain.is-lg 大きめ
        button.btn.is-plain.is-xl 大きい
        button.btn.is-plain.is-xxl 特大
      .btns.is-xxs
        - for (var i = 1; i <= 5; i++)
          button.btn.is-plain まとめて極小
    .group.is-space(v-else-if="demo === 'flex'")
      .btns
        +btn-basic("is-plain is-mobile-full is-tablet-0")
      .btns
        +btn-basic("is-outline is-mobile-full is-tablet-0")
      .group.is-wrap.is-paint
        .btns
          +btn-basic("is-ghost is-mobile-full is-tablet-0")
    .group.is-space(v-else-if="demo === 'position'")
      each val in ["left", "center", "right"]
        .btns(class="is-"+val)
          - for (var i = 1; i <= 3; i++)
            button.btn.is-plain= ".is-" + val
    .group.is-space(v-else-if="demo === 'bar'")
      .btns.is-bar.is-sm
        button.btn.is-plain
          i.fas.fa-align-left(aria-hidden="true")
          span.text 左寄せ
        button.btn.is-plain
          i.fas.fa-align-center(aria-hidden="true")
          span.text 中央寄せ
        button.btn.is-plain
          i.fas.fa-align-right(aria-hidden="true")
          span.text 右寄せ
      .btns.is-bar.is-sm
        button.btn.is-outline.is-mobile-0
          i.fas.fa-align-left(aria-hidden="true")
          span.text 左寄せ
        button.btn.is-outline.is-mobile-0
          i.fas.fa-align-center(aria-hidden="true")
          span.text 中央寄せ
        button.btn.is-outline.is-mobile-0
          i.fas.fa-align-right(aria-hidden="true")
          span.text 右寄せ
      .btns.is-bar.is-sm
        button.btn.is-outline.is-round.is-mobile-0 ラウンド
        button.btn.is-outline.is-round.is-mobile-0 ラウンド
        button.btn.is-outline.is-round.is-mobile-0 ラウンド
      .group.is-wrap.is-paint
        .btns
          .btns.is-bar.is-sm
            button.btn.is-ghost 松
            button.btn.is-ghost 桜
            button.btn.is-ghost 芒
            button.btn.is-ghost 雨
            button.btn.is-ghost 桐
          .btns.is-bar.is-sm
            button.btn.is-ghost 線と角丸
            button.btn.is-ghost 自動調整
          .btns.is-bar.is-sm
            button.btn.is-ghost.is-round ラウンド
            button.btn.is-ghost.is-round ラウンド
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