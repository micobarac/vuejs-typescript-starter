import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'NotFoundComponent',
  template: require('./not-found.component.html'),
  style: require('./not-found.component.scss')
})
export class NotFoundComponent extends Vue {}
