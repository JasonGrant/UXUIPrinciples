<template>
  <v-dialog
    v-model="layoutConfig.aboutModal"
    persistent
    width="500"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
      >
      <div>
        <!-- <img
          :src="layoutConfig.application_logo_loc"
          :alt="layoutConfig.application_logo_alt_text"
          :height="layoutConfig.toolbar_height"
          class="pr-2"> -->
      </div>
      <div>
        {{ layoutConfig.application_name }}
        <p class="caption mb-0">App Version {{appVersion}}</p>
      </div>
      </v-card-title>

      <v-card-text>
        <p class="caption mb-0">Support Email</p>
        <p><a class="body-2" :href="'mailto:' + supportEmail" target="_top">{{supportEmail}}</a></p>
        <div v-for="group in appTeam" :key="group.name">
          <p class="caption mb-0">{{group.name}}</p>
          <p class="body-2">{{group.individuals}}</p>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          flat
          @click="toggleAppAbout()"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    },
    appVersion() {
      return this.$store.getters["app/getCurrentAppVersion"];
    },
    skeletonVersion() {
      return this.$store.getters["app/getCurrentSkeletonVersion"];
    },
    appTeam() {
      return this.$store.getters["app/getTeam"];
    },
    supportEmail() {
      return this.$store.getters["app/getSupportEmail"];
    }
  },
  methods: {
    toggleAppAbout: function() {
      this.$store.dispatch("layout/toggleAppAbout");
    }
  }
};
</script>
