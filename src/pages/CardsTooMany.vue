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
            <li>Having one list of content allows for faster scanning.</li>
            <li>One card, One Type. A card should envelop one content type.</li>
          </ul>
          <v-chip class="error white--text">Concerns</v-chip>
          <ul class="mb-4">
            <li>Breaking content into multiple containers makes it difficult to relate to a group, harder scan and takes up unnecessary space.</li>
            <li>Don't put multiple actions or content types on one card.</li>
          </ul>
          <v-chip class="primary white--text">Principles</v-chip>
          <ul class="mb-4">
            <li><router-link to="/gestaltproximity">Gestalt Principle - Proximity</router-link></li>
          </ul>
          <v-chip class="secondary white--text">More Information</v-chip>
          <ul>
            <li><a href="https://material.io/design/components/cards.html#" target="_blank">Material Design <i>"Cards"</i></a></li>
          </ul>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-toolbar flat height="64">
              <v-toolbar-title>Cards: Too Many</v-toolbar-title>
              <v-spacer />
              <v-toolbar-title>
                <span class="subheading" v-if="selectOption == 'justRight'">Card Defines Grouping</span>
                <span class="subheading" v-if="selectOption == 'tooMany'">Too Many Cards</span>
              </v-toolbar-title>
              <v-spacer />
              <global-btn-stacked-click name="Info" icon="mdi-information-outline" :onClick="activateInfo" />
            </v-toolbar>
            <v-card-text class="pb-0">
              <v-toolbar flat color="transparent">
                <v-spacer />
                <span>
                  <v-radio-group v-model="selectOption" row>
                    <v-radio label="Ideal" value="justRight" color="primary"></v-radio>
                    <v-radio label="Too Many" value="tooMany" color="error"></v-radio>
                  </v-radio-group>
                </span>
                <v-spacer />
              </v-toolbar>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 column align-center pt-5>
          <v-card :color="card_wrapper_color" :flat="card_wrapper_flat">
            <v-card-title class="title grey lighten-3" :style="{ background: card_background_toomany, marginBottom: card_margin_bottom, boxShadow: box_shadow }">
              Inbox
            </v-card-title>
            <v-list two-line :flat="!card_wrapper_flat" style="background:none;">
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  :style="{ background: card_background_toomany, marginBottom: card_margin_bottom, boxShadow: box_shadow }"
                >
                  {{ item.header }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
                ></v-divider>

                <v-list-tile
                  :style="{ background: card_background_toomany, marginBottom: card_margin_bottom, boxShadow: box_shadow }"
                  v-else
                  :key="item.title"
                  avatar
                  @click=""
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
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
  watch: {
    selectOption: function() {
      if (this.selectOption == "justRight") {
        this.card_wrapper_color = "white";
        this.card_wrapper_flat = false;
        this.card_background_toomany = "none";
        this.card_margin_bottom = "0px";
        this.box_shadow = "none";
      } else {
        this.card_wrapper_color = "transparent";
        this.card_wrapper_flat = true;
        this.card_background_toomany = "white";
        this.card_margin_bottom = "20px";
        this.box_shadow =
          "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)";
      }
    }
  },
  data() {
    return {
      drawerRight: false,
      selectOption: "justRight",
      card_wrapper_color: "white",
      card_wrapper_flat: false,
      card_background_toomany: "none",
      card_margin_bottom: "0px",
      box_shadow: "none",
      items: [
        { header: "Today" },
        {
          avatar: "http://i.pravatar.cc/300",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "http://i.pravatar.cc/280",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "http://i.pravatar.cc/320",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  }
};
</script>

<style scoped>
.body__text {
  font-size: 16px !important;
}
</style>
