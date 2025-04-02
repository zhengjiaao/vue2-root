# vue2-package-antv

> A Vue.js project

- [AntV 官网](https://antv.antgroup.com/)

注：AntV 是 React UI 组件，vue 不兼容，仅与react兼容，因此不能直接使用。可以采用封装版本，例如：`g2plot`、`l7plot`等。

## 组件框架兼容性

> 注：AntV 与 vue2、vue3 兼容不友好，就连官网示例都是基于 React的。总体感觉对vue框架不太好，AntV 的很多组件都是基于React的开发的。

| 组件          | 官网文档                                       | Vue2 兼容性                       | React 兼容性 |
|-------------|--------------------------------------------|--------------------------------|-----------|
| AntV/G2 图表  | [AntV/G2](https://g2.antv.antgroup.com/zh) | **不兼容**（推荐使用g2plot或需自己封装）      | 兼容        |
| AntV/S2 表格  | [AntV/S2](https://s2.antv.antgroup.com/zh) | **不兼容**（不推荐，官网已放弃维护vue版本，需自己封装 | 兼容        |
| AntV/G6 关系图 | [AntV/G6](https://g6.antv.antgroup.com/zh) | **不兼容**（不推荐，需自己封装）             | 兼容        |
| AntV/X6 流程图 | [AntV/X6](https://x6.antv.antgroup.com/zh) | **不兼容**（不推荐，需自己封装）             | 兼容        |
| AntV/L7 地图  | [AntV/L7](https://l7.antv.antgroup.com/zh) | **不兼容**（不推荐，需自己封装）             | 兼容        |

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/)
and [docs for vue-loader](http://vuejs.github.io/vue-loader).
