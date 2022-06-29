<template>
    <div class="card">
        <div class="card card-img">
            <img :src="posterImg" alt="">

        </div>


        <div class="card-body">

            <div class="card-title ">
                <h4>{{ movie.title }}</h4>
                <p>{{ movie.original_title }}</p>
                <p> {{movie.vote_average}} </p>
            </div>

            <div>Language: {{ movie.original_language }}
                <!-- <span class="fi" :class="'fi-' + langMap"></span> -->
            </div>

        </div>
    </div>




</template>

<script>
export default {
    props: {
        movie: Object
    },

    computed: {
        posterImg() {
            return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path
        }
    }
}

</script>


<style>
</style>