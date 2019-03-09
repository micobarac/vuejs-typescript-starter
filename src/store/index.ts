import Vue from 'vue';
import Vuex from 'vuex';
import { sidebar } from './sidebar';
import { language } from './language.store';
import { gauth2 } from '../components/layout/elements/login/gauth2.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    sidebar,
    language,
    gauth2
  },
  plugins: []
});
