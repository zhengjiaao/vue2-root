# vue2-package-echarts

> A Vue.js project

- [Apache ECharts 官网](https://echarts.apache.org/)

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

## 安装组件

```sh
# 安装 echarts
npm install echarts --save

# 安装 echarts 类型定义
npm install --save @types/echarts

# 安装 echarts-gl 三维可视化(3D、地球等)
npm install echarts-gl --save
npm install @types/geojson --save
```

## 配置代理的两种实现

### 1.自定义的 Webpack 的 build/webpack.dev.conf.js 文件中的代理配置

build/webpack.dev.conf.js

```js
proxy: config.dev.proxyTable
```

config/index.js 中配置代理

```javascript
    proxyTable: {
      '/api': {
        target: 'https://echarts.apache.org/examples',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
```

or 直接在 build/webpack.dev.conf.js 文件中配置代理

```js
 proxy: {
      '/api': {
        target: 'https://echarts.apache.org/examples',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
```

### 2.Vue CLI 的 vue.config.js 文件中的代理配置

package.json

```json
     {
       "scripts": {
         "serve": "vue-cli-service serve"
       }
     }

```

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://echarts.apache.org/examples',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};

```
