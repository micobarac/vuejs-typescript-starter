import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Logger } from '../../../utils/log';

@Component({
  name: 'AppComponent',
  template: require('./app.component.html'),
  style: require('./app.component.scss')
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