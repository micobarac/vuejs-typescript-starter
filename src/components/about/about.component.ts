import Vue from 'vue';
import Component from 'vue-class-component';
import { Logger } from '../../utils/log';

@Component({
  name: 'AboutComponent',
  template: require('./about.component.html'),
  style: require('./about.component.scss')
})
export class AboutComponent extends Vue {
  
  protected logger: Logger;
  repo: string = 'https://vuejs.org/';
  
  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('About is ready!'));
  }
  
}