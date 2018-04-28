<template lang="pug">
.group.is-wrap
  .inner
    .group.is-space(v-if="demo === 'basic'")
      .alert
        i.fas.fa-thumbs-up.is-fit(aria-hidden="true")
        span.text アプリの通知設定へようこそ！
      .alert.is-primary
        i.fas.fa-thumbs-up.is-fit(aria-hidden="true")
        span.text アプリの通知設定へようこそ！
      .alert.is-info
        i.fas.fa-info-circle.is-fit(aria-hidden="true")
        span.text 通知設定に関するチュートリアルはこちら。
      .alert.is-success
        i.fas.fa-check.is-fit(aria-hidden="true")
        span.text 通知設定は自動的に保存されました。
      .alert.is-warning
        i.fas.fa-exclamation-triangle.is-fit(aria-hidden="true")
        span.text 通知設定はアクティベートされていません。
      .alert.is-danger
        i.fas.fa-times.is-fit(aria-hidden="true")
        span.text 通知設定は削除されました。
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