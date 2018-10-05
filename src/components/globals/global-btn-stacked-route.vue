<template>
  <v-btn
    flat
    color="secondary"
    exact
    class="btn__stacked"
    :to="routePath"
    :value="name"
  >
    <span>{{ name }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    routePath: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
