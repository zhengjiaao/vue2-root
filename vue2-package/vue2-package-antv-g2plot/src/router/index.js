import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bar', // 条形图
      name: 'bar',
      component: () => import('../views/g2/BarView.vue'),
    },
    {
      path: '/column', // 柱状图
      name: 'column',
      component: () => import('../views/g2/ColumnView.vue'),
    },
    {
      path: '/line', // 折线图
      name: 'line',
      component: () => import('../views/g2/LineView.vue'),
    },
  ]
})
