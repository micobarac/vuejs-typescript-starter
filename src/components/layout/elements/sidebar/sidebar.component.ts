import Vue from 'vue';
import { Component, Prop, Provide, Watch } from 'vue-property-decorator';
import { ArrowComponent } from './arrow';

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
      const acceptedValues = ['sidebar', 'navbar'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  public type!: string;

  @Prop({
    default: 'black',
    validator: (value) => {
      const acceptedValues = ['white', 'black', 'darkblue'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  public backgroundColor!: string;

  @Prop({
    default: 'success',
    validator: (value) => {
      const acceptedValues = ['primary', 'info', 'success', 'warning', 'danger'];
      return acceptedValues.indexOf(value) !== -1;
    }
  })
  public activeColor!: string;

  @Prop({ default: () => [] })
  public sidebarLinks!: any[];

  get sidebarClasses() {
    if (this.type === 'sidebar') {
      return 'sidebar';
    } else {
      return 'collapse navbar-collapse off-canvas-sidebar';
    }
  }

  get navClasses() {
    if (this.type === 'sidebar') {
      return 'nav';
    } else {
      return 'nav navbar-nav';
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
  public linkHeight: number = 60;

  @Provide()
  public activeLinkIndex: number = 0;

  @Provide()
  public windowWidth: number = 0;

  @Provide()
  public isWindows: boolean = false;

  @Provide()
  public hasAutoHeight: boolean = false;

  @Watch('$route')
  public onRouteChanged(newRoute: any, oldRoute: any) {
    this.findActiveLink();
  }

  public findActiveLink() {
    this.sidebarLinks.find((element, index) => {
      const found = element.path === this.$route.path;
      if (found) {
        this.activeLinkIndex = index;
      }
      return found;
    });
  }

  public mounted() {
    this.findActiveLink();
  }
}

Vue.component('sidebar', SidebarComponent);
