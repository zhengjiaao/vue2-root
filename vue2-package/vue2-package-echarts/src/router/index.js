import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EChartsComponent from '@/components/EChartsComponent'
import BaseView from '@/views/echarts/BaseView'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'echarts',
      // component: EChartsComponent,
      component: () => import('../components/EChartsComponent.vue'),
    },
    {
      path: '/base',
      name: 'base',
      component: () => import('../views/echarts/BaseView.vue'),
      // or 采用以下方式都可以
      // component: () => import('../views/echarts/BaseView'),
      // component: () => import('@/views/echarts/BaseView'),
      // component: BaseView,
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('../views/echarts/BarView.vue'),
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('../views/echarts/LineView.vue'),
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('../views/echarts/PieView.vue'),
    },
    {
      path: '/scatter',
      name: 'scatter',
      component: () => import('../views/echarts/ScatterView.vue'),
    },
    {
      path: '/radar',
      name: 'radar',
      component: () => import('../views/echarts/RadarView.vue'),
    },
    {
      path: '/sankey',
      name: 'sankey',
      component: () => import('../views/echarts/SankeyView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/echarts/map/MapView.vue'),
    },
    {
      path: '/3d/globe',
      name: '3d-globe',
      component: () => import('../views/echarts/3D/GlobeView.vue'),
    },
    {
      path: '/3d/map3d',
      name: '3d-map3d',
      component: () => import('../views/echarts/3D/Map3DView.vue'),
    },
    {
      path: '/3d/lines3d',
      name: '3d-lines3d',
      component: () => import('../views/echarts/3D/Lines3DView.vue'),
    },
  ]
})
