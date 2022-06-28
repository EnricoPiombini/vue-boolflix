https://api.themoviedb.org/3/search/movie?api_key=b143daf0620a61a9ad7283983f428869&query=avatar&langauge=it-IT

<template>
  <div>
<TheHeader @movieInfo="movieInfo"></TheHeader>


<TheMain :moviesOver="movieList"  ></TheMain>

  </div>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
},

data(){
  return{
    movieList:[],
  }
},

methods:{
  movieInfo(arrayMovies){
    this.movieList = arrayMovies;
  }
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
