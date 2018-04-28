<template lang="pug">
.group
  - var media_first = ["mobile", "fablet", "tablet", "desktop", "wide"]
  - var media_only = ["mobile-only", "fablet-only", "tablet-only", "desktop-only"]
  - var media_range = ["mobile-fablet", "mobile-tablet", "mobile-desktop"]
  - var media_direction = ["landscape", "portrait"]
  - var clearfix = {"Floatの解除":"clearfix"}
  .group.is-space(v-if="table === 'basic'")
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in clearfix
              td= ".is-" + val
          tr
            td.box.is-paint Function
            each val, index in clearfix
              td= index
</template>

<script>
export default {
  props: {
    table: {
      type: String,
      default: ""
    }
  }
};
</script>