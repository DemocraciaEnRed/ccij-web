<template>
  <div v-if="$fetchState.pending">
    <div class="py-6">
      <h3 class="title has-text-centered is-4">
        {{ $t('campaigns.loading') }} <i class="fas fa-sync fa-spin" />
      </h3>
    </div>
  </div>
  <div v-else-if="$fetchState.error">
    <div class="py-6">
      <p class="subtitle has-text-centered is-4">
        {{ $t('campaigns.errorOccurred') }}
      </p>
    </div>
  </div>
  <div v-else>
    <p class="has-text-centered mb-3 has-text-primary">
      {{ $t('campaigns.paginate',{x: page, y: totalPages}) }}
    </p>
    <div class="buttons is-centered">
      <a class="button is-primary is-uppercase is-outlined" @click="prevPage"><i class="fas fa-arrow-left" />&nbsp;&nbsp;&nbsp;{{ $t('campaigns.back') }}</a>
      <a class="button is-primary is-uppercase is-outlined" @click="nextPage">{{ $t('campaigns.next') }}&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right" /></a>
    </div>
    <div v-if="campaigns.length > 0">
      <Item v-for="(campaign) in campaigns" :key="`campaign-${campaign.id}`" :campaign="campaign" class="my-6" />
    </div>
    <div class="buttons is-centered">
      <a class="button is-primary is-uppercase is-outlined" @click="prevPage"><i class="fas fa-arrow-left" />&nbsp;&nbsp;&nbsp;{{ $t('campaigns.back') }}</a>
      <a class="button is-primary is-uppercase is-outlined" @click="nextPage">{{ $t('campaigns.next') }}&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-right" /></a>
    </div>
    <p class="has-text-centered has-text-primary">
      {{ $t('campaigns.paginate',{x: page, y: totalPages}) }}
    </p>
  </div>
</template>

<script>
import Item from '@/components/campaigns/Item.vue'
export default {
  components: {
    Item
  },
  data () {
    return {
      page: 1,
      limit: 5,
      totalItems: 0,
      totalPages: 1,
      campaigns: []
    }
  },
  fetchOnServer: false,
  fetch () {
    const theQuery = {
      query: `
        {
          campaigns_aggregated {
            count {
              id
            }
          }
          campaigns(filter: {status: {_eq: "published"}}, page:${this.page}, limit: ${this.limit}, sort: ["-id","-date_updated"]) {
            id
            name
            date_updated
            image_cover {
              id
            }
            translations(filter: {languages_code: { id: {_eq: "${this.$i18n.locale}"}}}, limit: 1){
              title
              short_description
            }
          }
        }
      `
    }
    this.$axios.post('/graphql', theQuery)
      .then((response) => {
        this.campaigns = response.data.data.campaigns
        this.totalItems = response.data.data.campaigns_aggregated[0].count.id
        this.totalPages = Math.ceil(this.totalItems / this.limit) || 1
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.response.data)
      })
  },
  methods: {
    nextPage () {
      if (this.page === this.totalPages) { return }
      this.page += 1
      this.$fetch()
    },
    prevPage () {
      if (this.page === 1) { return }
      this.page -= 1
      this.$fetch()
    }
  }
}
</script>
