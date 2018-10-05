<template>
  <v-footer fixed app class="px-4">
    <div></div>
      <v-spacer />
    <div>V{{appVersion}}</div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    appVersion() {
      return this.$store.getters["app/getCurrentAppVersion"];
    }
  }
};
</script>
