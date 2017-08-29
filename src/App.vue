<template>
  <div id="app">
    <div class="main">
      <div class="left-nav">
        <nav>
          <router-link to="/browse">
            <svg viewBox="0 0 167.5 167.5"><title>Spotify</title><path fill="currentColor" d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"></path></svg>
          </router-link>
          <ul>
            <div class="group">
              <li>
                <router-link to='/search' class='link'>
                  Search 
                  <div class="icon search-icon"><svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
                </router-link>
              </li>
            </div>
            <div class="group">
              <li>
                <router-link to='/browse' class='link'>Browse</router-link>
              </li>
              <li>
                <router-link to='/collection' class='link'>Your Music</router-link>
              </li>
            </div>

          </ul>

          <div class="group recently-played">
            <h2>RECENTLY PLAYED</h2>
            web spotify simply store the recently played data all in local storage{{isPlaying}}
          </div>

          <ul class="nav-list">
            
          </ul>
          <div class="session-info">
            
          </div>
        </nav>
      </div>
      <router-view class='router-view' v-on:playTrack="playSelectedTrack" v-on:greenBtnClicked="greenBtnToggle" v-on:playTheseTracks="greenBtnToggle"></router-view>
    </div>

    <div class="play-bar">
      <footer>
        <div class="playing-bar">
          <div class="now-playing"></div>
          <div class="play-control">
            <icon name="random"></icon>
            <icon name="step-backward"></icon>
            <play-button class="play-button" v-on:albumPlayClicked="playbuttonToggle"></play-button>
            <icon name="step-forward"></icon>
            <icon name="repeat"></icon>
          </div>
          <div class="volume">
            
          </div>
        </div>
        <div class="playback-bar">
          <div class="progress-bar">
            <div class="inner-progress" v-bind:style="{ width: progressWid + '%'}"></div>
          </div>
        </div>
      </footer>
    </div>
    <audio v-on:timeupdate="updateProgress" v-on:ended="playNext" ref="track"></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      isPlayed: false,
      randomMode: false,
      progressWid: 0,
      currentTrack: '',
      trackNum: ''
    }
  },
  methods: {
    /*
     * @param tracks[object]: the tracks object that contain all the information about the tracks
     * @param trackNum[number]: index of the track that is to be played, it starts from 0 which means it is the same as the array index.
     */
    playSelectedTrack: function(tracks, trackNum) {
      console.log('play selected track')
      var player = this.$refs.track;
      var trackId = tracks[trackNum].track.uri.split(':')[2];

      if(trackId !== this.currentTrack) {
        this.currentTrack = trackId;
        player.src = tracks[trackNum].track.preview_url;
      }

      if (this.tracks !== tracks) {
        this.tracks = tracks;
      }

      if (this.trackNum !== trackNum) {
        this.trackNum = trackNum;
      }

      console.log(this.currentTrack);
      if (!this.$store.state.isPlaying) {
          this.$store.commit('togglePlayState');
      }
      player.play();      


      // //might be of future use keep the codes here for the time being
      // if(!this.$store.state.isPlaying) {
      //   console.log('tracks ',tracks[trackNum].track);
      //   console.log('trackNum', trackNum);
      //   var trackId = tracks[trackNum].track.uri.split(':')[2];
      //   console.log('trackId', trackId);
      //   console.log('current', this.currentTrack);
      //   if(trackId !== this.currentTrack) {
      //     this.currentTrack = trackId;
      //     player.src = tracks[trackNum].track.preview_url;
      //   }

      //   if (this.tracks !== tracks) {
      //     this.tracks = tracks;
      //   }

      //   if (this.trackNum !== trackNum) {
      //     this.trackNum = trackNum;
      //   }

      //   console.log(this.currentTrack);
      //   player.play();
      //   this.$store.state.isPlaying = true;
      //   console.log('It should start playing!');
      //   console.log(this.$refs.track.currentTime);
      // }else{
      //   if (trackId !== this.currentTrack || this.tracks !== tracks || this.trackNum !== trackNum)
      //   player.pause();
      //   this.isPlayed = false;
      //   console.log('It should now stop playing.')
      // }
    },
    playbuttonToggle: function() {
      var player = this.$refs.track;
      console.log('play button is been clicked')
      console.log(this.$store.state.isPlaying);
      if(!this.$store.state.isPlaying) {
        player.play();
      }else{
        player.pause();
      }
      this.$store.commit('togglePlayState')
    },
    playTheseTracks: function(tracks) {
      console.log('these tracks are being played')

    },
    greenBtnToggle: function(tracks) {
      if(JSON.stringify(tracks) !== JSON.stringify(this.$store.state.tracks)) {
        this.$store.commit('updateTracks', tracks);
        if(this.$store.state.isPlaying === false) {
          this.$store.commit('togglePlayState');
        }
      }//note that we can't use `===` to compare two objects directly
      else {
        this.$store.commit('togglePlayState');
      }
    },
    updateProgress: function() {
      var player = this.$refs.track;
      var currentTime = player.currentTime;
      var duration = player.duration;
      this.progressWid = currentTime/duration * 100;
    },
    playNext: function() {
      var player = this.$refs.track;
      var track = this.$store.state.track;
      var tracks = this.$store.state.tracks;
      var trackId = this.$store.state.trackId;

      for (var i = trackId + 1; i < tracks.length; i++) {
          console.log(i);
          if (tracks[i].track.preview_url !== null) {
            this.$store.commit('updateTrackId', i);
            player.src = tracks[this.$store.state.trackId].track.preview_url;// not a very good implementation here
            break;
          }
      }
      console.log(this.$store.state.trackId);
      var newTrack = tracks[trackId].track;
      this.$store.commit('updateTrack', newTrack);
      player.play();
      console.log('playNext!!!');
    },

  },
  //remember to check whether computed variable has the same name as the data variable, waste so much time here
  computed: {
    ...mapGetters({
      isPlaying: 'getIsPlaying',
      tracks: 'getTracks',
      trackId: 'getTrackId'
    }),
  },
  // TO DO: come up with way to avoid this load error
  watch: {
    isPlaying: function(newValue) {
      console.log('is play changed!', this.isPlaying);
      console.log('tracks', this.tracks);
      var player = this.$refs.track;
      
      if (newValue === true) {
        player.play();
      }else {
        player.pause();
      }
    },
    tracks: function(newTracks) {
      console.log('tracks get updated!', newTracks);
      var player = this.$refs.track;

      var trackId = this.$store.state.trackId;

      for (var i = trackId; i < newTracks.length; i++) {
          console.log(i);
          if (newTracks[i].track.preview_url !== null) {
            this.$store.commit('updateTrackId', i);
            player.src = newTracks[this.$store.state.trackId].track.preview_url;// not a very good implementation here
            break;
          }
      }
      if(this.$store.state.isPlaying === true) {
        player.play();      
      }

    },
    trackId: function(newId) {
      console.log('track Id get updated!')

      var player = this.$refs.track;
      player.src = this.tracks[newId].track.preview_url;
      if(this.$store.state.isPlaying === true) {
        player.play();      
      }
    }
  },
  created: function(){
  }
}
</script>

