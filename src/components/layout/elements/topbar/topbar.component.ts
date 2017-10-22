import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import { Component, Provide } from 'vue-property-decorator';

@Component({
  name: 'TopbarComponent',
  template: require('./topbar.component.html'),
  style: require('./topbar.component.scss'),
  computed: {
    ...mapState(['isSidebarVisible'])
  },
  methods: { 
    ...mapActions(['displaySidebar', 'toggleSidebar']) 
  }
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

  hideSidebar() {
    this.displaySidebar(false);
  }
  
}

Vue.component('topbar', TopbarComponent);