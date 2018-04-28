<template lang="pug">
.group.is-wrap
  .inner
    .group(v-if="demo === 'basic'")
      p.texts.is-xl.is-danger
        i.fas.fa-heart(aria-hidden="true")
        span.text ハート
        i.fas.fa-heart(aria-hidden="true")
        span.text.is-demo-space-filter-2 ハート
        i.fas.fa-heart(aria-hidden="true")
        span.text ハート
        span.icon.is-demo-space-filter-2
          i.fas.fa-heart(aria-hidden="true")
        span.text ハート
        i.fas.fa-heart(aria-hidden="true")
    .group(v-else-if="demo === 'fit'")
      .grid
        .col
          p.texts.is-xxl
            span.text.is-demo-space-filter-3
              i.fas.fa-archive(aria-hidden="true")
              br
              i.fas.fa-angle-right(aria-hidden="true")
        .col
          p.texts.is-xxl.is-success
            span.text.is-demo-space-filter-3
              i.fas.fa-archive.is-fit(aria-hidden="true")
              br
              i.fas.fa-angle-right.is-fit(aria-hidden="true")
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