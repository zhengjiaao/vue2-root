import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueFetchGet from '@/components/VueFetchGet'
import VueFetchPost from '@/components/VueFetchPost'
import VueFetchPut from '@/components/VueFetchPut'
import VueFetchPostFile from '@/components/VueFetchPostFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/get',
      name: 'VueFetchGet',
      component: VueFetchGet
    }, {
      path: '/post',
      name: 'VueFetchPost',
      component: VueFetchPost
    }, {
      path: '/put',
      name: 'VueFetchPut',
      component: VueFetchPut
    }, {
      path: '/post/file',
      name: 'VueFetchPostFile',
      component: VueFetchPostFile
    }
  ]
})
