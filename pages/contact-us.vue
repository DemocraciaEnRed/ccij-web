<template>
  <div>
    <div class="section my-6">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title is-3 has-text-centered">
              {{ $t('contact.head.title') }}
            </h1>
            <p class="has-text-centered is-size-5">
              {{ $t('contact.title') }}
            </p>
            <div class="mt-6 is-flex is-justify-content-space-evenly">
              <a href="https://www.facebook.com/CCIJustice"><i class="fab fa-facebook-f fa-fw is-size-3" /></a>
              <a href="https://www.instagram.com/ccijustice/"><i class="fab fa-instagram fa-fw is-size-3" /></a>
              <a href="https://twitter.com/ccijustice"><i class="fab fa-twitter fa-fw is-size-3" /></a>
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F65597301%2Fadmin%2F"><i class="fab fa-linkedin fa-fw is-size-3" /></a>
            </div>
            <div class="content" v-html="text" />
          </div>
        </div>
         <div class="columns is-centered">
            <div class="column is-6">
              <hr>
              <a href="https://ccijustice.org/contact-us/" class="mt-6 button is-primary is-outlined is-fullwidth is-uppercase">{{ $t('contact.buttonQuestions') }}</a>
              <a href="https://ccijustice.org/contact-us/" class="py-2 my-4 button is-primary is-outlined is-fullwidth is-uppercase">{{ $t('contact.buttonPlatform') }}</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios, i18n }) {
    const theQuery = {
      query: `
      {
        contact_translations(filter: {languages_code: {id: {_eq: "${i18n.locale}"}}}){
          text
        }
      } 
      `
    }
    try {
      const response = await $axios.post('/graphql', theQuery)
      return {
        text: response.data.data.contact_translations[0].text
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.response)
    }
  },
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
<style lang="scss">
a.button{
  white-space: break-spaces;
  height: auto;
}
</style>
