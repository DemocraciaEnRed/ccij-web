<template>
  <div>
    <footer class="footer has-background-primary">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third has-text-centered-touch">
            <h1 class="subtitle is-700 is-3 has-text-white">
              {{ $t('footer.ourNetworks') }}
            </h1>
            <a class="has-text-light" @click="trackAndGoToWebsite('https://www.facebook.com/CCIJustice','Facebook')"><i class="fab fa-facebook-f fa-fw is-size-3" /></a>
            <a class="has-text-light" @click="trackAndGoToWebsite('https://www.instagram.com/ccijustice/','Instagram')"><i class="fab fa-instagram fa-fw is-size-3" /></a>
            <a class="has-text-light" @click="trackAndGoToWebsite('https://twitter.com/ccijustice','Twitter')"><i class="fab fa-twitter fa-fw is-size-3" /></a>
            <a class="has-text-light" @click="trackAndGoToWebsite('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F65597301%2Fadmin%2F','LinkedIn')"><i class="fab fa-linkedin fa-fw is-size-3" /></a>
          </div>
          <div class="column">
            <h1 class="subtitle is-700 is-3 has-text-white has-text-centered-mobile">
              {{ $t('footer.latestCampaigns') }}
            </h1>
            <FooterCampaigns />
          </div>
        </div>
      </div>
    </footer>
    <div class="py-6">
      <div class="container">
        <div class="columns is-centered is-vcentered">
          <div class="column is-7">
            <a @click="trackAndGoToWebsite('https://ccijustice.org/','CCIJ Logo')">
              <img src="~/assets/img/ccij-logo-horizontal.svg" width="600" class="image mx-auto px-3">
            </a>
          </div>
          <div class="column is-3">
            <div class="buttons is-centered">
              <a class="button is-petroleo is-outlined is-uppercase" @click="trackAndGoToWebsite('https://ccijustice.org/','Go to website button')">{{ $t('footer.goToSite') }} <i class="ml-3 fas fa-lg fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 has-background-primary" />
  </div>
</template>

<script>
import FooterCampaigns from './FooterCampaigns.vue'
export default {
  components: {
    FooterCampaigns
  },
  methods: {
    trackAndGoToWebsite (url, where) {
      this.$ga.event('Footer', 'Click', where)
      // open in a new tab https://ccijustice.org/
      window.open(url, '_blank')
    }
  }
}
</script>
