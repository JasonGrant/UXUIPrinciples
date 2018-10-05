<template>
  <v-navigation-drawer 
    app
    left
    temporary
    stateless
    v-model="layoutConfig.mobileNav"
  >
    <v-toolbar height="64px" class="elevation-0 mobile__toolbar pl-3">
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <global-btn-stacked-fn
          fnPath="toggleMobileNav"
          name="close"
          icon="mdi-close"
        />
      </v-toolbar-items>
    </v-toolbar>
    <global-app-menu-list :listItems="navigationItems" color="primary" />
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    },
    navigationItems() {
      return this.$store.getters["layout/getNavigationItems"];
    }
  }
};
</script>
