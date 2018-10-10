<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 column align-center>
          <h1 class="display-3 font-weight-thin">Prin &#8226; ci &#8226; ple</h1>
          <p class="caption">noun</p>
          <p class="headline">a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning</p>
          <p class="caption">Synonyms: <span class="body-2">truth, proposition, concept, idea, theory, assumption, fundamental, essential, ground rule</span></p>
          <h3 class="display-1">Coming Soon</h3>
        </v-flex>
        <!-- <span v-html="gestalt.description" /> -->
        <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->
        <!-- <blockquote class="headline">
          <i>&#8220;First, solve the problem. Then, write the code.&#8221;</i>
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
        <v-flex class="text-xs-left mt-4">
        <h3 class="headline">Vue Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Vue Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Vue Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Vue Twitter</a></li>
          <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Vue News</a></li>
        </ul>
        <h3 class="headline">Vue Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="https://github.com/axios/axios" target="_blank" rel="noopener">axios</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3 class="headline">UI Framework</h3>
        <ul>
          <li><a href="https://vuetifyjs.com/en/" target="_blank" rel="noopener">Vuetify Material Design Component Framework</a></li>
          <li><a href="https://discordapp.com/invite/s93b7Fv" target="_blank" rel="noopener">Vuetify Forum</a></li>
          <li><a href="https://twitter.com/vuetifyjs" target="_blank" rel="noopener">Vuetify Twitter</a></li>
          <li><a href="https://materialdesignicons.com/" target="_blank" rel="noopener">Material Design Icons</a></li>
          <li><a href="http://stylus-lang.com/" target="_blank" rel="noopener">Stylus</a></li>
        </ul>
        </v-flex> -->
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  computed: {
    gestalt() {
      return this.$store.getters["gestalt/getGestalt"];
    }
  }
};
</script>

<style scoped>
</style>
