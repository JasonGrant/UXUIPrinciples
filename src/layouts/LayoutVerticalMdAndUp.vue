<template>
  <v-app>
    <v-navigation-drawer
      persistent
      disable-resize-watcher
      hide-overlay
      fixed
      class="elevation-5"
      app
    >
      <v-toolbar
        flat
        extended
        class="main__toolbar elevation-1"
        height="64px"
      >
        <global-app-title />
        <div slot="extension">
          <global-app-app class="mx-2"/>
          <global-app-user class="ml-2"/>
        </div>
      </v-toolbar>
      <global-app-menu-list :listItems="navigationItems" color="primary" />
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <global-app-footer />
    <global-app-about />
  </v-app>
</template>

<script>
export default {
  name: "LayoutVerticalMdAndUp",
  computed: {
    navigationItems() {
      return this.$store.getters["layout/getNavigationItems"];
    }
  }
};
</script>
