<template lang="pug">
.group.is-wrap
  .inner
    .group(v-if="demo === 'basic'")
      .grid
        - for (var i = 1; i <= 3; i++)
          .col.is-mobile-12.is-desktop-4
            .group.is-demo-box-1.is-primary.is-center.is-round.is-strong
              | .col .is-mobile-12 .is-desktop-4
    .group.is-space(v-else-if="demo === 'flex'")
      - for (var i = 1; i <= 12; i++)
        .grid
          .col.is-stretch(class="is-mobile-"+i)
            .group.is-demo-box-1.is-primary.is-center.is-round.is-strong
              | #{i}
          .col.is-stretch.is-mobile-0
            .group.is-demo-box-1.is-grey.is-center.is-round.is-strong
              | 0
    .group.is-space(v-else-if="demo === 'position'")
      each val in ["middle", "bottom", "center", "right", "between", "around"]
        .group.is-demo-box-3.is-grey.is-round
          case val
            when "middle"
            when "bottom"
              .grid.is-demo-box-1.is-height-1(class="is-"+val)
                .col
                  .group.is-demo-box-3.is-primary.is-round.is-strong= ".is-" + val
                .col
                  .group.is-demo-box-3.is-primary.is-round.is-strong= ".is-" + val
            default
              .grid.is-demo-box-1(class="is-"+val)
                .col
                  .group.is-demo-box-3.is-primary.is-round.is-strong= ".is-" + val
                .col
                  .group.is-demo-box-3.is-primary.is-round.is-strong= ".is-" + val
    .group(v-else-if="demo === 'stretch'")
      .grid.is-stretch
        .col.is-mobile-0
          .group.is-demo-box-1.is-grey.is-center.is-round.is-strong
            | .is-stretch
            br
            | ↓
            br
            | ↓
            br
            | ↓
        .col.is-mobile-0
          .group.is-demo-box-1.is-primary.is-center.is-round.is-strong
            | .is-stretch
    .group(v-else-if="demo === 'reverse'")
      .grid.is-reverse
        .col.is-mobile-0
          .group.is-demo-box-1.is-grey.is-center.is-round.is-strong
            | 1st column
        .col.is-mobile-0
          .group.is-demo-box-1.is-primary.is-center.is-round.is-strong
            | 2nd column
    .group(v-else-if="demo === 'gap'")
      .grid.is-gap-none
        .col.is-mobile-0
          .group.is-demo-box-1.is-grey.is-center.is-round.is-strong
            | .is-gap-none
        .col.is-mobile-0
          .group.is-demo-box-1.is-primary.is-center.is-round.is-strong
            | .is-gap-none
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