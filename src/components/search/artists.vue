<template>
  <div class='wrapper'>
    <search-nav></search-nav>
    <div class='row'>
      <album-block v-for="artist in artists" class='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2' :album-title=artist.name :album-image=artist.images[0].url>
      </album-block>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artists',
  data () {
    return {
      keyword: '',
      artists: []
    }
  },
  methods: {
    showArtists: function() {
      this.artists = JSON.parse(localStorage.artists);
      console.log( this.artists);
    }
  },
  created: function() {
      this.showArtists();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: white;
}
.row {
  width: 100%;
}
</style>
