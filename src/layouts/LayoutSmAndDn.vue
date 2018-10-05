<template>
  <v-app>
    <v-toolbar
      app
      height="64px"
      class="mobile__toolbar"
    >
      <v-toolbar-items>
        <global-btn-stacked-fn
          fnPath="toggleMobileNav"
          name="Menu"
          icon="mdi-menu"
        />
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-title class="mx-0">
        {{ layoutConfig.application_name }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <global-btn-stacked-fn
          fnPath="toggleMobileSettings"
          name="Settings"
          icon="mdi-settings"
        />
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav
      app
      fixed
      :value="true"
      color="white"
      height="64"
    >
        <template v-for="nav in bottomNavItems">
          <global-btn-stacked-route
            v-if="nav.route != null"
            :key="nav.name" 
            :routePath="nav.route"
            :name="nav.name"
            :icon="nav.icon"
          />
          <global-btn-stacked-fn
            v-if="nav.fn != null"
            :key="nav.name"
            :fnPath="nav.fn"
            :name="nav.name"
            :icon="nav.icon"
          />
          <global-btn-stacked-href
            v-if="nav.url != null"
            :key="nav.name"
            :url="nav.url"
            :name="nav.name"
            :icon="nav.icon"
          />
        </template>
    </v-bottom-nav>
    <global-app-mobile-nav />
    <global-app-mobile-settings />
    <global-app-about />
  </v-app>
</template>

<script>
export default {
  name: "LayoutVerticalMdAndUp",
  computed: {
    bottomNavItems() {
      return this.$store.getters["layout/getBottomNavItems"];
    },
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    }
  }
};
</script>
