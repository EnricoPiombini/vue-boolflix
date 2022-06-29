<template>
  <div>
    <TheHeader @searchTextChanged="onSearchTextChanged"></TheHeader>
    <TheMain :movieList="movieList" ></TheMain>

  </div>

</template>

<script>
import axios from "axios";
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  },

  data() {
    return {
      movieList: [],
      searchText: ""

    }
  },

  methods: {

    onSearchTextChanged(userInput) {
      this.searchText = userInput;

      axios.get("https://api.themoviedb.org/3/search/movie", {

        params: {
          api_key: "b143daf0620a61a9ad7283983f428869",
          query: this.searchText,
          language: "it-IT",
        }

      }).then((resp) => {
        this.movieList = resp.data.results;
      });
    },
  }


}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
