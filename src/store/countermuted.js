import { GET_COUNTER, SET_COUNTER } from "@/mutations/mutations-type";

export const state = {
  counter: 0,
};

export const mutations = {
  //COUNTER 2 WITH MUTATION TYPE
  [SET_COUNTER]: (state) => state.counter++,
};

export const actions = {
  //COUNTER NUMBER 2 WITH CONST AND MUTATIONS TYPE
  [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER),
};

export const getters = {
  //COUNTER 2
  [GET_COUNTER]: (state) => state.counter,
};
