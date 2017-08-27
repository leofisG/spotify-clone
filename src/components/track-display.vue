<template>
  <div>
    <li class="tracks">
      <div class="index">
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

.track-num {
  cursor: pointer;
}

.tracks {
  display: flex;
}

.tracks:hover {
  background-color: rgba(112, 109, 109, 0.87);
}

.track-num {
  margin: 8px 0 0 0;
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

.duration-container {
  margin: 8px 0 0 0;
}

</style>
