<template>
  <div class="featured">
    <h1>Genres &amp; Moods</h1>
    <div class='container-fluid'>
      <div class='row'>
        <category v-for='playlist in playlists' class='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2' :album-title="playlist.name" :album-image="playlist.icons[0].url" :album-url="playlist.href">
        </category>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featured',
  data () {
    return {
      mainTitle: '',
      playlists: []
    }
  },
  methods: {
    getFeaturedAlbum() {
      this.$http.get('https://api.spotify.com/v1/browse/categories', {headers: {
        Authorization: 'Bearer ' + this.getLocalStorage('spotify-token')
      }})
      .then(function(res) {
        this.playlists = res.body.categories.items;

        console.log(this.playlists);
        console.log('body',this.playlists);

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
    this.getFeaturedAlbum();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  text-transform: uppercase;
}

.featured {
/*  height: 150vh;
*/
  padding: 0 0 90px 0;
}

a {
  text-decoration: none;
  color: white;
}
img {
  width: 200px;
}

.playlist-image {
  background-repeat: no-repeat;
  width: 100%;
  background-size: contain;
  padding-top: 100%;
}
.playlist-detail-link {
  padding-top: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.playlist-container {
  padding-bottom: 2.5em;
}

.more-info {
  margin: 12px 0 4px;
}

.playlist-image a {
  width: 100%;
  padding-top: 100%;
}

.playlist-hoverable {
  cursor: pointer;
}

.playlist-hoverable:hover > .playlist-image {
  filter: brightness(.3);
}
</style>
