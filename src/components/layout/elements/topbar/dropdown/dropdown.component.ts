import Vue from 'vue';
import { Component, Provide, Prop } from 'vue-property-decorator';
import { mixin as clickaway } from 'vue-clickaway';

@Component({
  name: 'Dropdown',
  template: require('./dropdown.component.html'),
  style: require('./dropdown.component.scss'),
  mixins: [ clickaway ]
})
export class DropdownComponent extends Vue {
  @Prop()
  title: String;

  @Prop()
  icon: String;

  @Provide()
  isOpen: boolean = false;

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  };

  closeDropDown() {
    this.isOpen = false;
  };
}

Vue.component('dropdown', DropdownComponent);