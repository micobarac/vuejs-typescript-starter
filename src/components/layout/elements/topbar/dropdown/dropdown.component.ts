import Vue from 'vue';
import { Component, Provide, Prop } from 'vue-property-decorator';
import { mixin as clickaway } from 'vue-clickaway';

@Component({
  name: 'Dropdown',
  template: require('./dropdown.component.html'),
  style: require('./dropdown.component.scss'),
  mixins: [clickaway]
})
export class DropdownComponent extends Vue {
  @Prop()
  public title!: string;

  @Prop()
  public icon!: string;

  @Provide()
  public isOpen: boolean = false;

  public toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  public closeDropDown() {
    this.isOpen = false;
  }
}

Vue.component('dropdown', DropdownComponent);
