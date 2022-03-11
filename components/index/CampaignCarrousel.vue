<template>
  <p v-if="$fetchState.pending">
    <b-skeleton height="400px" />
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <b-carousel
      :has-drag="true"
      :autoplay="false"
      :pause-hover="true"
      :pause-info="false"
      indicator-style="is-boxes"
      :indicator-inside="false"
      :indicator-background="false"
      :interval="5000"
      :repeat="true"
    >
      <b-carousel-item v-for="(campaign, i) in campaigns" :key="i" icon-size="is-medium" icon-pack="fas">
        <Item :campaign="campaign" />
        <hr class="has-background-petroleo mb-0">
      </b-carousel-item>
    </b-carousel>
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
      campaigns: []
    }
  },
  fetchOnServer: false,
  fetch () {
    const theQuery = {
      query: `
        {
          campaigns(limit: 4, sort: ["-id","-date_updated"]) {
            id
            name
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
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.response.data)
      })
  },
  methods: {

  }
}
</script>
