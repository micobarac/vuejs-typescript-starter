import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import Vue from 'vue';

export interface Language {
  text: string;
  value: string;
}

export interface LanguagesState {
  languages: Language[];
  selectedLanguage: string;
}

export const DEFAULT_LANGUAGE: Language = {
  text: 'EN',
  value: 'en'
};

export const state: LanguagesState = {
  languages: [{
    text: 'FR',
    value: 'fr'
  },
    {
      text: 'EN',
      value: 'en'
    },
    {
      text: 'ES',
      value: 'es'
    }
  ],
  selectedLanguage: DEFAULT_LANGUAGE.value
};

export const getters: GetterTree<LanguagesState, any> = {
  languages: (_) => _.languages,
  selectedLanguage: (_) => _.selectedLanguage,
};

export const mutations: MutationTree<LanguagesState> = {
  selectLanguage(_, {locale, vm}) {
    _.selectedLanguage = locale;
    vm.$moment.locale(locale);
  },
};

export const actions: ActionTree<LanguagesState, any> = {};

export const language: Module<LanguagesState, any> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
