<template>
  <div class='wrapper'>
    <router-link :to="'/search/results/'+keyword" class='search-options'>Results</router-link>
    <router-link :to="'/search/artists/'+keyword" class='search-options'>Artists</router-link>
    <router-link :to="'/search/tracks/'+keyword" class='search-options'>tracks</router-link>
    <router-link :to="'/search/albums/'+keyword" class='search-options'>albums</router-link>
    <router-link :to="'/search/playlists/'+keyword" class='search-options'>playlists</router-link>
  </div>
</template>

<script>
export default {
  name: 'artists',
  data () {
    return {
      keyword: '',
    }
  },
  watch: {
    '$route': 'getKeyWord'
  },
  methods: {
    getKeyWord: function() {
      this.keyword = this.$route.path.split('/')[3];
    }
  },
  created: function() {
      this.getKeyWord();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
