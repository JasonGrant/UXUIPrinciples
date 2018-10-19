<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      fixed
      temporary
      width="360"
    >
      <v-card flat>
        <v-toolbar flat height="64">
          <v-toolbar-title>Additional Info</v-toolbar-title>
          <v-spacer />
          <global-btn-stacked-click name="Close" icon="mdi-close-circle-outline" :onClick="activateInfo" />
        </v-toolbar>
        <v-card-text class="pb-5">
          <v-chip class="success white--text">Recommendations</v-chip>
          <ul class="mb-4">
            <li>Ideal number of characters per line is 55 to 75</li>
            <li>No more than 9 words per line</li>
            <li>The white space adds importance to the text</li>
            <li>If the reader is engaged by the text they won’t care about scrolling.</li>
            <li>When in doubt, use 16px for body text</li>
          </ul>
          <v-chip class="error white--text">Concerns</v-chip>
          <ul class="mb-4">
            <li>When one is finished reading a line, your eyes need to be able to find the next line. The longer the line, the more difficult and longer it takes.</li>
            <li>The feeling that all space needs to be used is difficult to overcome.</li>
            <li>Readability can rise above the argument that users hate scrolling.</li>
          </ul>
          <v-chip class="secondary white--text">More Information</v-chip>
          <ul>
            <li><a href="https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/" target="_blank">Smashing Magazine <i>"Size Matters: Balancing Line Length And Font Size In Responsive Web Design"</i></a></li>
            <li><a href="https://baymard.com/blog/line-length-readability" target="_blank">Baymard Institute <i>"Readability: the Optimal Line Length"</i></a></li>
            <li><a href="https://www.amazon.com/Elements-Typographic-Style-Version-Anniversary/dp/0881792128/" target="_blank"><i>The Elements of Typographic Style: Version 4.0: 20th Anniversary Edition</i> by Robert Bringhurst</a></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-toolbar flat height="64">
              <v-toolbar-title>Readability: Line Length</v-toolbar-title>
              <v-spacer />
              <v-toolbar-title>
                <span class="subheading" v-if="selectOption == '21em'">~35 Characters Line Length</span>
                <span class="subheading" v-if="selectOption == '32em'">~55 Characters Line Length</span>
                <span class="subheading" v-if="selectOption == '36em'">~66 Characters Line Length</span>
                <span class="subheading" v-if="selectOption == '40em'">~75 Characters Line Length</span>
                <span class="subheading" v-if="selectOption == '51em'">~95 Characters Line Length</span>
              </v-toolbar-title>
              <v-spacer />
              <global-btn-stacked-click name="Info" icon="mdi-information-outline" :onClick="activateInfo" />
            </v-toolbar>
            <v-card-text class="pb-0">
              <v-toolbar flat color="transparent">
                <v-spacer />
                <span>
                  <v-radio-group v-model="selectOption" row>
                    <v-radio label="Too Small" value="21em" color="error"></v-radio>
                    <v-radio label="Ideal Low" value="32em" color="primary"></v-radio>
                    <v-radio label="Ideal" value="36em" color="primary"></v-radio>
                    <v-radio label="Ideal High" value="40em" color="primary"></v-radio>
                    <v-radio label="Too Wide" value="51em" color="error"></v-radio>
                  </v-radio-group>
                </span>
                <v-spacer />
              </v-toolbar>
            </v-card-text>
            <v-card-text class="pt-0" :style="{ width: selectOption, margin: text_margin }">
              <p class="body-1 body__text">Let's picture trivia night, an escape room or a scavenger hunt with only one person competing. The other competitors are multimember teams with diverse backgrounds, tastes and experiences. The multimember team has many advantages over the individual, and the same is true for user experience. When it comes to software development and design, you need to rely on the entire team for multiple viewpoints and opinions to create a more beautiful and functional design.</p>
              <p class="body-1 body__text">While the entire team is responsible for UX, software development and design have the largest impact and greatest accountability. The two must work together toward a common goal. However, that requires the ability to speak a common language. Developers speak in terms of coding practices, languages and libraries, while designers speak in terms of research, styling and deliverables. When both take into account the larger mission to address the user's needs, they can overcome some of these differences in language. To bridge the language gap, each needs to learn the essentials about the other's role. With a basic understanding, a common language between software development and design can be created. Frequent communication between them will ensure that designs are not only able to be implemented but have also taken into account multiple angles and viewpoints.</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  methods: {
    activateInfo() {
      console.log("click");
      this.drawerRight = !this.drawerRight;
    }
  },
  computed: {},
  data() {
    return {
      drawerRight: false,
      selectOption: "36em",
      text_margin: "auto"
    };
  }
};
</script>

<style scoped>
.body__text {
  font-size: 16px !important;
}
</style>
