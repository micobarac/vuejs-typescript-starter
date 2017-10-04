import Vue from 'vue';
import Router from 'vue-router';
import { HelloComponent } from './components/hello';
import { AboutComponent } from './components/about';

Vue.use(Router);

export default new Router({
  routes: [ 
    { path: '/', name: 'Hello', component: HelloComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '*', redirect: '/' }  
  ]
})
