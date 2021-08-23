import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import Vuex from "vuex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "./store";
import vuetify from "./plugins/vuetify";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
