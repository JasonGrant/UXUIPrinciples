<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12 column align-center>
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title class="headline">Heuristic Evaluation</v-toolbar-title>
              <v-spacer />
              <v-toolbar-title class="subheading">Total Score: <span class="headline">{{percentTotal}}%</span></v-toolbar-title>
            </v-toolbar>
            <v-expansion-panel>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Useful</div>
                    <div>Serve a practical purpose that addresses needs and goals</div>
                  </div>
                  <v-chip v-if="numberAnswered == 0" color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                  <v-chip v-if="numberAnswered != 0 && percentTotal > 75" color="success" small class="ma-0 white--text success__chip">{{percentTotal}}%</v-chip>
                  <v-chip v-if="numberAnswered != 0 && percentTotal <= 75" color="error" small class="ma-0 white--text success__chip">{{percentTotal}}%</v-chip>
                </div>
                <v-card dark>
                  <v-card-text class="pa-0">
                    <v-layout row wrap>
                      <v-flex>
                        <v-data-table
                          :headers="headers"
                          :items="useful"
                          hide-actions
                          class="elevation-0"
                        >
                          <template slot="items" slot-scope="props">
                            <td>{{ props.item.name }}</td>
                            <td>
                              <v-icon v-if="props.item.rating != 5" @click="setRating(props.item, 5)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 5">mdi-checkbox-marked-outline</v-icon>
                            </td>
                            <td>
                              <v-icon v-if="props.item.rating != 4" @click="setRating(props.item, 4)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 4">mdi-checkbox-marked-outline</v-icon>
                            </td>
                            <td>
                              <v-icon v-if="props.item.rating != 3" @click="setRating(props.item, 3)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 3">mdi-checkbox-marked-outline</v-icon>
                            </td>
                            <td>
                              <v-icon v-if="props.item.rating != 2" @click="setRating(props.item, 2)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 2">mdi-checkbox-marked-outline</v-icon>
                            </td>
                            <td>
                              <v-icon v-if="props.item.rating != 1" @click="setRating(props.item, 1)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 1">mdi-checkbox-marked-outline</v-icon>
                            </td>
                            <td>
                              <v-icon v-if="props.item.rating != 0" @click="setRating(props.item, 0)">mdi-checkbox-blank-outline</v-icon>
                              <v-icon v-if="props.item.rating == 0">mdi-checkbox-marked-outline</v-icon>
                            </td>
                          </template>
                        </v-data-table>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Desirable</div>
                    <div>Aesthetic design creates emotion for a product.</div>
                  </div>
                  <v-chip color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                </div>
                <v-card dark>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Usable</div>
                    <div>Usability is an important aspect, but it is very ambiguous.</div>
                  </div>
                  <v-chip color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                </div>
                <v-card dark>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Findable</div>
                    <div>Users will abandon or become frustrated if they cannot quickly find what they are looking for.</div>
                  </div>
                  <v-chip color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                </div>
                <v-card dark>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Accessible</div>
                    <div>One in seven people worldwide require inclusive design and all users benefit from inclusive practices.</div>
                  </div>
                  <v-chip color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                </div>
                <v-card dark>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                <div slot="header" style="display:flex;justify-content:space-between;">
                  <div style="display:flex">
                    <div class="title list__title">Credible</div>
                    <div>Users must trust and believe the company, solution or content provided.</div>
                  </div>
                  <v-chip color="secondary" small class="ma-0 white--text success__chip">None Answered</v-chip>
                </div>
                <v-card dark>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  computed: {
    totalCount() {
      let count = this.useful.length;
      let na = this.numberNA.length;
      return count - na;
    },
    adjustedTotal() {
      let multiplier = 4;
      let total = this.totalCount;
      return total * multiplier;
    },
    weightedTotal() {
      let cos = this.numberCosmetic.length;
      let minor = this.numberMinor.length;
      let major = this.numberMajor.length;
      let ss = this.numberShowStopper.length;
      minor = minor * 2;
      major = major * 3;
      ss = ss * 4;
      return cos + minor + major + ss;
    },
    percentTotal() {
      let at = this.adjustedTotal;
      let wt = this.weightedTotal;
      let total = at - wt;
      let divide = total / at;
      let final = divide * 100;
      return Math.floor(final);
    },
    numberAnswered() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating != null;
      });
    },
    numberGood() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 5;
      });
    },
    numberCosmetic() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 4;
      });
    },
    numberMinor() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 3;
      });
    },
    numberMajor() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 2;
      });
    },
    numberShowStopper() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 1;
      });
    },
    numberNA() {
      return this.useful.filter(item => {
        let rating = item.rating;
        return rating == 0;
      });
    }
  },
  methods: {
    setRating(item, rating) {
      console.log(item);
      console.log(rating);
      item.rating = rating;
    }
  },
  data() {
    return {
      row: "radio-1",
      headers: [
        {
          text: "Questions",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Good",
          sortable: false,
          width: "110",
          value: "rating"
        },
        {
          text: "Cosmetic",
          sortable: false,
          width: "110",
          value: "rating"
        },
        {
          text: "Minor Issue",
          sortable: false,
          width: "110",
          value: "rating"
        },
        {
          text: "Major Issue",
          sortable: false,
          width: "110",
          value: "rating"
        },
        {
          text: "Show Stopper",
          sortable: false,
          width: "110",
          value: "rating"
        },
        {
          text: "N/A",
          sortable: false,
          width: "110",
          value: "rating"
        }
      ],
      useful: [
        {
          name:
            "Does the user understand the goal of the system without the need for training?",
          rating: null
        },
        {
          name: "Do features and functionality support users desired workflow?",
          rating: null
        },
        {
          name:
            "Are frequently used tasks readily available and support rapid success/completion?",
          rating: null
        },
        {
          name: "Have complex processes been broken down into multiple steps?",
          rating: null
        },
        {
          name:
            "Are there uneccessary steps in the user flow that could be reduced? ",
          rating: null
        },
        {
          name:
            "Are the correct interface elements used to achieve the goals in the most effective way?",
          rating: null
        },
        {
          name:
            "Are defaults changed based on role or can user's customize defaults?",
          rating: null
        },
        {
          name:
            "Does the system support and look correct on multiple devices if that is a user's goal?",
          rating: null
        }
      ]
    };
  }
};
</script>

<style scoped>
.list__title {
  width: 120px;
}
.success__chip {
  margin-right: 21px !important;
}
</style>
