<template>
  <div class="home is-wide-lg">

    <section class="section is-hero">
      <div class="inner-soft">
        <div class="grid is-middle is-center is-gap-6x">
          <div class="col is-space">
            <p class="heading is-light is-weight-700" v-if="data.hero.heading1">
              <span class="text is-block is-hero-1">{{ data.hero.heading1 }}</span>
              <span class="text is-block is-hero-2" v-if="data.hero.heading2">{{ data.hero.heading2 }}</span>
            </p>
            <h1 class="texts is-light is-sm" v-if="data.hero.texts">
              <span class="text is-fablet-block" v-for="text in data.hero.texts">{{ text }}</span>
            </h1>
            <div class="btns is-center is-lg" v-if="data.download.path">
              <a class="btn is-plain is-round is-mobile-full is-weight-900 is-cyan is-font-nunito" :href="data.download.path" :download="data.download.file">
                <i class="fas fa-cloud-download-alt" aria-hidden="true"></i>
                <span class="text">{{ data.download.text }}</span>
              </a>
            </div>
            <p class="texts is-light is-center is-sm is-font-nunito" v-if="repoLink">
              <i class="fab fa-github" aria-hidden="true"></i>
              <span class="text" v-if="data.version">v{{ data.version }}・</span>
              <a class="text is-link-reverse" :href="repoLink">
                <span class="text">Repository</span>
              </a>
              <span class="text" v-if="repoRelease">・</span>
              <a class="text is-link-reverse" v-if="repoRelease" :href="repoRelease">
                <span class="text">Releases</span>
              </a>
            </p>
          </div>
          <div class="col" v-if="data.hero.image">
            <img class="obj is-hero-illust" :src="$withBase(data.hero.image)" alt="hero">
          </div>
        </div>
      </div>
    </section>

    <section class="section is-about" v-if="data.about.heading">
      <div class="inner-vw is-space">
        <h2 class="heading is-primary is-strong is-center is-lg is-fablet-xl is-tablet-xxl">{{ data.about.heading }}</h2>
        <p class="texts is-sm is-center" v-if="data.about.texts1">
          <span class="text is-inline-block" v-for="text in data.about.texts1">{{ text }}</span>
          <br>
          <span class="text is-inline-block" v-for="text in data.about.texts2">{{ text }}</span>
        </p>
      </div>
    </section>

    <section class="section is-feature" v-for="feature in data.features">
      <div class="inner-vw">
        <div class="grid is-middle is-center is-gap-3x">
          <div class="col" v-if="feature.image">
            <img class="obj is-home-point-illust is-desktop-lg is-wide-xl" :src="$withBase(feature.image)" alt="feature">
          </div>
          <div class="col">
            <div class="group is-home-point-textbox is-space">
              <h2 class="heading is-xl" v-if="feature.heading">
                <span class="text">{{ feature.heading }}</span>
                <span class="obj is-badge is-new" v-if="feature.new === true"><span class="text">NEW</span></span>
              </h2>
              <p class="texts is-sm" v-if="feature.text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="section is-footer">
      <div class="inner">
        <div class="grid is-center is-gap-2x">
          <div class="col" v-if="data.footer.license">
            <p class="text is-sm is-light">
              <span class="text">License:&nbsp;</span>
              <i :class="data.footer.license.icon" aria-hidden="true" v-if="data.footer.license.icon"></i>
              <span class="text">{{ data.footer.license.name }}</span>
            </p>
          </div>
          <div class="col" v-if="data.footer.author">
            <p class="text is-sm is-light">
              <span class="text">Author:&nbsp;</span>
              <i :class="data.footer.author.icon" aria-hidden="true" v-if="data.footer.author.icon"></i>
              <a class="text is-link-reverse" :href="data.footer.author.link" v-if="data.footer.author.link">{{ data.footer.author.name }}</a>
              <span class="text" v-else="data.footer.author.link">{{ data.footer.author.name }}</span>
            </p>
          </div>
          <div class="col" v-if="data.footer.copylight">
            <p class="text is-sm is-light">
              <span class="text">©&nbsp;</span>
              <a class="text is-link-reverse" :href="data.footer.copylight.link" v-if="data.footer.copylight.link">{{ data.footer.copylight.name }}</a>
              <span class="text" v-else="data.footer.copylight.link">{{ data.footer.copylight.name }}</span>
              <span class="text">&nbsp;{{ copylightYear }}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
    },
    repoRelease() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}/releases`;
      }
    },
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>