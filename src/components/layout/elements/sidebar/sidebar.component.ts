import Vue from 'vue';
import { Component, Prop, Provide, Watch } from 'vue-property-decorator';
import { ArrowComponent } from './arrow/arrow.component';

@Component({
  name: 'SidebarComponent',
  template: require('./sidebar.component.html'),
  style: require('./sidebar.component.scss'),
  components: { ArrowComponent }
})
export class SidebarComponent extends Vue {
  
  @Prop({
    default: 'sidebar',
    validator: (value) => {
      let acceptedValues = ['sidebar', 'navbar'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  type: string;

  @Prop({
    default: 'black',
    validator: (value) => {
      let acceptedValues = ['white', 'black', 'darkblue'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  backgroundColor: string;

  @Prop({
    default: 'success',
    validator: (value) => {
      let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  activeColor: string;

  @Prop({ default: () => [] })
  sidebarLinks: Array<any>;

  get sidebarClasses() {
    if (this.type === 'sidebar') {
      return 'sidebar'
    } else {
      return 'collapse navbar-collapse off-canvas-sidebar'
    }
  }

  get navClasses() {
    if (this.type === 'sidebar') {
      return 'nav'
    } else {
      return 'nav navbar-nav'
    }
  }

  /**
   * Styles to animate the arrow near the current active sidebar link
   * @returns {{transform: string}}
   */
  get arrowMovePx() {
    return this.linkHeight * this.activeLinkIndex;
  }

  @Provide()
  linkHeight: number = 60;

  @Provide()
  activeLinkIndex: number = 0;

  @Provide()
  windowWidth: number = 0;

  @Provide()
  isWindows: boolean = false;

  @Provide()
  hasAutoHeight: boolean = false;

  @Watch('$route')
  onRouteChanged(newRoute: any, oldRoute: any) { 
    this.findActiveLink();
  }

  findActiveLink() {
    this.sidebarLinks.find((element, index) => {
      let found = element.path === this.$route.path;
      if (found) {
        this.activeLinkIndex = index;
      }
      return found;
    })
  }

  mounted() {
    this.findActiveLink();
  }
  
}

Vue.component('sidebar', SidebarComponent);