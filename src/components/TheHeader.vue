<template>

    <div>

        <div class="d-flex align-items-center justify-content-between p-3">
            <div>
                <h1 class="title text-danger">BOOLFLIX</h1>
            </div>

            <div>
                <input type="text" v-model="state.searchText" @keyup.enter="onSearchMovies()">
            </div>

        </div>


    </div>

</template>


<script>
import { fetchData, state } from '@/store'

export default {
    methods: {
        onSearchMovies() {
            fetchData("movie")
            fetchData("tv")
        }
    },
    computed: {
        state() {
            return state
        }
    }

}

</script>

<style lang="scss" scoped>
.title{
    font-size: 4.5rem;
}

input{
    font-size: 1.5rem;
}
</style>