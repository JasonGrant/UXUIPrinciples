<template>
  <v-btn
    flat
    :color="color"
    class="btn__stacked"
    style="height: 100%;"
    @click="onClick"
  >
    <span>{{ name }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "secondary"
    }
  }
};
</script>