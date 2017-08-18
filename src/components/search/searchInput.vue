<template>
  <div>
    <div class='search-div'>
      <p>Search for an Artist, Song, Album or Playlist</p>
      <input v-on:keyup="search" v-model="keyword" type="text" placeholder="Start typing..." autocomplete="off">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'search-input',
  data () {
    return {
      keyword: '',
    }
  },
  methods: {
    search() {
      console.log(this.keyword);
      if (this.keyword) {
        this.$router.push('/search/results/' + this.keyword)
      }else {
        this.$router.push('/search/recent');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: white;
}

.search-div {
  background-color: #242424;
/*  height: 100vh;
*/}

input[type="text"], textarea {
  background-color : #242424;
  caret-color: #1db954;
  border: none;
  font-size: 40px;
}
textarea:focus, input:focus{
    outline: none;
}



</style>
