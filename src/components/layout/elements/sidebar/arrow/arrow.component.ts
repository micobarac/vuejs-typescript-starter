import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'ArrowComponent',
  template: require('./arrow.component.html'),
  style: require('./arrow.component.scss')
})
export class ArrowComponent extends Vue {
  
  @Prop({ default: 0 })
  moveY: Number;

  /**
   * Styles to animate the arrow
   * @returns {{transform: string}}
   */
  get arrowStyle() {
    return {
      transform: `translate3d(0px, ${this.moveY}px, 0px)`
    }
  }
  
}

Vue.component('arrow', ArrowComponent);