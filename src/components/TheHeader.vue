<template>

    <div>
        <div>
            <h1 class="text-center">BOOLFLIX</h1>
        </div>
        <div class="text-end">
            <input type="text">
            <button class="btn btn-outline" @click="getMovie()"  >Search</button>
        </div>

    </div>

</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            movieList: [],
            movieApi: "https://api.themoviedb.org/3/search/movie?api_key=b143daf0620a61a9ad7283983f428869&query=avatar&langauge=it-IT"


        }
    },



    mounted() {
    axios.get(this.movieApi).then((response) => {
    this.movieList = response.data.results
    this.$emit('movieInfo', this.movieList)
    return this.movieList
     });

     }
}






</script>

<style lang="scss">
</style>