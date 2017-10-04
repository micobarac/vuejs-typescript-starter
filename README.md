# Vue.js - Typescript starter project

> A Vue.js - Typescript starter project

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production
yarn build

# build for production with minification
yarn prod
```

## Vue.js components

> Create Vue.js components, with structure similar to Angular 4 components, with separate ```*.ts```, ```*.html``` and ```*.scss``` files. The ```*.vue``` files support is removed, as it is not practical for complex components.

``` typescript
import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { Logger } from '../../utils/log';

@Component({
  name: 'HelloComponent',
  template: require('./hello.component.html'),
  style: require('./hello.component.scss')
})
export class HelloComponent extends Vue {

  @Provide()
  title: String = 'Hello from the other side!';
  
  protected logger: Logger;
  
  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('Hello is ready!'));
  }
  
}

Vue.component('hello', HelloComponent);

```

For detailed explanation on how things work, checkout the following guides:

* [Vue.js Property Decorator](http://github.com/kaorun343/vue-property-decorator)
* [Webpack](http://vuejs-templates.github.io/webpack/)
* [Webpack loader for Vue.js components](http://vuejs.github.io/vue-loader)
* [Awesome TypeScript loader for webpack](https://github.com/s-panferov/awesome-typescript-loader)
