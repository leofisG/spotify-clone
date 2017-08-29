<template>
  <div class='featured'>
    <div class='browse-nav'>
      <router-link to='/browse/featured' class='link'>Featured</router-link>
      <router-link to='/browse/genres' class='link'>generes &amp; moods</router-link>
      <router-link to='/browse/newreleases' class='link'>new releases</router-link>
      <router-link to='/browse/discover' class='link'>discover</router-link>
    </div>
    <router-view v-on:playTheseTracks="emitToParent"></router-view>
  </div>
</template>

<script>
export default {
  name: 'browse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitToParent: function(tracks) {
      console.log('emitToParent');
      this.$emit('playTheseTracks', tracks);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
	text-transform: uppercase;
  text-decoration: none;
  color: hsla(0,0%,100%,.5);
  font-size: .8rem;
}

.link:hover {
  color: white;
  transition: all .3s;
}

.featured {
  text-align: center;
  background-color: black;
}

.browse-nav {
  text-align: center;
  padding: 20px 0;
}

.browse-nav a {
  padding: .8em .8em 0;
  font-weight: 700;
  letter-spacing: .08em;
  display: inline-block;
  font-size: .8rem;
  margin: .8em;
}
.router-link-active {
  color: white;
  border-bottom: 1.4em green;
}

.router-link-active::after {
  content: "";
  height: .15em;
  background-color: #1ed760;
  width: 1.4em;
  position: relative;
  top: .1em;
  display: block;
  margin: 0 auto;
}
</style>
