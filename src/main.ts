// Vue
import Vue from 'vue';

// Router
import router from './router';

// Plugins
import vClickOutside from 'v-click-outside';
import SidebarPlugin from './components/layout/elements/sidebar';

// Components
import { AppComponent } from './components/layout/app';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/main.scss';

// Setup
Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(SidebarPlugin);

// Vue init
new Vue({
  el: "app",
  router,
  components: {
    AppComponent
  }
});
