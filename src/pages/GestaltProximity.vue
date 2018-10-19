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
          <!-- <v-chip class="success white--text">Recommendations</v-chip>
          <ul class="mb-4">
            <li>Having one list of content allows for faster scanning.</li>
            <li>One card, One Type. A card should envelop one content type.</li>
          </ul>
          <v-chip class="error white--text">Concerns</v-chip>
          <ul class="mb-4">
            <li>Breaking content into multiple containers makes it difficult to relate to a group, harder scan and takes up unnecessary space.</li>
            <li>Don't put multiple actions or content types on one card.</li>
          </ul> -->
          <v-chip class="secondary white--text">More Information</v-chip>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Principles_of_grouping" target="_blank">Wikipedia <i>"Principles of Grouping"</i></a></li>
            <li><a href="https://www.interaction-design.org/literature/topics/gestalt-principles" target="_blank">Interaction Design Foundation <i>"Gestalt Principles"</i></a></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-toolbar flat height="64">
              <v-toolbar-title>Gestalt Principle - Proximity</v-toolbar-title>
              <v-spacer />
              <global-btn-stacked-click name="Info" icon="mdi-information-outline" :onClick="activateInfo" />
            </v-toolbar>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs6 px-3>
                  <h3 class="title pb-2">Description:</h3>
                  <p>Proximity occurs when elements are placed close together. They tend to be perceived as a group. Even if the shapes, sizes, and objects are radically different, they will appear as a group if they are close together.</p>
                </v-flex>
                <v-flex xs6 px-3>
                  <h3 class="title pb-2">Principle Applied To:</h3>
                  <ul>
                    <li><router-link to="/cardstoomany">Cards - Too Many with lists of a common type</router-link></li>
                  </ul>
                </v-flex>
                <v-flex xs8 offset-xs2>
                  <gestalt-proximity />
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { TweenMax, TimelineMax, Power0 } from "gsap";
import GestaltProximity from "@/components/svg/GestaltProximity";

export default {
  components: {
    GestaltProximity
  },
  mounted() {
    const left = "#LeftTop, #LeftCenter, #LeftBottom";
    const right =
      "#CenterTop, #CenterCenter, #CenterBottom, #RightTop, #RightCenter, #RightBottom";

    let tl = new TimelineMax({ repeat: -1, yoyo: true });

    // tl.delay(2);
    tl.to(left, 1, { delay: 1, x: -50 }).to(right, 1, { delay: 1, x: 50 }, 0);
    tl.delay(2);
    // tl.to(left, 1, { delay: 1, x: -50 }).to(right, 1, { delay: 1, x: 50 }, 0);
    // timeline.delay(2);
    // timeline.to(left, 1, { x: 50 }).to(right, 1, { x: -50 }, 0);
  },
  methods: {
    activateInfo() {
      console.log("click");
      this.drawerRight = !this.drawerRight;
    }
  },
  computed: {},
  watch: {},
  data() {
    return {
      drawerRight: false
    };
  }
};
</script>

<style scoped>
.body__text {
  font-size: 16px !important;
}
</style>
