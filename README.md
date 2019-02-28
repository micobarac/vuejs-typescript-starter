# A Vue.js - Typescript starter project

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

## Vue.js components

> Create Vue.js components, with structure similar to Angular components, with separate `*.ts`, `*.html` and `*.scss` files. The `*.vue` files support is removed, as it is not practical for complex components.

```typescript
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { TopbarComponent } from '../elements/topbar';
import { SidebarLink } from './../../../models/types';

const Sidebar = namespace('sidebar');

@Component({
  name: 'DashboardComponent',
  template: require('./dashboard.component.html'),
  style: require('./dashboard.component.scss'),
  components: { TopbarComponent }
})
export default class DashboardComponent extends Vue {
  @Sidebar.Getter
  public isSidebarVisible!: boolean;

  @Sidebar.Getter
  public sidebarLinks!: SidebarLink[];

  @Sidebar.Action
  public toggleSidebarDisplay: any;
}
```

For detailed explanation on how things work, checkout the following guides:

- [Vue.js Property Decorator](http://github.com/kaorun343/vue-property-decorator)
- [Webpack](http://vuejs-templates.github.io/webpack/)
- [Webpack loader for Vue.js components](http://vuejs.github.io/vue-loader)
- [Awesome TypeScript loader for webpack](https://github.com/s-panferov/awesome-typescript-loader)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
