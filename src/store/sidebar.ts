import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { SidebarState, SidebarLink } from '../models/types';

export const state: SidebarState = {
  isSidebarVisible: false,
  isSidebarMinimal: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      //path: '/admin/overview',
      path: '/'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list'
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
  ]
}

export const getters: GetterTree<SidebarState, any> = {
  isSidebarVisible: state => state.isSidebarVisible,
  isSidebarMinimal: state => state.isSidebarMinimal,
  sidebarLinks: state => state.sidebarLinks
}

export const mutations: MutationTree<SidebarState> = {
  displaySidebar(state, value) {
    state.isSidebarVisible = value;
  },
  minimizeSidebar(state, value) {
    state.isSidebarMinimal = value;
  },
  toggleSidebarDisplay(state) {
    state.isSidebarVisible = !state.isSidebarVisible;
  },
  toggleSidebarSize(state) {
    state.isSidebarMinimal = !state.isSidebarMinimal;
  }
}

export const actions: ActionTree<SidebarState, any> = {
  displaySidebar: ({ commit }, value) => {
    commit('displaySidebar', value);
  },
  minimizeSidebar: ({ commit }, value) => {
    commit('minimizeSidebar', value);
  },
  toggleSidebarDisplay: ({ commit }) => {
    commit('toggleSidebarDisplay');
  },
  toggleSidebarSize: ({ commit }) => {
    commit('toggleSidebarSize');
  }
}

export const sidebar: Module<SidebarState, any> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}