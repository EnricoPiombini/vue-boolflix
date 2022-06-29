<template>
    <div>
        <div class="container">
            <main>

                <div class="row row-cols-5">
                    <div class="col" v-for="(movie, i) in movieResults" :key="i">
                        <div class="content">
                            {{ movie.original_title }}
                        </div>
                    </div>

                    <div class="col" v-for="movie in tvResults" :key="movie.id">
                        <div class="content">
                            {{ movie.original_title }}
                        </div>
                    </div>


                </div>
            </main>
        </div>
    </div>
</template>


<script>
import { state } from '@/store'

export default {


    data() {
        return {}
    },

    computed: {
        movieResults() {
            return state.movieList
        },
        tvResults() {
            return state.tvList
        }
    }

}

</script>

<style lang="scss">
</style>