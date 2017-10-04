import Vue from 'vue';
import router from './router';
import { AppComponent } from './components/app';

require('./assets/styles/main.scss');

Vue.config.productionTip = false

new Vue({
  el: "app",
  router,
  components: {
    AppComponent
  }
});
