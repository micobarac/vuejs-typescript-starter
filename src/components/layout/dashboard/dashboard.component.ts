import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { TopbarComponent } from '../elements/topbar';

const SidebarGetter = namespace('sidebar', Getter);
const SidebarAction = namespace('sidebar', Action);

@Component({
  name: 'DashboardComponent',
  template: require('./dashboard.component.html'),
  style: require('./dashboard.component.scss'),
  components: { TopbarComponent }
})
export default class DashboardComponent extends Vue {
  @SidebarGetter
  isSidebarVisible;

  @SidebarGetter
  sidebarLinks;

  @SidebarAction
  toggleSidebar;
}
