<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10">
            <div v-if="homepage" class="box has-background-light has-text-centered has-text-primary p-6">
              {{ homepage.introduction_box }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section py-5 has-background-light">
      <div class="container">
        <h1 class="title is-1 is-800 has-text-centered">
          {{ $t("homepage.checkOurCampaigns") }}
        </h1>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10">
            <CampaignCarrousel />
          </div>
        </div>
      </div>
    </div>
    <div class="section has-background-white-ter">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="buttons is-centered">
              <nuxt-link :to="localePath('/campaigns')" class="button is-primary is-outlined is-uppercase">
                {{ $t('homepage.checkAllTheCampaigns') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <h1 class="title has-text-grey has-text-centered is-800">
          {{ homepage.about_title }}
        </h1>
        <div class="columns my-6 is-centered">
          <div class="column is-3">
            <img :src="`${$config.directusUrl}/assets/${homepage.about_column_left_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
            <div class="content has-text-centered">
              <p>{{ homepage.about_column_left_description }}</p>
              <p><a :href="homepage.about_column_left_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_left_call_to_action_label }} &gt;</a></p>
            </div>
          </div>
          <div class="column is-3">
            <img :src="`${$config.directusUrl}/assets/${homepage.about_column_middle_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
            <div class="content has-text-centered">
              <p>{{ homepage.about_column_middle_description }}</p>
              <p><a :href="homepage.about_column_middle_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_middle_call_to_action_label }} &gt;</a></p>
            </div>
          </div>
          <div class="column is-3">
            <img :src="`${$config.directusUrl}/assets/${homepage.about_column_right_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
            <div class="content has-text-centered">
              <p>{{ homepage.about_column_right_description }}</p>
              <p><a :href="homepage.about_column_right_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_right_call_to_action_label }} &gt;</a></p>
            </div>
          </div>
        </div>
        <div class="columns my-6 is-centered">
          <div class="column is-4">
            <h1 class="title has-text-primary has-text-centered is-800">
              {{ $t('homepage.knowOurWork') }}
            </h1>
            <div class="buttons">
              <nuxt-link :to="localePath('/our-work')" class="button is-primary is-fullwidth is-uppercase">
                {{ $t('homepage.getToKnowUs') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignCarrousel from '../components/index/CampaignCarrousel.vue'
export default {
  name: 'HomePage',
  components: {
    CampaignCarrousel
  },
  async asyncData ({ params, $axios, i18n }) {
    const theQuery = {
      query: `
      {
        homepage_translations(filter: {languages_code: { id: {_eq: "${i18n.locale}"}}}) {
          introduction_box
          about_title
          about_column_left_description
          about_column_left_call_to_action_label
          about_column_left_call_to_action_url
          about_column_left_picture{
            id
          }
          about_column_middle_description
          about_column_middle_call_to_action_label
          about_column_middle_call_to_action_url
          about_column_middle_picture{
            id
          }
          about_column_right_description
          about_column_right_call_to_action_label
          about_column_right_call_to_action_url
          about_column_right_picture{
            id
          }
        }
      } 
      `
    }
    try {
      const response = await $axios.post('/graphql', theQuery)
      return {
        homepage: response.data.data.homepage_translations[0]
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.response)
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('head.title'),
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
// .picture-column{
//   background-image: url('~/assets/img/takeaction-bg.png');
//   background-size: cover;
//   background-position: center center;
//   @include until($tablet){
//     height: 200px;
//   }
// }
</style>
