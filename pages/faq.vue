/* eslint-disable vue/no-v-html */
<template>
  <div>
    <div class="section my-6">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title is-3 has-text-centered has-text-primary">
              FAQs
            </h1>
            <p class="has-text-centered has-text-grey">
              {{ $t('faqs.description') }}
            </p>
            <hr>
            <div class="content" v-html="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData ({ params, $axios, i18n }) {
    const theQuery = {
      query: `
      {
        faq_translations(filter: {languages_code: {id: {_eq: "${i18n.locale}"}}}){
          text
        }
      } 
      `
    }
    try {
      const response = await $axios.post('/graphql', theQuery)
      return {
        text: response.data.data.faq_translations[0].text
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.response)
    }
  },
  data () {
    return {
      text: null
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.$t('faqs.head.title')} - ${this.$t('head.title')}`,
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

<style lang="scss" scoped>
// .content h1,
// .content h2,
// .content h3,
// .content h4,
// .content h5,
// .content h6 {
//   color: #A7BEE2;
//   font-weight: 700;
// }
// // .semi-primary-color {
// //   color: ##A7BEE2;
// // }
</style>
