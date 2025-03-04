// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from "vue-touch";
import * as Base64 from 'js-base64'

Vue.use(Base64);
Vue.use(VueTouch, {name: "v-touch"});
Vue.use(ElementUI);

//生成环境警告提示 默认false , 开发环境可以启动
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
