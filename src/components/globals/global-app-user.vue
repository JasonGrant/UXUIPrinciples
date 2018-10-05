<template>
  <v-menu offset-y nudge-bottom="11px">
    <v-toolbar-title
      slot="activator"
      style="line-height:.8;">
      <span style="font-weight:300;"><small style="font-size:12px;">Welcome!</small><br>{{ user }}</span>
      <v-icon medium>mdi-chevron-down</v-icon>
    </v-toolbar-title>
    <global-app-menu-list :listItems="userMenuItems" color="secondary" />
  </v-menu>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["users/getUser"];
    },
    userMenuItems() {
      return this.$store.getters["layout/getUserMenuItems"];
    }
  }
};
</script>
