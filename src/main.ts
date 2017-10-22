// Vue
import Vue from 'vue';

// Vuex
import { sync } from 'vuex-router-sync';
import store from './store';

// Router
import router from './router';

// Vuex router sync
sync(store, router);

// Plugins
import vClickOutside from 'v-click-outside';
//import SidebarPlugin from './components/layout/elements/sidebar';
import { SidebarComponent } from './components/layout/elements/sidebar';

// Components
import { AppComponent } from './components/layout/app';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';

// Setup
Vue.config.productionTip = false;

Vue.use(vClickOutside);
//Vue.use(SidebarPlugin);

// Vue init
new Vue({
  el: "app",
  router,
  store,
  components: {
    AppComponent,
    SidebarComponent
  }
});
