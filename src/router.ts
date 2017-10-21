import Vue from 'vue';
import VueRouter from 'vue-router';
import { helloRoutes } from './components/hello';
import { aboutRoutes } from './components/about';

Vue.use(VueRouter);

const defaultRoute = { path: '*', redirect: '/' };

export default new VueRouter({
  routes: [ 
    helloRoutes,
    aboutRoutes,
    defaultRoute
  ]
})
