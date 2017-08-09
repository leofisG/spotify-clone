import Vue from 'vue'
import Router from 'vue-router'
import browse from '@/components/browse/browse'
import featured from '@/components/browse/featured'
import genres from '@/components/browse/genres'
import newrelease from '@/components/browse/newRelease'
import discover from '@/components/browse/discover'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: featured
    },
    {
      path: '/browse',
      name: 'browse',
      component: browse,
      children: [
        {
          path: 'featured',
          component: featured
        },
        {
          path: 'genres',
          component: genres
        },
        {
          path: 'newreleases',
          component: newrelease
        },
        {
          path: 'discover',
          component: discover
        }
      ]
    }
  ]
})
