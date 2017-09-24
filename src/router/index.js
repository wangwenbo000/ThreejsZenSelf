import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Init from '@/components/init'
import DEMO1 from '@/components/geometries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/demo1',
      name: 'demo1',
      component: DEMO1
    }, {
      path: '/init',
      name: 'init',
      component: Init
    }

  ]
})
