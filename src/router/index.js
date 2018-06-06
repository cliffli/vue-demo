import Vue from 'vue'
import Router from 'vue-router'
import TmContent from '@/components/TmContent'

import Top from '@/components/Top'
import TimuIndex from '@/components/TimuIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      components: {   
        default: TmContent,
        header: Top,
        left: TimuIndex
      }
    }
  ]
})
