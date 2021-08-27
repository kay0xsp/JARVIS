import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import Vuex from "vuex";

import anime from "animejs/lib/anime.es.js";

//LEAFLET
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

//FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret);

//VUEX / VUETIFY
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.use(Vuex);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  anime,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
