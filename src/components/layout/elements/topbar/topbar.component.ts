import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';

@Component({
  name: 'TopbarComponent',
  template: require('./topbar.component.html'),
  style: require('./topbar.component.scss')
})
export class TopbarComponent extends Vue {
  [x: string]: any;
  
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

  toggleSidebar() {
    this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
  };

  hideSidebar() {
    this.$sidebar.displaySidebar(false);
  }
  
}

Vue.component('topbar', TopbarComponent);