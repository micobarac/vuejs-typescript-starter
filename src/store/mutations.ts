import * as types from './mutation-types';

export const mutations = {
  [types.DISPLAY_SIDEBAR] (state, value) {
    state.isSidebarVisible = value;
  },
  [types.TOGGLE_SIDEBAR] (state) {
    state.isSidebarVisible = !state.isSidebarVisible;
  }
}