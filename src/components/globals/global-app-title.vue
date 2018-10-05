<template>
  <v-btn
    to="/"
    flat
    color="secondary"
    class="appTitleBtn ml-4">
    <!-- <img
      :src="layoutConfig.application_logo_loc"
      :alt="layoutConfig.application_logo_alt_text"
      :height="layoutConfig.toolbar_height"
      class="pr-2"> -->
    {{ layoutConfig.application_name }}
  </v-btn>
</template>

<script>
export default {
  computed: {
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    }
  }
};
</script>
