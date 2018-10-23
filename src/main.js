import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./state/store";
import "./components/globals/_globals";
import Layout from "./mixins/layout";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.mixin(Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
