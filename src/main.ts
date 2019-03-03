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
import BootstrapVue from 'bootstrap-vue';
// @ts-ignore
import VueMoment from 'vue-moment';
// Components
import { AppComponent } from './components/layout/app';

// Styles
import './assets/styles/main.scss';

// Setup
Vue.config.productionTip = false;
import moment from 'moment';

// Plugins
Vue.use(vClickOutside);
Vue.use(BootstrapVue);
Vue.use(VueMoment, {moment});

// Vue init
const app = new Vue({
  el: 'app',
  router,
  store,
  components: {
    AppComponent
  }
});
