<template lang="pug">
.group.is-wrap
  .inner
    .group.is-space(v-if="demo === 'basic'")
      each val, index in {1:"xxl", 2:"xl", 3:"lg", 4:"md", 5:"sm", 6:"xs"}
        p.heading(class="is-"+val)= index + "番目に大きな見出し"
      each val, index in {1:"xxl", 2:"xl", 3:"lg", 4:"md", 5:"sm", 6:"xs"}
        p.heading.is-strong(class="is-"+val)= index + "番目に大きな見出し"
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