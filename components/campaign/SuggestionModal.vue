<template>
  <div class="modal-card">
    <section class="modal-card-body has-text-centered">
      <img
        :src="`${$config.directusUrl}/assets/${action.actions_id.icon.id}`"
        width="70"
        class="image mx-auto mb-4"
        alt=""
      >
      <h5 class="title is-3 has-text-centered">
        {{ action.actions_id.translations[0].name }}
      </h5>
      <h1 class="subtitle is-5">
        {{ $t('campaign.titleSuggestion') }}
      </h1>
      <div class="notification is-gris has-text-black">
        <p>{{ action.translations[0].suggested_text }}</p>
      </div>
      <h1 class="subtitle is-4">
        {{ $t('campaign.readyToActivate') }}
      </h1>
      <div class="buttons">
        <a :href="action.translations[0].call_to_action_url" target="_blank" class="button is-primary is-outlined is-fullwidth" @click="$parent.close()">{{ action.translations[0].call_to_action_label }}</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Object,
      required: true
    }
  }
}
</script>
