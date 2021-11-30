<template>
  <div>
    <div class="relative-cover-container">
      <figure class="image is-3by1 cover-campaign" :style="`background-image: url('${$config.directusUrl}/assets/${campaign.image_cover.id}')`" />
      <div class="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
        <h1 class="title-campaign is-size-1 is-size-4-touch is-uppercase has-text-black is-800 px-5 has-text-centered is-italic">
          {{ campaign.translations[0].title }}
        </h1>
      </div>
    </div>
    <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center my-4 is-hidden-touch">
      <div class="has-background-light p-5 mr-5 is-flex-grow-1">
        <p>
          {{ campaign.translations[0].short_description }}
        </p>
      </div>
      <div>
        <nuxt-link :to="localePath(`/campaigns/${campaign.id}#activate`)" class="button is-primary is-fullwidth mb-4">
          {{ $t('homepage.campaignCarrousel.activate') }}
        </nuxt-link>
        <nuxt-link :to="localePath(`/campaigns/${campaign.id}#the-body`)" class="button is-light is-fullwidth">
          {{ $t('homepage.campaignCarrousel.readMore') }}
        </nuxt-link>
      </div>
    </div>
    <div class="is-hidden-desktop">
      <div class="has-background-light p-3 mb-2">
        <p>
          {{ campaign.translations[0].short_description }}
        </p>
      </div>
      <div class="buttons">
        <nuxt-link :to="localePath(`/campaigns/${campaign.id}`)" class="button is-primary is-fullwidth">
          {{ $t('homepage.campaignCarrousel.activate') }}
        </nuxt-link>
        <nuxt-link :to="localePath(`/campaigns/${campaign.id}`)" class="button is-light is-fullwidth">
          {{ $t('homepage.campaignCarrousel.readMore') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    campaign: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.relative-cover-container{
  position:relative;
  div.is-flex {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.cover-campaign{
  background-size: cover;
  background-position: center center;
  filter: opacity(0.4);
  line-height: normal;
  @include until($tablet){
    height: 200px;
  }
}
.title-campaign{
  line-height: normal;
}
</style>
