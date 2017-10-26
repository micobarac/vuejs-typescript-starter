// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';

// Component routes
import { dashboardRoutes } from '../components/layout/dashboard';
import { notFoundRoutes } from '../components/layout/not-found';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [ 
    dashboardRoutes,
    notFoundRoutes
  ],
  linkActiveClass: 'active'
})
