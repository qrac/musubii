<template lang="pug">
.group.is-wrap
  .inner
    .group.is-space(v-if="demo === 'basic'")
      p.heading.is-xl.is-demo-space-filter-1 見出し
      p.texts.is-demo-space-filter-1 テキストテキストテキストテキストテキストテキスト
      p.heading.is-xl.is-demo-space-filter-1 見出し
      p.texts.is-demo-space-filter-1 テキストテキストテキストテキストテキストテキスト
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