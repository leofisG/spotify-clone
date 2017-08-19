<template>
  <div>
    <search-nav></search-nav>
  </div>

</template>

<script>
export default {
  name: 'search-input',
  data () {
    return {
      keyword: 'ed',
      artists: [1,2,2]
    }
  },
  watch: {
    '$route': 'search'
  },
  methods: {
    search() {
      this.keyword = this.$route.path.split('/')[3];
      console.log('keyword ' + this.keyword);
      this.$http.get('https://api.spotify.com/v1/search?type=album,track,playlist,artist&q=' + this.keyword, {headers: {
        Authorization: 'Bearer ' + this.getLocalStorage('spotify-token')
      }})
      .then(function(res) {
        console.log(res.body);
        this.setLocalStorage('albums', JSON.stringify(res.body.albums.items));
        this.setLocalStorage('artists', JSON.stringify(res.body.artists.items));
        this.setLocalStorage('tracks', JSON.stringify(res.body.tracks.items));
        this.setLocalStorage('playlists', JSON.stringify(res.body.playlists.items));
      }, function(error) {
        // console.log(error.bodyText);
        var errorContent = JSON.parse(error.bodyText);
        if (errorContent.error.message === 'The access token expired') {
          var authUrl = 'https://accounts.spotify.com/authorize?client_id=fb0e57d017fe4c1b817fd5f624ebdf4d&redirect_uri=http:%2F%2Flocalhost:8080%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';
          this.setLocalStorage('previous-url', location.href);
          window.location.href = authUrl;
        }
      })
    }
  },
  created: function() {
      this.search();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: white;
}

.search-options {
  text-transform: uppercase;
  color: #a0a0a0;
  transion: all .3s;
}

.search-options:hover {
  color: white;
}
</style>
