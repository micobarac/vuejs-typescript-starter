import * as types from './mutation-types';

export const actions = {
  displaySidebar: ({ commit }, value) => {
    commit(types.DISPLAY_SIDEBAR, { value });
  },
  toggleSidebar: ({ commit }) => {
    commit(types.TOGGLE_SIDEBAR);
  }
}