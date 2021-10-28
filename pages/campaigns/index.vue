<template>
  <div class="section">
    <div class="my-6">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title is-1 has-text-centered is-uppercase">
              {{ $t('campaigns.title') }}
            </h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from '@/components/campaigns/List.vue'
export default {
  components: {
    List
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.$t('campaigns.head.title')} - ${this.$t('head.title')}`,
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
