export const state = {
  counter: 0,
};

export const mutations = {
  //COUNTER 1 VANILLA
  increaseCounter(state) {
    state.counter++;
  },
  decreaseCounter(state) {
    state.counter--;
  },
};

export const actions = {
  //COUNTER NUMBER ONE
  increaseCounter({ commit }) {
    console.log("increased(action)");
    commit("increaseCounter");
  },
  decreaseCounter({ commit }) {
    console.log("decreased");
    commit("decreaseCounter");
  },
};

export const getters = {
  //COUNTER 1
  counterSquared(state) {
    return state.counter * state.counter;
  },
};
