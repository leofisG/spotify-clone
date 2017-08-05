import Vue from 'vue'
import Router from 'vue-router'
import featured from '@/components/browse/featured'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: featured
    }
  ]
})
