import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Top from '@/components/Top'
import TimuIndex from '@/components/TimuIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      components: {   
        default: HelloWorld,
        header: Top,
        left: TimuIndex
      }
    }
  ]
})
