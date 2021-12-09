<template>
  <div class="has-background-primary">
    <div class="container">
      <div class="columns">
        <div class="column picture-column" />
        <div class="column is-6 has-background-white">
          <div class="p-5">
            <h1 class="title is-2 is-size-3 my-6">
              {{ $t("homepage.title") }}
            </h1>
            <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center my-4">
              <div class="is-flex-grow-1">
                <img src="~/assets/img/ccij-logo.png" width="200" class="image">
              </div>
              <div v-if="button">
                <nuxt-link :to="localePath('/')" class="button is-primary is-outlined is-uppercase">{{ $t("homepage.goToSite") }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
</style>
