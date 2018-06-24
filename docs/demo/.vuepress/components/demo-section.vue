<template lang="pug">
.group.is-wrap
  .inner
    .group.is-demo-box-2.is-strong.is-primary.is-round(v-if="demo === 'basic'")
      .group.is-demo-box-1
        | .section
        .grid.is-gap-none
          .col.is-mobile-1
          .col.is-mobile-10
            .group.is-demo-box-2.is-grey.is-round
              .group.is-demo-box-1.is-height-1
                | .inner {
                br
                | &nbsp;&nbsp;width: 540px, 720px, 960px, 1140px;
                br
                | &nbsp;&nbsp;padding: 0 16px;
                br
                | }
    .group.is-demo-box-2.is-strong.is-primary.is-round(v-else-if="demo === 'soft'")
      .group.is-demo-box-1
        | .section
        .group.is-demo-box-2.is-grey.is-round
          .group.is-demo-box-1.is-height-1
            | .inner-soft {
            br
            | &nbsp;&nbsp;padding: 0 1em;
            br
            | }
    .group.is-demo-box-2.is-strong.is-primary.is-round(v-else-if="demo === 'vw'")
      .group.is-demo-box-1
        | .section
        .grid.is-gap-none
          .col.is-mobile-1
          .col.is-mobile-10
            .group.is-demo-box-2.is-grey.is-round
              .group.is-demo-box-1.is-height-1
                | .inner-vw {
                br
                | &nbsp;&nbsp;width: 90vw;
                br
                | &nbsp;&nbsp;padding: 0 1em;
                br
                | }
          .col.is-mobile-1
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