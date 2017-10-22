import Vue from 'vue';
import Vuex from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

const state = {
  isSidebarVisible: false,
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

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})