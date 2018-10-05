<template>
  <v-menu offset-y nudge-bottom="15px">
    <v-btn
      icon
      slot="activator">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <global-app-menu-list :listItems="appMenuItems" color="secondary" />
  </v-menu>
</template>

<script>
export default {
  computed: {
    appMenuItems() {
      return this.$store.getters["layout/getAppMenuItems"];
    }
  }
};
</script>
