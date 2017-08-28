<template>
  <div v-on:click.stop="togglePlay">
      <svg class="icon-pause" viewBox="0 0 60 100"><path fill="currentColor" d="M0 8c0-5 3-8 8-8s9 3 9 8v84c0 5-4 8-9 8s-8-3-8-8V8zm43 0c0-5 3-8 8-8s8 3 8 8v84c0 5-3 8-8 8s-8-3-8-8V8z"><title>PAUSE</title></path></svg>
  </div>
</template>

<script>
export default {
  name: 'play-button',
  data () {
    return {
    }
  },
  methods: {
    stopPlay: function() {
      console.log('the play button has been clicked');
      this.$emit('stopPlay');
    }
  },
  created: function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 100%;
  text-align: center;
  position: relative;
}

svg {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
</style>
