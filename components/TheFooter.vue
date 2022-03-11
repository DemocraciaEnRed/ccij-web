<template>
  <div>
    <footer class="footer has-background-primary">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third has-text-centered-touch">
            <h1 class="subtitle is-700 is-3 has-text-white">
              {{ $t('footer.ourNetworks') }}
            </h1>
            <a class="has-text-light" href="https://www.facebook.com/CCIJustice"><i class="fab fa-facebook-f fa-fw is-size-3" /></a>
            <a class="has-text-light" href="https://www.instagram.com/ccijustice/"><i class="fab fa-instagram fa-fw is-size-3" /></a>
            <a class="has-text-light" href="https://twitter.com/ccijustice"><i class="fab fa-twitter fa-fw is-size-3" /></a>
            <a class="has-text-light" href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F65597301%2Fadmin%2F"><i class="fab fa-linkedin fa-fw is-size-3" /></a>
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
            <a href="https://ccijustice.org/" target="_blank">
              <img src="~/assets/img/ccij-logo-horizontal.svg" width="600" class="image mx-auto px-3">
            </a>
          </div>
          <div class="column is-3">
            <div class="buttons is-centered">
              <a href="https://ccijustice.org/" target="_blank" class="button is-petroleo is-outlined is-uppercase">{{ $t('footer.goToSite') }} <i class="ml-3 fas fa-lg fa-arrow-right"></i></a>
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
  }
}
</script>

<style lang="scss">
// footer.footer{
//   color: #000;
//   .title{
//     color: #000 !important;
//   }
//   a{
//     color: #000;
//     &:hover{
//       color: white;
//     }
//   }
// }
</style>
