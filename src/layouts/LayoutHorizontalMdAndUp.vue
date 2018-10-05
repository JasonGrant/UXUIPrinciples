<template>
  <v-app>

    <v-toolbar
      app
      class="main__toolbar"
      height="64px"
    >
      <global-app-title />
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <template v-for="nav in navigationItems">
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
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- <global-app-user /> -->
      <global-app-app class="mx-2"/>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <global-app-footer />

    <global-app-about />

  </v-app>
</template>

<script>
export default {
  name: "LayoutHorizontalMdAndUp",
  computed: {
    navigationItems() {
      return this.$store.getters["layout/getNavigationItems"];
    }
  }
};
</script>
