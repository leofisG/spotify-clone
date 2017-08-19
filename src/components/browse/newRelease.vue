<template>

  <div class="hello">
    <div class='row'>
      <album-block v-for='playlist in playlists' class='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2' :album-title=playlist.name :album-image=playlist.images[0].url>
      </album-block>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newrelease',
  data () {
    return {
      playlists: []
    }
  },
  methods: {
    getNewRelease() {
      this.$http.get('https://api.spotify.com/v1/browse/new-releases', {headers: {
        Authorization: 'Bearer ' + this.getLocalStorage('spotify-token')
      }})
      .then(function(res) {
        console.log(res.body);
        this.playlists = res.body.albums.items;
        console.log(this.playlists);
        // console.log(this.playlists);
        // console.log(res.body);

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
    this.getNewRelease();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
	color: white;
}

.row {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
