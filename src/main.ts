// Vue
import Vue from 'vue';

// Vuex
import { sync } from 'vuex-router-sync';
import { store } from './store';

// Router
import router from './router/router';

// Vuex router sync
sync(store, router);

// Plugins
import vClickOutside from 'v-click-outside';
import BootstrapVue from 'bootstrap-vue'

// Components
import { AppComponent } from './components/layout/app';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Setup
Vue.config.productionTip = false;

// Plugins
Vue.use(vClickOutside);
Vue.use(BootstrapVue);

// Vue init
new Vue({
  el: "app",
  router,
  store,
  components: {
    AppComponent
  }
});
