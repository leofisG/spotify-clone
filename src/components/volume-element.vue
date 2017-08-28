<template>
  <div v-on:click.stop="togglePlay">
      <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><title>Volume</title><path d="M12.945.38l-.652.762c1.577 1.462 2.57 3.544 2.57 5.858 0 2.314-.994 4.396-2.57 5.858l.65.763c1.79-1.644 2.92-3.997 2.92-6.62S14.735 2.024 12.945.38zm-2.272 2.66l-.65.762c.826.815 1.34 1.947 1.34 3.198 0 1.25-.515 2.382-1.342 3.2l.652.762c1.04-1 1.69-2.404 1.69-3.96 0-1.558-.65-2.963-1.69-3.963zM0 4v6h2.804L8 13V1L2.804 4H0zm7-1.268v8.536L3.072 9H1V5h2.072L7 2.732z" fill="currentColor" fill-rule="evenodd"></path></svg>
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
    togglePlay: function() {
      console.log('the play button has been clicked');
      this.$emit('playedClicked');
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
