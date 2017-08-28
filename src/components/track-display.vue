<template>
  <div>
    <li class="tracks">
      <div class="index">
          <div class="play-button" v-on:click="togglePlay">
            <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg" class="icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z" class=""><title>PLAY</title></path></svg>
          </div>
          <p class="track-num" v-on:click="togglePlay">{{trackNum+1}}. </p> 
      </div>
      <div class="track-name">
        <h5>{{trackTitle}}</h5>
        <span>
          <span>{{artist[0].name}}</span>
          <span>·</span>
          <span>{{album}}</span>
        </span>
      </div>
      <div class="track-duration">
        <div class="duration-container">
          <span>{{durationInSec}}</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'playlist',
  props: ['trackTitle', 'artist', 'album', 'duration', 'trackNum'],
  data () {
    return {
    }
  },
  methods: {
    togglePlay() {
        console.log('been clicked!');
        this.$emit('togglePlay', this.trackNum);
        console.log('been clicked 2!')
    }
  },
  computed: {
    durationInSec: function() {
      var seconds = parseInt(this.duration/1000);
      var remainSec = seconds%60;
      remainSec = (remainSec > 9) ? remainSec : '0' + remainSec;
      var remainMin = Math.floor(seconds/60);
      return remainMin + ':' + remainSec;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-count {
  text-transform: uppercase;
}

.track-num, .play-button {
  cursor: pointer;
}

.tracks {
  display: flex;
}

.tracks:hover {
  background-color: rgba(112, 109, 109, 0.87);
}

.tracks:hover .play-button {
  display: inline-block;
}

.tracks:hover .track-num {
  display: none;
}

.index {
  padding-right: 1em;
  width: 3em;
  text-align: right;
}

.track-duration {
  float: right;
  padding-right: 1em;
}

.track-name {
  flex: 1;
}


.track-num, .duration-container, .play-button {
  margin: 8px 0 0 0;
}

.play-button {
  display: none;
}

</style>
