import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueDome from '@/components/VueDome'
import VueResourceGet from '@/components/VueResourceGet'
import VueResourcePost from '@/components/VueResourcePost'
import VueResourcePostFile from '@/components/VueResourcePostFile'
import VueResourcePut from '@/components/VueResourcePut'
import VueResourceDelete from '@/components/VueResourceDelete'
import VueResourceJsonp from '@/components/VueResourceJsonp'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dome',
      name: 'VueDome',
      component: VueDome
    },
    {
      path: '/get',
      name: 'VueResourceGet',
      component: VueResourceGet
    },
    {
      path: '/post',
      name: 'VueResourcePost',
      component: VueResourcePost
    },
    {
      path: '/post/file',
      name: 'VueResourcePostFile',
      component: VueResourcePostFile
    },
    {
      path: '/put',
      name: 'VueResourcePut',
      component: VueResourcePut
    },
    {
      path: '/delete',
      name: 'VueResourceDelete',
      component: VueResourceDelete
    },
    {
      path: '/jsonp',
      name: 'VueResourceJsonp',
      component: VueResourceJsonp
    }
  ]
})
