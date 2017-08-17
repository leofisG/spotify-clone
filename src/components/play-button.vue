<template>
  <div>
      <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" class="icon-play" viewBox="0 0 85 100"><path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z" class=""><title>PLAY</title></path></svg>
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
  display: block;
  position: relative;
}

svg {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
</style>
