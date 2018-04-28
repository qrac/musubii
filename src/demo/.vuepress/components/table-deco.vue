<template lang="pug">
.group
  - var media_first = ["mobile", "fablet", "tablet", "desktop", "wide"]
  - var media_only = ["mobile-only", "fablet-only", "tablet-only", "desktop-only"]
  - var media_range = ["mobile-fablet", "mobile-tablet", "mobile-desktop"]
  - var media_direction = ["landscape", "portrait"]
  - var deco_dark = {"1":"dark", "0.87":"dark-1", "0.7":"dark-2", "0.6":"dark-3", "0.5":"dark-4", "0.4":"dark-5", "0.26":"dark-6", "0.15":"dark-7", "0.12":"dark-8", "0.05":"dark-9"}
  - var deco_light = {"1":"light", "0.87":"light-1", "0.7":"light-2", "0.6":"light-3", "0.5":"light-4", "0.4":"light-5", "0.26":"light-6", "0.15":"light-7", "0.12":"light-8", "0.05":"light-9"}
  - var deco_color = {"シアン":"primary", "ブルー":"info", "グリーン":"success", "オレンジ":"warning", "レッド":"danger"}
  - var deco_weight1 = {"400":"normal", "700":"strong"}
  - var deco_weight2 = {"100":"weight-100", "200":"weight-200", "300":"weight-300", "400":"weight-400", "500":"weight-500", "700":"weight-700", "900":"weight-900"}
  - var deco_style = {"イタリック":"italic", "打ち消し":"delete", "capitalize":"capitalize", "lowercase":"lowercase", "uppercase":"uppercase"}
  - var deco_position = {"left":"left", "center":"center", "right":"right", "justify":"justify", "baseline":"baseline", "top":"top", "middle":"middle", "bottom":"bottom"}
  - var deco_position_min = {"left":"left", "center":"center", "right":"right"}
  - var deco_function1 = {"文字が端で折り返さない":"nowrap", "文字が端で折り返す":"break"}
  - var deco_function2 = {"ブロック要素を中央寄せ":"centering", "直下のコンテンツを横スクロール":"scroll-x", "3点リーダーで省略":"ellipsis"}
  .group.is-space(v-if="table === 'basic'")
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_dark
              td(class="is-"+val)= ".is-" + val
          tr
            td.box.is-paint Text Alpha
            each val, index in deco_dark
              td(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_light
              td.box.is-paint(class="is-"+val)= ".is-" + val
          tr
            td.box.is-paint Text Alpha
            each val, index in deco_light
              td.box.is-paint(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_color
              td= ".is-" + val
          tr
            td.box.is-paint Text Color
            each val, index in deco_color
              td
                span.text(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_weight1
              td= ".is-" + val
          tr
            td.box.is-paint Text Weight
            each val, index in deco_weight1
              td(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_weight2
              td= ".is-" + val
          tr
            td.box.is-paint Text Weight
            each val, index in deco_weight2
              td(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_style
              td= ".is-" + val
          tr
            td.box.is-paint Text Style
            each val, index in deco_style
              td(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_position
              td= ".is-" + val
          tr
            td.box.is-paint Text Position
            each val, index in deco_position
              td(class="is-"+val)= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_function1
              td= ".is-" + val
          tr
            td.box.is-paint Function
            each val, index in deco_function1
              td= index
    .group.is-scroll-x
      table.table.is-border.is-center.is-nowrap.is-sm
        tbody
          tr.box.is-stripe
            td.box.is-paint(width="150") Add Class
            each val, index in deco_function2
              td= ".is-" + val
          tr
            td.box.is-paint Function
            each val, index in deco_function2
              td= index
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
          each val, index in deco_position_min
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
          each val, index in deco_position_min
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
          each val, index in deco_position_min
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
          each val, index in deco_position_min
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