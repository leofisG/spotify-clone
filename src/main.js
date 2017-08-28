// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Router from 'vue-router'
import router from './router'
import vueResource from 'vue-resource'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import albumBlock from './components/album-block'
import playButton from './components/play-button'
import searchNav from './components/search/searchNav'
import trackDisplay from './components/track-display'
import category from './components/category'

//maybe I don't need to register them all globally
Vue.component('icon', Icon)
Vue.component('album-block', albumBlock)
Vue.component('play-button', playButton)
Vue.component('search-nav', searchNav)
Vue.component('track-display', trackDisplay)
Vue.component('category', category)

Vue.use(vueResource)
Vue.use(Router)
Vue.use(Vuex)
Vue.config.productionTip = false

// helper function to manipulate the cookie
Vue.prototype.getLocalStorage = function(itemName) {
	return localStorage.getItem(itemName);
};

Vue.prototype.setLocalStorage = function(itemName, item) {
	localStorage.setItem(itemName, item);
};

Vue.prototype.stripAuthCode = function(url) {
	return url.split('&')[0].split('=')[1];
} 

//not sure if I really need to use the Vuex, I just want to share the search result between difference components
const store = new Vuex.Store({
  state: {
    isPlaying: false,
    tracks: [],
    track: {},
    trackId: 0
  },
  getters: {
    getIsPlaying: function(state) {
      return state.isPlaying;
    },
    getTracks: function(state) {
      return state.tracks;
    },
    getTrackId: function(state) {
      return state.trackId;
    }
  },
  mutations: {
    togglePlayState (state) {
      state.isPlaying = state.isPlaying ? false : true;
    },
    updateTracks (state, newTracks) {
      state.tracks = newTracks;
    },
    updateTrack (state, newTrack) {
      state.track = newTrack;
    },
    updateTrackId (state, newId) {
      state.trackId = newId;
    }   
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  watch: {
  	'$route': 'redirectIfNoToken'
  },
  created() {
  	this.redirectIfNoToken();
  },
  methods: {
  	redirectIfNoToken() {
  		console.log(this.getLocalStorage('spotify-token'));
  		if(!this.getLocalStorage('spotify-token')) {
  		  var authUrl = 'https://accounts.spotify.com/authorize?client_id=fb0e57d017fe4c1b817fd5f624ebdf4d&redirect_uri=http:%2F%2Flocalhost:8080%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';
  		  window.location.href = authUrl// change to spotify auth url
  		}else {
  			console.log('123');
  		}
  	}
  }
})

