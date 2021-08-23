import Vue from "vue";
import Vuex from "vuex";
import * as counter2 from "../store/countermuted";
import * as counterMU from "../store/counterBasic";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counterMU,
    counter2,
  },
});
