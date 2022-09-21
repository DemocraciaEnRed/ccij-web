import es from './locales/es.json'
import en from './locales/en.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Liberation campaigns accessible to the community',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://takeaction.ccijustice.org/' },
      { property: 'og:image', content: 'https://takeaction.ccijustice.org/sharer_02.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://takeaction.ccijustice.org/' },
      { property: 'twitter:image', content: 'https://takeaction.ccijustice.org/sharer_02.jpg' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', integrity: 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel' }
  ],
  publicRuntimeConfig: {
    directusUrl: process.env.API_URL || 'https://content.takeaction.ccijustice.org'
  },
  privateRuntimeConfig: {
    directusUrl: process.env.API_URL || 'https://content.takeaction.ccijustice.org'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-216355885-1' // Used as fallback if no runtime config is provided
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_URL || 'https://content.takeaction.ccijustice.org',
    prefix: '/graphql'
  },
  // https://i18n.nuxtjs.org/setup
  i18n: {
    baseUrl: 'https://takeaction.ccijustice.org',
    locales: [{
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'es',
      iso: 'en-ES',
      name: 'Español'
    }],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        es
      }
    }
  },
  loading: {
    color: '#E4EEFA',
    height: '5px'
  },
  styleResources: {
    // your settings here
    scss: ['~assets/scss/_variables.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
