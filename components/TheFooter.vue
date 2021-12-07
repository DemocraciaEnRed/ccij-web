<template>
  <div>
    <footer class="footer has-background-primary">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third has-text-centered-touch">
            <h1 class="title is-3">
              {{ $t('footer.ourNetworks') }}
            </h1>
            <a href="https://www.facebook.com/CCIJustice"><i class="fab fa-facebook-f fa-fw is-size-3" /></a>
            <a href="https://www.instagram.com/ccijustice/"><i class="fab fa-instagram fa-fw is-size-3" /></a>
            <a href="https://twitter.com/ccijustice"><i class="fab fa-twitter fa-fw is-size-3" /></a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F65597301%2Fadmin%2F"><i class="fab fa-linkedin fa-fw is-size-3" /></a>
          </div>
          <div class="column">
            <h1 class="title is-3">
              {{ $t('footer.latestCampaigns') }}
            </h1>
            <FooterCampaigns />
          </div>
        </div>
      </div>
    </footer>

    <div class="py-6">
      <div class="columns is-centered is-vcentered">
        <div class="column is-3">
          <a href="https://ccijustice.org/" target="_blank">
            <img src="~/assets/img/ccij-logo.png" width="300" class="image mx-auto">
          </a>
        </div>
        <div class="column is-3">
          <div class="buttons is-centered">
            <a href="https://ccijustice.org/" target="_blank" class="button is-primary is-outlined is-uppercase">{{ $t('footer.goToSite') }}</a>
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
footer.footer{
  color: #A7BEE2;
  .title{
    color: #A7BEE2 !important;
  }
  a{
    color: #A7BEE2;
    &:hover{
      color: white;
    }
  }
}
</style>
