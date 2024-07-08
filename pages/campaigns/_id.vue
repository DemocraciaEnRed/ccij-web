<template>
  <div>
    <div class="has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column picture-column" :style="`background-image: url('${$config.directusUrl}/assets/${campaign.image_cover.id}')`" />
          <div class="column is-6 has-background-white">
            <div class="p-5">
              <h1 class="title is-3 my-6">
                {{ campaign.translations[0].title }}
              </h1>
              <div class="is-flex is-flex-direction-row is-justify-content-right is-align-items-center my-4">
                <div>
                  <a href="#the-body" class="button is-primary is-outlined is-fullwidth is-uppercase">{{ $t("campaign.readMore") }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container has-text-centered is-size-5">
        <p>{{ $t("campaign.yourVoice") }}</p>
        <p>{{ $t("campaign.whatAreYouWaiting") }}</p>
      </div>
    </div>
    <div id="activate" class="section py-5 has-background-light with-arrow-down-blue">
      <div class="container">
        <h1 class="subtitle is-3 is-size-5-touch is-500 has-text-centered">
          {{ $t("campaign.chooseTheMedium") }}
        </h1>
        <h1 class="title is-1 is-size-4-touch is-800 has-text-centered">
          {{ $t("campaign.activateTheCampaign") }}
        </h1>
      </div>
    </div>
    <div class="section px-0">
      <div class="mx-0">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(action,i) in campaign.actions" :key="`campaign-${campaign.id}-action-${i}`">
            <div class="action-box is-flex is-flex-direction-column is-justify-content-space-between is-align-content-center">
              <div class="has-text-centered" style="width: 100%;">
                <img :src="`${$config.directusUrl}/assets/${action.actions_id.icon.id}`" width="70" class="image mx-auto mb-3" alt="">
                <h5 class="title is-6">
                  {{ action.translations[0].title }}
                </h5>
              </div>
              <div class="has-text-centered" style="width: 100%;">
                <p class="is-size-7">
                  {{ action.translations[0].description }}
                </p>
              </div>
              <a v-if="!action.translations[0].suggested_text" target="_blank" class="button is-primary is-outlined is-uppercase is-fullwidth" @click="openURL(action, action.translations[0].call_to_action_url)">{{ action.translations[0].call_to_action_label }}</a>
              <a v-else target="_blank" class="button is-primary is-outlined is-uppercase is-fullwidth" @click="openModal(action)">{{ action.translations[0].call_to_action_label }}</a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <div id="the-body" class="section has-background-white-ter with-arrow-down">
      <div class="container">
        <h1 class="title is-3 is-size-4-touch has-text-centered">
          {{ $t('campaign.learnMore') }}
        </h1>
      </div>
    </div>
    <div class="section my-5">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <img :src="`${$config.directusUrl}/assets/${campaign.image_cover.id}`" class="image mx-auto mb-5" alt="">
            <div class="content has-text-justified" v-html="campaign.translations[0].description" />
            <div class="my-6">
              <h1 class="title is-light is-3 is-size-4-touch has-text-centered">
                {{ $t("campaign.doYouWantTo") }}
              </h1>
              <div class="buttons is-centered">
                <a href="#activate" class="button is-flex-grow-1 is-primary is-uppercase">{{ $t("campaign.activateCampaign") }}</a>
                <nuxt-link tag="div" :to="localePath('/campaigns')" class="button is-flex-grow-1 is-light is-uppercase">
                  {{ $t("campaign.checkOtherCampaigns") }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuggestionModal from '@/components/campaign/SuggestionModal.vue'
export default {
  layout: 'campaign',
  async asyncData ({ params, $axios, i18n, $router }) {
    const theQuery = {
      query: `
      {
        campaigns_by_id (id:${params.id}){
          id
          status
          image_cover {
            id
          }
          translations (filter: {languages_code: {id: { _eq: "${i18n.locale}"}}}) {
            title
            short_description
            description
          }
          actions (sort: ["sort"]){
            actions_id {
              name
              icon {
                id
              }
              translations (filter: {languages_id: {id: { _eq: "${i18n.locale}"}}}){
                name
              }
            }
            translations (filter: {languages_code: {id: { _eq: "${i18n.locale}"}}}) {
              title
              description
              call_to_action_url
              call_to_action_label
              suggested_text
            }
          }
        }
      }
      `
    }
    try {
      const response = await $axios.post('/graphql', theQuery)
      // if status is not published, redirect to home
      // if (response.data.data.campaigns_by_id.status !== 'published') {
      //   $router.push('/')
      // }
      return {
        campaign: response.data.data.campaigns_by_id
      }
    } catch (err) {
      // eslint-disable-nex t-line no-console
      console.error(err.response.data.errors[0].extensions)
    }
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 5,
        autoplaySpeed: 8000,
        arrows: true,
        centerMode: true,
        autoplay: true,
        centerPadding: '30px',
        adaptiveHeight: true,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1393,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: true
            }
          }
        ]
      }
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.campaign.translations[0].title} - ${this.$t('head.title')}`,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { hid: 'description', name: 'description', content: this.campaign.translations[0].short_description },
        { name: 'title', content: this.campaign.translations[0].title },
        { name: 'description', content: this.campaign.translations[0].short_description },
        { property: 'og:title', content: this.campaign.translations[0].title },
        { property: 'og:description', content: this.campaign.translations[0].short_description },
        { property: 'twitter:title', content: this.campaign.translations[0].title },
        { property: 'twitter:description', content: this.campaign.translations[0].short_description },
        { property: 'og:url', content: `https://takeaction.ccijustice.org/${this.localePath('/campaigns/' + this.campaign.id)}` },
        { property: 'twitter:url', content: `https://takeaction.ccijustice.org/${this.localePath('/campaigns/' + this.campaign.id)}` },

        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  },
  beforeMount () {
    console.log(this.campaign.status)
  },
  methods: {
    // convert a string to slug
    slugify (text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        // eslint-disable-next-line no-useless-escape
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        // eslint-disable-next-line no-useless-escape
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    },
    info (value) {
      this.test = value
    },
    openURL (action, url) {
      const actionSlug = this.slugify(action.actions_id.name)
      const gaEventParams = {
        event_category: `actions-campaign-${this.campaign.id}`,
        event_label: action.translations[0].call_to_action_label
      }
      this.$gtag('event', actionSlug, gaEventParams)
      window.open(url, '_blank')
    },
    openModal (action) {
      const actionSlug = this.slugify(action.actions_id.name)
      const gaEvent = {
        event_category: `actions-campaign-${this.campaign.id}`,
        event_action: actionSlug,
        event_label: action.translations[0].call_to_action_label
      }
      this.$buefy.modal.open({
        parent: this,
        component: SuggestionModal,
        hasModalCard: true,
        props: {
          action,
          gaEvent
        },
        trapFocus: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.action-box{
  padding: 1.5rem;
  height: 400px;
  border: 1px solid #da0505;
  margin: 20px 20px;
  border-radius: 20px;
  box-shadow: none;
  transition: box-shadow 1s ease;
  transition: opacity 1s ease;
}
.action-box .button{
  white-space: normal;
  height: auto;
}
.slick-current .action-box{
  border-color: #A73E24;
  box-shadow: 0px 0px 10px #a73e2473;
}
.slick-current .action-box{
  border-color: #A73E24;
  box-shadow: 0px 0px 10px #a73e2473;
}
.slick-slide:not(.slick-current) .action-box{
  opacity: 0.6;
}
.picture-column{
  background-size: cover;
  background-position: center center;
  @include until($tablet){
    height: 200px;
  }
}
.carousel-wrapper {
  padding: 40px;
}
</style>
