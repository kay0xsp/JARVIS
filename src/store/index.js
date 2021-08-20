import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      console.log("increased(action)");
      commit("increaseCounter");
    },
    decreaseCounter({ commit }) {
      console.log("decreased");
      commit("decreaseCounter");
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
