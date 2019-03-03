import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DropdownComponent } from './dropdown';
import {Language} from '../../../../store/language.store';

const Sidebar = namespace('sidebar');
const Language = namespace('language');

@Component({
  name: 'TopbarComponent',
  template: require('./topbar.component.html'),
  style: require('./topbar.component.scss'),
  components: { DropdownComponent }
})
export class TopbarComponent extends Vue {
  [x: string]: any;

  @Sidebar.Getter
  public isSidebarVisible!: boolean;

  @Sidebar.Getter
  public isSidebarMinimal!: boolean;

  @Sidebar.Action
  public displaySidebar!: (state: boolean) => void;

  @Sidebar.Action
  public minimizeSidebar: any;

  @Sidebar.Action
  public toggleSidebarDisplay: any;

  @Sidebar.Action
  public toggleSidebarSize: any;

  @Language.Getter
  public languages !: Language[];

  @Language.Getter
  public selectedLanguage !: string;

  @Provide()
  public activeNotifications: boolean = false;

  @Language.Mutation
  private selectLanguage !: ({}) => void;

  get routeName() {
    const { name } = this.$route;
    return this.capitalizeFirstLetter(name || '');
  }

  public capitalizeFirstLetter(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  public onSelectedLanguageOptionChanged(value: string) {
    this.selectLanguage({locale: value, vm: this});
  }

  public toggleNotificationDropDown() {
    this.activeNotifications = !this.activeNotifications;
  }

  public closeDropDown() {
    this.activeNotifications = false;
  }

  public hideSidebar() {
    this.displaySidebar(false);
  }

}

Vue.component('topbar', TopbarComponent);
