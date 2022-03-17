<template>
  <p v-if="$fetchState.pending">
    Loading...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else class="columns is-multiline">
    <div v-for="campaign in campaigns" :key="`campaign-${campaign.id}`" class="column is-4-desktop is-6-tablet is-12-mobile has-text-centered-mobile">
      <nuxt-link class="has-text-white" :to="localePath(`/campaigns/${campaign.id}`)">
        {{ campaign.translations[0].title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      campaigns: []
    }
  },
  fetchOnServer: false,
  fetch () {
    // const theQuery = {
    //   query: `
    //     {
    //       campaigns_translations (filter: {languages_code: {id: {_eq: "${this.$i18n.locale}"}}}, sort: ["-campaigns_id"], limit: 6){
    //         title
    //         campaigns_id: campaigns_id {
    //           id
    //         }
    //       }
    //     }
    //   `
    // }
    const theQuery = {
      query: `
        {
          campaigns(limit: 6, sort: ["-id","-date_updated"]) {
            id
            translations(filter: {languages_code: { id: {_eq: "${this.$i18n.locale}"}}}, limit: 1){
              title
            }
          }
        }
      `
    }
    this.$axios.post('/graphql', theQuery)
      .then((response) => {
        this.campaigns = response.data.data.campaigns
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.response.data)
      })
  },
  computed: {
    theLocale () {
      return this.$i18n.locale
    }
  },
  watch: {
    theLocale (oldVal, newVal) {
      if (oldVal !== newVal) { this.$fetch() }
    }
  }
}
</script>
