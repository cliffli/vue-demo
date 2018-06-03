import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      components: {   
        default: HelloWorld,
        header: Top,
        left: HelloWorld
      }
    }
  ]
})
