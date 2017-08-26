<template>
  <div class="">
    <li>
      <div class="index">
          <p class="track-num" v-on:click="togglePlay">{{trackNum+1}}</p> 
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
        {{duration}}
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
</style>
