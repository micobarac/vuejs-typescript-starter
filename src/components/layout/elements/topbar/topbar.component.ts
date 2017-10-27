import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { DropdownComponent } from './dropdown';

const SidebarGetter = namespace('sidebar', Getter);
const SidebarAction = namespace('sidebar', Action);

@Component({
  name: 'TopbarComponent',
  template: require('./topbar.component.html'),
  style: require('./topbar.component.scss'),
  components: { DropdownComponent }
})
export class TopbarComponent extends Vue {
  [x: string]: any;

  @SidebarGetter
  isSidebarVisible: Boolean;

  @SidebarGetter
  isSidebarMinimal: Boolean;

  @SidebarAction
  displaySidebar;

  @SidebarAction
  minimizeSidebar;

  @SidebarAction
  toggleSidebarDisplay;

  @SidebarAction
  toggleSidebarSize;
  
  @Provide()
  activeNotifications: boolean = false;

  get routeName() {
    const {name} = this.$route;
    return this.capitalizeFirstLetter(name);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  toggleNotificationDropDown() {
    this.activeNotifications = !this.activeNotifications;
  };

  closeDropDown() {
    this.activeNotifications = false;
  };

  hideSidebar() {
    this.displaySidebar(false);
  }
}

Vue.component('topbar', TopbarComponent);