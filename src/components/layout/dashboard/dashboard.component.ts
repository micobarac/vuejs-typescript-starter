import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import { Component } from 'vue-property-decorator';
import { TopbarComponent } from '../elements/topbar/topbar.component';

@Component({
  name: 'DashboardComponent',
  template: require('./dashboard.component.html'),
  style: require('./dashboard.component.scss'),
  components: { TopbarComponent },
  computed: {
    ...mapState(['isSidebarVisible', 'sidebarLinks'])
  },
  methods: { 
    ...mapActions(['toggleSidebar']) 
  }
})
export class DashboardComponent extends Vue {
}
