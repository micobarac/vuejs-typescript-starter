import Vue from 'vue';
import Vuex from 'vuex';
import { sidebar } from './sidebar';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    sidebar
  },
  plugins: []
});
