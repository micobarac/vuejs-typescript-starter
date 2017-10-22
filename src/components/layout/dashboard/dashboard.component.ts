import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { TopbarComponent } from '../elements/topbar/topbar.component';

@Component({
  name: 'DashboardComponent',
  template: require('./dashboard.component.html'),
  style: require('./dashboard.component.scss'),
  components: { TopbarComponent }
})
export class DashboardComponent extends Vue {
  [x: string]: any;
  
  toggleSidebar () {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.displaySidebar(false)
    }
  }
  
}
