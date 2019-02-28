import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { TopbarComponent } from '../elements/topbar';
import { SidebarLink } from './../../../models/types';

const Sidebar = namespace('sidebar');

@Component({
  name: 'DashboardComponent',
  template: require('./dashboard.component.html'),
  style: require('./dashboard.component.scss'),
  components: { TopbarComponent }
})
export default class DashboardComponent extends Vue {
  @Sidebar.Getter
  public isSidebarVisible!: boolean;

  @Sidebar.Getter
  public sidebarLinks!: SidebarLink[];

  @Sidebar.Action
  public toggleSidebarDisplay: any;
}
