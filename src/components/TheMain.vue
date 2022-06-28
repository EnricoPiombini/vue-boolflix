<template>
    <div>
        <div class="container">
            <main>
                <div class="row row-cols-4">
                    <div class="col" v-for="movie in moviesOver" :key="movie.title">
                        <TheCard :info="movie"></TheCard>
                    </div>
                </div>

                <div class="seriesList">


                </div>


            </main>
        </div>
    </div>

</template>


<script>
import TheCard from './TheCard.vue';

export default {
    props: {
        moviesOver: Array,
    },
    components: { TheCard }
}



</script>

<style lang="scss">
</style>