<template>
  <v-list>
    <v-list-tile
      v-for="item in listItems"
      :key="item.name"
      :color="color"
      @click="listClick(item.route, item.fn, item.url)"
    >
      <v-list-tile-action>
        <v-icon :color="color" v-html="item.icon"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.name"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    listClick(route, fn, url) {
      if (route != null) {
        this.$router.push(route);
      } else if (url != null) {
        this.navButtonHref(url);
      } else {
        this.navButtonFunctions(fn);
      }
    }
  }
};
</script>
