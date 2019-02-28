import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Logger } from '../../../utils/log';
import { SidebarComponent } from '../elements/sidebar';
import { DropdownComponent } from '../elements/topbar/dropdown';
import { SidebarLink } from './../../../models/types';

const Sidebar = namespace('sidebar');

@Component({
  name: 'AppComponent',
  template: require('./app.component.html'),
  style: require('./app.component.scss'),
  components: { SidebarComponent, DropdownComponent }
})
export class AppComponent extends Vue {
  @Sidebar.Getter
  public isSidebarVisible!: boolean;

  @Sidebar.Getter
  public isSidebarMinimal!: boolean;

  @Sidebar.Getter
  public sidebarLinks!: SidebarLink[];

  @Provide()
  public title: string = 'Welcome to Your Vue.js App';

  protected logger: Logger = new Logger();

  public mounted() {
    if (!this.logger) {
      this.logger = new Logger();
    }
    this.$nextTick(() => this.logger.info('App is ready!'));
  }
}

Vue.component('app', AppComponent);
