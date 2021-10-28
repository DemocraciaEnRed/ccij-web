<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered is-size-4-touch">
          Coming soon
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.$t('contact.head.title')} - ${this.$t('head.title')}`,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$t('head.description') },
        { name: 'title', content: this.$t('head.title') },
        { name: 'description', content: this.$t('head.description') },
        { property: 'og:title', content: this.$t('head.title') },
        { property: 'og:description', content: this.$t('head.description') },
        { property: 'twitter:title', content: this.$t('head.title') },
        { property: 'twitter:description', content: this.$t('head.description') },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>
