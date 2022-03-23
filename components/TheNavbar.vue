<template>
  <div>
    <div class="py-3 has-background-black" />
    <div class="section is-hidden-touch">
      <div class="container">
        <nav class="level">
          <p class="level-item is-size-5 is-oswald has-text-centered" :class="{'is-active': $route.name.includes('index')}">
            <nuxt-link :to="localePath('/')" class="link is-info">
              {{ $t('navbar.home') }}
            </nuxt-link>
          </p>
          <p class="level-item is-size-5 is-oswald has-text-centered" :class="{'is-active': $route.name.includes('campaign')}">
            <nuxt-link :to="localePath('/campaigns')" class="link is-info">
              {{ $t('navbar.campaigns') }}
            </nuxt-link>
          </p>
          <p class="level-item is-size-5 is-oswald has-text-centered" :class="{'is-active': $route.name.includes('faq')}">
            <nuxt-link :to="localePath('/faq')" class="link is-info">
              {{ $t('navbar.faqs') }}
            </nuxt-link>
          </p>
          <!-- <p class="level-item has-text-centered" :class="{'is-active': $route.name.includes('our-work')}">
            <nuxt-link :to="localePath('/our-work')" class="link is-info">
              {{ $t('navbar.ourWork') }}
            </nuxt-link>
          </p> -->
          <p class="level-item is-size-5 is-oswald has-text-centered" :class="{'is-active': $route.name.includes('contact-us')}">
            <nuxt-link :to="localePath('/contact-us')" class="link is-info">
              {{ $t('navbar.contact') }}
            </nuxt-link>
          </p>
          <p class="level-item is-size-5 is-oswald has-text-centered">
            <nuxt-link v-if="$i18n.locale == 'en'" class="link is-info" :to="switchLocalePath('es')">
              Español
            </nuxt-link>
            <nuxt-link v-else class="link is-info" :to="switchLocalePath('en')">
              English
            </nuxt-link>
          </p>
        </nav>
      </div>
    </div>
    <b-navbar class="is-hidden-desktop">
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="{ path: localePath('/') }">
          <img src="~/assets/img/ccij-logo.png" class="image">
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="nuxt-link" class="is-oswald" :to="{ path: localePath('/') }">
          {{ $t('navbar.home') }}
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" class="is-oswald" :to="{ path: localePath('/campaigns') }">
          {{ $t('navbar.campaigns') }}
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" class="is-oswald" :to="{ path: localePath('/faq') }">
          {{ $t('navbar.faqs') }}
        </b-navbar-item>
        <!-- <b-navbar-item tag="nuxt-link" class="is-oswald" :to="{ path: localePath('/our-work') }">
          {{ $t('navbar.ourWork') }}
        </b-navbar-item> -->
        <b-navbar-item tag="nuxt-link" class="is-oswald" :to="{ path: localePath('/contact-us') }">
          {{ $t('navbar.contact') }}
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item v-if="$i18n.locale == 'en'" class="is-oswald" tag="nuxt-link" :to="switchLocalePath('es')">
          Español
        </b-navbar-item>
        <b-navbar-item v-else tag="nuxt-link" class="is-oswald" :to="switchLocalePath('en')">
          English
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.level-item {
  a {
    font-weight: 400;
    &:hover{
      color: #731012;
    }
  }
  &.is-active a{
    font-weight: 600;
    color: #731012;
  }
}
</style>
