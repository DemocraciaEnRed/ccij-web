<template>
  <p v-if="$fetchState.pending">
    Loading...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else class="columns is-multiline">
    <div v-for="campaign in campaigns" :key="`campaign-${campaign.campaigns_id.id}`" class="column is-4">
      <nuxt-link :to="localePath(`/campaigns/${campaign.id}`)">
        {{ campaign.title }}
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
    const theQuery = {
      query: `
        {
          campaigns_translations (filter: {languages_code: {id: {_eq: "${this.$i18n.locale}"}}}, sort: ["-campaigns_id"], limit: 6){
            title
            campaigns_id: campaigns_id {
              id
            }
          }
        }
      `
    }
    this.$axios.post('/graphql', theQuery)
      .then((response) => {
        this.campaigns = response.data.data.campaigns_translations
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
