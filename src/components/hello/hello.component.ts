import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Logger } from '../../utils/log';

@Component({
  name: 'HelloComponent',
  template: require('./hello.component.html'),
  style: require('./hello.component.scss')
})
export class HelloComponent extends Vue {

  @Provide()
  title: String = 'Hello from the other side!';
  
  protected logger: Logger;
  
  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('Hello is ready!'));
  }
  
}

Vue.component('hello', HelloComponent);