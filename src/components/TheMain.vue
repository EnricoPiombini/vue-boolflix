<template>

    <div class="container">
        <main>
            <TheMovieCard v-for="movie in movieResults" :key="movie.id"></TheMovieCard>
            <TheTvCard v-for="movie in tvResults" :key="movie.title"></TheTvCard>
        </main>
    </div>
</template>


<script>
import { state } from '@/store'
import TheMovieCard from './components/TheMovieCard.vue';
import TheTvCard from './components/TheTvCard.vue';



export default {
    data() {
        return {};
    },


    components: {
        TheMovieCard,
        TheTvCard
    },

    computed: {
        movieResults() {
            return state.movieList;
        },
        tvResults() {
            return state.tvList;
        }
    },

}

</script>

<style lang="scss">
</style>