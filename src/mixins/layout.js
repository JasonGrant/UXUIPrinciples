// Vue.js Mixins
// https://vuejs.org/v2/guide/mixins.html

export default {
  methods: {
    navButtonFunctions: function(fn) {
      if (fn == "logoutUser") {
        window.location = "/logout";
      } else if (fn == "flipLayout") {
        this.$store.dispatch("layout/toggleLayoutDirection");
      } else if (fn == "toggleAppAbout") {
        this.$store.dispatch("layout/toggleAppAbout");
      } else if (fn == "toggleMobileNav") {
        this.$store.dispatch("layout/toggleMobileNav");
      } else if (fn == "toggleMobileSettings") {
        this.$store.dispatch("layout/toggleMobileSettings");
      } else {
        console.log("Function " + fn + " not found in @/mixins/layout.js");
      }
    },
    navButtonHref: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
};
