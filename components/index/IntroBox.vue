<template>
  <div class="box has-background-light has-text-centered has-text-primary p-6">
    <p v-if="$fetchState.pending">
      Loading...
    </p>
    <p v-else-if="$fetchState.error">
      An error occurred :(
    </p>
    <p v-else>
      {{ text }}
    </p>
    <!-- Una plataforma que reúne, impulsa y potencia los llamados a la acción de nuestra comunidad para ponerle fin a la detención migratoria mientras elevamos las voces de migrantes previamente y actualmente detenidos por la migra. -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null
    }
  },
  fetchOnServer: false,
  fetch () {
    const theQuery = {
      query: `
        {
          homepage_translations(filter: {languages_code: { id: {_eq: "${this.$i18n.locale}"}}}) {
            introduction_box
          }
        }
      `
    }
    this.$axios.post('/graphql', theQuery)
      .then((response) => {
        this.text = response.data.data.homepage_translations[0].introduction_box
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
