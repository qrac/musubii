<template lang="pug">
.group.is-wrap
  - var table_text_a = "見出しセル"
  - var table_text_b = "データセル"
  .inner
    .group(v-if="demo === 'basic'")
      table.table.is-stripe.is-border.is-center.is-middle
        thead
          tr.box.is-paint
            th(width="20")
            th= table_text_a
            th= table_text_a
            th(colspan="2")= table_text_a
        tbody
          tr
            td.box.is-paint(rowspan="2") #1
            td= table_text_b
            td= table_text_b
            td= table_text_b
            td= table_text_b
          tr
            td= table_text_b
            td.box.is-spot スポット表示
            td= table_text_b
            td= table_text_b
          tr
            td.box.is-paint #2
            td= table_text_b
            td= table_text_b
            td= table_text_b
            td= table_text_b
          tr
            td.box.is-paint #3
            td= table_text_b
            td= table_text_b
            td.box.is-danger エラー表示
            td= table_text_b
          tr
            td.box.is-paint #4
            td= table_text_b
            td= table_text_b
            td= table_text_b
            td= table_text_b
        tfoot
          tr
            th.box.is-right(colspan="5") テーブルフッター
    .group.is-space(v-else-if="demo === 'line'")
      each val in ["line", "outline", "border"]
        table.table(class="is-"+val)
          thead
            tr
              - for (var i = 1; i <= 5; i++)
                th= table_text_a
          tbody
            - for (var i = 1; i <= 2; i++)
              tr
                - for (var ib = 1; ib <= 5; ib++)
                  td= table_text_b
    .group(v-else-if="demo === 'align'")
      table.table.is-border.is-stripe
        thead
          tr
            th.box.is-left .box .is-left
            th.box.is-center .box .is-center
            th.box.is-right .box .is-right
        tbody
          tr
            td.box.is-left
              | .box .is-left
              br
              | .box .is-left
              br
              | .box .is-left
            td.box.is-center .box .is-center
            td.box.is-right.is-middle .box .is-right .is-middle
    .group.is-space(v-else-if="demo === 'paint'")
      table.table.is-border
        tbody
          tr
            td.box.is-paint .box .is-paint
            td.box.is-dark-6 default
          tr
            td.box.is-paint .box .is-paint
            td.box.is-spot .box .is-spot
          tr
            td.box.is-paint .box .is-paint
            td.box.is-danger .box .is-danger
      table.table.is-stripe.is-border
        thead
          tr
            - for (var i = 1; i <= 3; i++)
              th= table_text_a
        tbody
          - for (var i = 1; i <= 5; i++)
            tr
              - for (var ib = 1; ib <= 3; ib++)
                td= table_text_b
    .group.is-space(v-else-if="demo === 'scroll'")
      .group.is-scroll-x
        table.table.is-border.is-stripe.is-nowrap
          thead
            tr.box.is-paint
              - for (var i = 1; i <= 7; i++)
                th= table_text_a
          tbody
            - for (var i = 1; i <= 4; i++)
              tr
                - for (var ib = 1; ib <= 7; ib++)
                  td= table_text_b
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