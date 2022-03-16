<template>
  <div class="has-custom-bg">
    <div class="container py-6">
      <div class="columns is-align-items-end is-centered">
        <div class="column is-narrow">
          <img src="~/assets/img/takeAction.svg" width="200" class="image mx-auto">
        </div>
        <div class="column is-narrow has-text-centered-mobile has-text-right">
          <h1 class="subtitle is-4 is-500 is-marginless has-text-primary">{{$t("homepage.title") }}</h1>
          <h1 class="subtitle is-4 is-500 is-marginless">{{$t("homepage.subtitle") }}</h1>
        </div>
        <a href="https://ccijustice.org/" class="button is-black is-outlined site-link is-hidden-mobile">{{ $t("homepage.goToSite") }} <i class="ml-3 fas fa-lg fa-arrow-right"></i></a>
        <div class="column is-narrow has-text-centered-mobile is-hidden-tablet">
          <a href="https://ccijustice.org/" class="button is-black is-outlined">{{ $t("homepage.goToSite") }} <i class="ml-3 fas fa-lg fa-arrow-right"></i></a>
        </div>
      </div>
      <!-- <div class="columns">
        <div class="column picture-column" />
        <div class="column is-6 has-background-white">
          <div class="p-5">
            <h1 class="title is-2 is-size-3 my-6">
              {{ $t("homepage.title") }}
            </h1>
            <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center my-4">
              <div class="is-flex-grow-1">
              </div>
              <div v-if="button">
                <nuxt-link :to="localePath('/')" class="button is-primary is-outlined is-uppercase">{{ $t("homepage.goToSite") }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    button: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
.picture-column{
  background-image: url('~/assets/img/takeaction-bg.png');
  background-size: cover;
  background-position: center center;
  @include until($tablet){
    height: 200px;
  }
}
.has-custom-bg{
  background-image: url('~/assets/img/fondoBanner.svg');
  background-size: cover;
  background-position: center center;
}
.columns{
  position: relative;
  .site-link{
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
