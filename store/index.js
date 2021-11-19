import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    font: +localStorage.font || 1,
  },
  getters: {},
  mutations: {
    updateFont(state, font) {
      state.font = font;
      localStorage.font = font;
    },
  },
  actions: {
    updateFont({ commit }, font) {
      commit("updateFont", font);
    },
  },
});

export default store;
