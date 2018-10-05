<template>
  <div>
    <layout-horizontal-md-and-up v-if="layoutConfig.layout_direction_horizontal == true && $vuetify.breakpoint.mdAndUp" />
    <layout-vertical-md-and-up v-if="$vuetify.breakpoint.mdAndUp && layoutConfig.layout_direction_horizontal == false" />
    <layout-sm-and-dn v-if="$vuetify.breakpoint.smAndDown" />
  </div>
</template>

<script>
import LayoutHorizontalMdAndUp from "@/layouts/LayoutHorizontalMdAndUp";
import LayoutVerticalMdAndUp from "@/layouts/LayoutVerticalMdAndUp";
import LayoutSmAndDn from "@/layouts/LayoutSmAndDn";

export default {
  name: "App",
  components: {
    LayoutHorizontalMdAndUp,
    LayoutVerticalMdAndUp,
    LayoutSmAndDn
  },
  computed: {
    layoutConfig() {
      return this.$store.getters["layout/getConfig"];
    }
  }
};
</script>

<style lang="stylus">
@import './assets/stylus/main';
</style>
