import Vue from 'vue';
import Vuex from 'vuex';
import { sidebar } from './sidebar';
import {language} from './language.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    sidebar,
    language,
  },
  plugins: []
});
