<template>
  <v-btn
    flat
    color="secondary"
    class="btn__stacked"
     @click="navButtonFunctions(fnPath)"
  >
    <span>{{ name }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    fnPath: {
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