<style>
a, a:active, a:visited, a:hover, a:focus {
  text-decoration: none;
}

.router-view {
  color: white;
  z-index: 999;
  padding-left: 220px;
}
.group {
  color: #9f9f9e;
}
.play-bar svg {
  color: white;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  display: block;

}

li a {
  display: inline-block;
  text-decoration: none;
  color: #9f9f9f;
  padding: 10px;
  font-weight: 700;
}

.play-button {
  display: inline-block;
  height: 32px;
  width: 32px;
}

.left-nav {
  width: 220px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  background-color: #171a1e;
  overflow: auto;
}

.play-bar {
    background-color: #282828;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 101;
    height: 90px;
}

.play-control {
  text-align: center;
}

nav {
  padding: 24px 24px 95px 24px;
}

.left-nav svg {
  color: white;
  width: 32px;
  height: 32px;
}

.search-icon svg {
  width: 26px;
  height: 26px;
}

.search-icon {
  display: inline-block;
  vertical-align: top;
  float: right;
}

.group {
  padding-bottom: 5px;
  padding-top: 10px;
  border-top: 1px solid hsla(0,0%,100%,.25);
}

.recently-played h2{
  color: #9f9f9e;
  font-weight: 300;
  font-size: 10px;
}


a:hover {
  text-decoration: none;
  color: white;
}

.router-link-active, .router-link-active:hover, .router-link-active:active, .router-link-active:visited {
  color: #1db954;
  text-decoration: none;
}

.progress-bar {
  background-color: #404040;
  width: 100%;
  height: 4px;
}

.inner-progress {
  background-color: green;
  height: 100%;
}


</style>
