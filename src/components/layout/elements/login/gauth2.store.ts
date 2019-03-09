import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import { SIGNOUT, UPDATE_GOOGLE_USER } from './gauth2.store.mutation';
import GoogleUser = gapi.auth2.GoogleUser;

export interface LoginState {
  isSignIn: boolean;
  user?: GoogleUser;
  accessToken?: string;
}

export const state: LoginState = {
  isSignIn: false,
  user: undefined,
  accessToken: undefined
};

export const getters: GetterTree<LoginState, any> = {
  isSignIn: (_) => _.isSignIn,
  user: (_) => _.user,
  accessToken: (_) => _.accessToken
};

export const mutations: MutationTree<LoginState> = {
  [UPDATE_GOOGLE_USER](_, googleUser: GoogleUser) {
    _.user = googleUser;
    _.isSignIn = true;
    _.accessToken = googleUser.getAuthResponse().access_token;
  },
  [SIGNOUT](_) {
    _.user!.disconnect();
    _.user = undefined;
    _.accessToken = undefined;
    _.isSignIn = false;
  }
};

export const actions: ActionTree<LoginState, any> = {};

export const gauth2: Module<LoginState, any> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
