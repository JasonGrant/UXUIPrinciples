<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row>
        <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
          <h2 class="display-1">Release Notes</h2>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="release in releaseNotes"
            :key="release.releaseNumber"
          >
            <div slot="header" class="headline">{{release.releaseNumber}} <small class="body-1">on {{release.releaseDate}}</small></div>
            <v-card dark>
              <v-card-text>
                <div v-for="type in release.notes" :key="type.type">
                  <h4 class="headline">{{type.type}}</h4>
                  <ul class="mb-4">
                    <li v-for="note in type.notes" :key="note.name" class="subheading">
                      {{note.name}}
                      <br>
                      <div class="caption">{{note.details}}</div>
                    </li>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  computed: {
    releaseNotes() {
      return this.$store.getters["app/getReleaseNotes"];
    }
  }
};
</script>

<style scoped>
</style>
