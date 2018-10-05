<template>
  <v-navigation-drawer 
    app
    right
    temporary
    stateless
    v-model="layoutConfig.mobileSettings"
  >
    <v-toolbar height="64px" class="elevation-0 mobile__toolbar pl-3">
      <v-toolbar-title>App Settings</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <global-btn-stacked-fn
          fnPath="toggleMobileSettings"
          name="close"
          icon="mdi-close"
        />
      </v-toolbar-items>
    </v-toolbar>
    <global-app-menu-list :listItems="userMenuItems" color="secondary" />
    <global-app-menu-list :listItems="appMenuItems" color="secondary" />
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    },
    userMenuItems() {
      return this.$store.getters["layout/getUserMenuItems"];
    },
    appMenuItems() {
      return this.$store.getters["layout/getAppMenuItems"];
    }
  }
};
</script>
