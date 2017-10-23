import Vue from 'vue';
import { mapState } from 'vuex';
import { Component, Provide } from 'vue-property-decorator';
import { SidebarComponent } from './../elements/sidebar/sidebar.component';
import { Logger } from '../../../utils/log';

@Component({
  name: 'AppComponent',
  template: require('./app.component.html'),
  style: require('./app.component.scss'),
  computed: {
    ...mapState(['isSidebarVisible', 'sidebarLinks'])
  },
  components: { SidebarComponent }
})
export class AppComponent extends Vue {

  @Provide()
  title: String = 'Welcome to Your Vue.js App';
  
  protected logger: Logger;
  
  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('App is ready!'));
  }
  
}

Vue.component('app', AppComponent);