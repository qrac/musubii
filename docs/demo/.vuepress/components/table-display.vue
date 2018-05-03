<template lang="pug">
.group
  - var media_first = ["mobile", "fablet", "tablet", "desktop", "wide"]
  - var media_only = ["mobile-only", "fablet-only", "tablet-only", "desktop-only"]
  - var media_range = ["mobile-fablet", "mobile-tablet", "mobile-desktop"]
  - var media_direction = ["landscape", "portrait"]
  - var display = {"block":"block", "inline":"inline", "inline-block":"inline-block", "none":"none"}
  .group.is-space(v-if="table === 'basic'")
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in display
              td= ".is-" + val
          tr
            td.box.is-paint Function
            each val, index in display
              td= "display: " + index + ";"
  .group.is-space(v-else-if="table === 'responsive'")
    .group.is-scroll-x
      table.table.is-sm.is-center.is-nowrap.is-middle.is-border
        thead
          tr.box.is-paint
            th(width="80")
            th
              p
                i.fa.fa-mobile(aria-hidden="true")
                span.text Mobile
                br
                span.text.is-sm all
            th
              p
                i.fa.fa-mobile(aria-hidden="true")
                span.text Fablet
                br
                span.text.is-sm 576px ~
            th
              p
                i.fa.fa-tablet(aria-hidden="true")
                span.text Tablet
                br
                span.text.is-sm 768px ~
            th
              p
                i.fa.fa-desktop(aria-hidden="true")
                span.text Desktop
                br
                span.text.is-sm 992px ~
            th
              p
                i.fa.fa-desktop(aria-hidden="true")
                span.text Wide
                br
                span.text.is-sm 1200px ~
        tbody
          each val, index in display
            tr
              td
                p.text.is-sm
                  span= index
              each val2 in media_first
                td
                  p
                    span.text= ".is-" + val2 + "-" + val
    .group.is-scroll-x
      table.table.is-sm.is-center.is-nowrap.is-middle.is-border
        thead
          tr.box.is-paint
            th(width="80")
            th
              p
                i.fa.fa-mobile(aria-hidden="true")
                span.text Mobile Only
                br
                span.text.is-sm ~ 575px
            th
              p
                i.fa.fa-mobile(aria-hidden="true")
                span.text Fablet Only
                br
                span.text.is-sm 576px ~ 767px
            th
              p
                i.fa.fa-tablet(aria-hidden="true")
                span.text Tablet Only
                br
                span.text.is-sm 768px ~ 991px
            th
              p
                i.fa.fa-desktop(aria-hidden="true")
                span.text Desktop Only
                br
                span.text.is-sm 992px ~ 1199px
        tbody
          each val, index in display
            tr
              td
                p.text.is-sm
                  span= index
              each val2 in media_only
                td
                  p
                    span.text= ".is-" + val2 + "-" + val
    .group.is-scroll-x
      table.table.is-sm.is-center.is-nowrap.is-middle.is-border
        thead
          tr.box.is-paint
            th(width="80")
            th
              p
                i.fa.fa-mobile.is-fit(aria-hidden="true")
                i.fa.fa-mobile.is-fit(aria-hidden="true")
                span.text Mobile ~ Fablet
                br
                span.text.is-sm ~ 767px
            th
              p
                i.fa.fa-mobile.is-fit(aria-hidden="true")
                i.fa.fa-tablet.is-fit(aria-hidden="true")
                span.text Mobile ~ Tablet
                br
                span.text.is-sm ~ 991px
            th
              p
                i.fa.fa-mobile.is-fit(aria-hidden="true")
                i.fa.fa-desktop.is-fit(aria-hidden="true")
                span.text Mobile ~ Desktop
                br
                span.text.is-sm ~ 1199px
        tbody
          each val, index in display
            tr
              td
                p.text.is-sm
                  span= index
              each val2 in media_range
                td
                  p
                    span.text= ".is-" + val2 + "-" + val
    .group.is-scroll-x
      table.table.is-sm.is-center.is-nowrap.is-middle.is-border
        thead
          tr.box.is-paint
            th(width="80")
            th
              p
                i.fa.fa-mobile.fa-rotate-270(aria-hidden="true")
                span.text Landscape
                br
                span.text.is-sm landscape & ~ 991px
            th
              p
                i.fa.fa-mobile(aria-hidden="true")
                span.text Portrait
                br
                span.text.is-sm portrait & ~ 991px
        tbody
          each val, index in display
            tr
              td
                p.text.is-sm
                  span= index
              each val2 in media_direction
                td
                  p
                    span.text= ".is-" + val2 + "-" + val
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