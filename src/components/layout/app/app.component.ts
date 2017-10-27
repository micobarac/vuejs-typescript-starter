import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { SidebarComponent } from '../elements/sidebar';
import { DropdownComponent } from '../elements/topbar/dropdown';
import { SidebarLink } from './../../../models/types';
import { Logger } from '../../../utils/log';

const SidebarGetter = namespace('sidebar', Getter);

@Component({
  name: 'AppComponent',
  template: require('./app.component.html'),
  style: require('./app.component.scss'),
  components: { SidebarComponent, DropdownComponent }
})
export class AppComponent extends Vue {
  @SidebarGetter
  isSidebarVisible: Boolean;

  @SidebarGetter
  isSidebarMinimal: Boolean;

  @SidebarGetter
  sidebarLinks: Array<SidebarLink>;
  
  @Provide()
  title: String = 'Welcome to Your Vue.js App';
  
  protected logger: Logger;
  
  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('App is ready!'));
  }
}

Vue.component('app', AppComponent);