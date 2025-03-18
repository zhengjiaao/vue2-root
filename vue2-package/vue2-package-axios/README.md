# vue2-package-axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 安装组件

```sh
# 安装 axios@0.21.1 兼容 vue2
npm install axios@0.21.1

# 安装 axios 最新版1.8.x，不兼容 vue2
#npm install axios --save
# or
#cnpm install axios --save # 区别就是国内的淘宝镜像，速度会快很多

# 安装 element-ui（含样式）
npm install element-ui --save
```

## 应用组件

全局：

```js
// 全局引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式文件

Vue.use(ElementUI)
```

局部：

```js
// 局部引入element-ui
import { Button, Select } from 'element-ui';

export default {
  components: {
    [Button.name]: Button,
    [Select.name]: Select,
  }
}
```
