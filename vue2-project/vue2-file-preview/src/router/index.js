import Vue from 'vue'
import Router from 'vue-router'
import FilePreview from '@/components/FilePreview'
import OfficeSdk from '@/components/OfficeSdk'
import OSSFilePreview from '@/components/OSSFilePreview'
import Pdfjsdist from '@/components/Pdfjsdist'
import VUEpdf from '@/components/VUEpdf'
import VUEpdf2 from '@/components/VUEpdf2'
import VUEpdf3 from '@/components/VUEpdf3'
import VUEpdf4 from '@/components/VUEpdf4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/filepreview',
      name: 'FilePreview',
      component: FilePreview
    },
    {
      path: '/officesdk',
      name: 'OfficeSdk',
      component: OfficeSdk
    },
    {
      path: '/ossfilepreview',
      name: 'OSSFilePreview',
      component: OSSFilePreview
    },
    {
      path: '/pdfjsdist',
      name: 'Pdfjsdist',
      component: Pdfjsdist
    },
    {
      path: '/vuepdf',
      name: 'VUEpdf',
      component: VUEpdf
    },
    {
      path: '/vuepdf2',
      name: 'VUEpdf2',
      component: VUEpdf2
    },
    {
      path: '/vuepdf3',
      name: 'VUEpdf3',
      component: VUEpdf3
    },{
      path: '/vuepdf4',
      name: 'VUEpdf4',
      component: VUEpdf4
    },

  ]
})
