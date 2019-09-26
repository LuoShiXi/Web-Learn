import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Father from '@/components/Father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Father',
      component: Father
    },
    {
      path: '/first',
      name: 'First',
      component: First
    }
  ]
})
