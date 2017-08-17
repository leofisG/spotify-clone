<template>
  <div class="hello">
  <p>Authentication is successful, redirecting you to our featured album.</p>
  </div>
</template>

<script>
export default {
  name: 'newrelease',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getToken() {
        var code = this.stripAuthCode(window.location.href);
        this.setLocalStorage('spotify-token', code);
        if (this.getLocalStorage('previous-url')) {
          location.href = this.getLocalStorage('previous-url');
        }else {
          location.href = 'SOME_DEFAULT_ROUTE'
        }
    }
  },
  created: function(){
    this.getToken();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
	color: black;
}
</style>
