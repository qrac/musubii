<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <router-link :to="$localePath" class="home-link">
      <img class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)">
    </router-link>
    <div class="links">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "./SearchBox.vue";
import NavLinks from "./NavLinks.vue";

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/_config.scss";
@import "~moftone/src/scss/tone/_moftone.scss";
@import "~sass-dashi/src/scss/_dashi.scss";

.navbar {
  position: relative;
  padding: 0.7rem 1.5rem;
  font-family: Nunito, $font-sans;
  line-height: $navbarHeight - 1.4rem;
  a,
  span,
  img {
    display: inline-block;
  }
  .logo {
    min-width: $navbarHeight - 1.4rem;
    width: auto;
    height: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }
  .site-name {
    position: relative;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .links {
    position: absolute;
    top: 0.7rem;
    right: 1.5rem;
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;
    .can-hide {
      display: none;
    }
  }
}
</style>