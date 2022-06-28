<template>

    <div>
        <h1 class="text-center">BOOLFLIX</h1>



    </div>

</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=b143daf0620a61a9ad7283983f428869&query=avatar&langauge=it-IT&rating',
            movieList: [],


        }
    },
    mounted() {
        axios.get(this.movieApi).then((response) => {
            this.movieList = response.data.results
            return this.movieList
        });
    }
}





</script>

<style lang="scss">
</style>