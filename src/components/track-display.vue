<template>
  <div class="">
    <li>
      <div class="index">{{trackNum+1}}
        
      </div>
      <div class="track-name">
        <h5>{{trackTitle}}</h5>
        <span>
          <span>{{artist[0].name}}</span>
          <span>·</span>
          <span>{{album}}</span>
        </span>
      </div>
      <div class="track-duration">
        {{duration}}
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'playlist',
  props: ['trackTitle', 'artist', 'album', 'duration', 'trackNum'],
  data () {
    return {
    }
  },
  methods: {
    getPlayList() {
      var playlistId = location.href.split('/').slice(-1)[0];
      console.log(playlistId);
      this.$http.get('https://api.spotify.com/v1/users/spotify/playlists/' + playlistId, {headers: {
        Authorization: 'Bearer ' + this.getLocalStorage('spotify-token')
      }})
      .then(function(res) {
        this.playListName = res.body.name;
        this.tracks = res.body.tracks.items;
        this.owner = res.body.owner;
        this.images = res.body.images;
        console.log(this.images[0].url);
        // console.log(this.tracks);
        console.log('res', res.body);

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
    this.getPlayList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-count {
  text-transform: uppercase;
}
</style>
