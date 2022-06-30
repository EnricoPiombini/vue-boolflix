<template>

    <div class="container">
        <div class="row">
            <div class="col-3" v-for="movie in movieResults" :key="movie.id">
                <TheMovieCard :movie="movie"
                :vote="movie.vote_average"></TheMovieCard>
            </div>

            <div class="col-3" v-for="movie in tvResults" :key="movie.id">
                <TheMovieCard :movie="movie"
                :vote="movie.vote_average"></TheMovieCard>
            </div>
        </div>
    </div>

</template>


<script>
import { state } from '@/store'
import TheMovieCard from './TheMovieCard.vue';




export default {
    data() {
        return {};
    },
    computed: {
        movieResults() {
            return state.movieList;
        },
        tvResults() {
            return state.tvList;
        }
    },
    components: { TheMovieCard }
}

</script>

<style lang="scss">
@import "../assets/general.scss"
</style>