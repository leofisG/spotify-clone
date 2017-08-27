<template>
  <div class='wrapper'>     
    <div class='playlist-container'>
      <div class='playlist-hoverable'>
          <!-- ADD PLAY BUTTON LATER -->
        <div class='album-wrapper'>
          <router-link :to="url" class='playlist-detail-link'>
            <div class='playlist-image' v-bind:style="{'background-image': 'url(' + albumImage + ')'}" >
            </div>
            <play-button class='album-play'></play-button>
          </router-link>
        </div>


        <div class='more-info'><a href="">{{albumTitle}}</a></div>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'album-block',
  props: ['album-title', 'album-image', 'album-url'],
  computed: {
    url: function() {
      if(this.albumUrl) {
        var uriArr = this.albumUrl.split(':');
        var type = uriArr.slice(-2, -1);
        var id = uriArr.slice(-1);
        return '/' + type + '/' + id;
      }
      return ''
    }
  },
  created: function(){
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
  position: absolute;
  top: 0;
  height: 100%;
  background-size: cover!important;
  background-position: 50%;
  transition: .3s all;

/*  padding-top: 100%;
*/}
.playlist-detail-link {
  padding-top: 100%;
  display: block;
  position: relative;
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

.playlist-hoverable:hover > div a .playlist-image {
  filter: brightness(.3);
}

.album-play {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  visibility: hidden;
  transition: .3s all;
  width: 60px;
  height: 60px;
  /*need to make play button accept width and height later*/
}

.playlist-hoverable:hover .album-play {
  visibility: visible;

}
</style>
