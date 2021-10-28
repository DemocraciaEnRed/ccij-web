<template>
  <p v-if="$fetchState.pending">
    Loading...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <h1 class="title has-text-grey has-text-centered is-800">
      {{ homepage.about_title }}
    </h1>
    <div class="columns my-6 is-centered">
      <div class="column is-3">
        <img :src="`${$config.directusUrl}/assets/${homepage.about_column_left_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
        <div class="content has-text-centered">
          <p>{{ homepage.about_column_left_description }}</p>
          <p><a :href="homepage.about_column_left_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_left_call_to_action_label }} &gt;</a></p>
        </div>
      </div>
      <div class="column is-3">
        <img :src="`${$config.directusUrl}/assets/${homepage.about_column_middle_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
        <div class="content has-text-centered">
          <p>{{ homepage.about_column_middle_description }}</p>
          <p><a :href="homepage.about_column_middle_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_middle_call_to_action_label }} &gt;</a></p>
        </div>
      </div>
      <div class="column is-3">
        <img :src="`${$config.directusUrl}/assets/${homepage.about_column_right_picture.id}?width=200&height=200`" width="200" class="image is-rounded mx-auto mb-4" alt="">
        <div class="content has-text-centered">
          <p>{{ homepage.about_column_right_description }}</p>
          <p><a :href="homepage.about_column_right_call_to_action_url" class="is-uppercase is-800"> {{ homepage.about_column_right_call_to_action_label }} &gt;</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homepage: {
        about_title: null,
        about_column_left_description: null,
        about_column_left_call_to_action_label: null,
        about_column_left_call_to_action_url: null,
        about_column_left_picture: { id: null },
        about_column_middle_description: null,
        about_column_middle_call_to_action_label: null,
        about_column_middle_call_to_action_url: null,
        about_column_middle_picture: { id: null },
        about_column_right_description: null,
        about_column_right_call_to_action_label: null,
        about_column_right_call_to_action_url: null,
        about_column_right_picture: { id: null }
      }
    }
  },
  fetchOnServer: false,
  fetch () {
    const theQuery = {
      query: `
        {
          homepage_translations(filter: {languages_code: { id: {_eq: "${this.$i18n.locale}"}}}) {
            about_title
            about_column_left_description
            about_column_left_call_to_action_label
            about_column_left_call_to_action_url
            about_column_left_picture{
              id
            }
            about_column_middle_description
            about_column_middle_call_to_action_label
            about_column_middle_call_to_action_url
            about_column_middle_picture{
              id
            }
            about_column_right_description
            about_column_right_call_to_action_label
            about_column_right_call_to_action_url
            about_column_right_picture{
              id
            }
          }
        }
      `
    }
    this.$axios.post('/graphql', theQuery)
      .then((response) => {
        this.homepage = response.data.data.homepage_translations[0]
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
