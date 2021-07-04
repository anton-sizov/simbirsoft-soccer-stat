import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import setupInterceptors from "./helpers/interceptors";
import vuetify from "./plugins/vuetify";

setupInterceptors();

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
