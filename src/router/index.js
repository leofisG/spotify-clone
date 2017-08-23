import Vue from 'vue'
import Router from 'vue-router'
import browse from '@/components/browse/browse'
import featured from '@/components/browse/featured'
import genres from '@/components/browse/genres'
import newrelease from '@/components/browse/newRelease'
import discover from '@/components/browse/discover'
import callback from '@/components/callback'
import searchInput   from '@/components/search/searchInput'
import result from '@/components/search/results'
import artists from '@/components/search/artists'
import playlist from '@/components/playlist'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/browse/featured',
      component: featured
    },
    {
    	path: '/callback',
    	component: callback
    },
    {
      path: '/browse',
      redirect: '/browse/featured',
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
    },
    {
      path: '/search',
      redirect: '/search/recent',
      component: searchInput,
      children: [
        {
          path: 'recent',
        },
        {
          path: 'results/:keyword',
          component: result
        },
        {
          path: 'artists/:keyword',
          component: artists
        },
        {
          path: 'songs/:keyword'
        },
        {
          path: 'albums/:keyword'
        },
        {
          path: 'playlists/:keyword'
        }

      ]
    },
    {
      path: '/playlist/:playlistId',
      component: playlist
    }
  ]
})
