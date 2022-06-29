<template>

    <div>
        <div>
            <h1 class="text-center">BOOLFLIX</h1>
        </div>
        <div class="text-end">
            <input type="text" v-model="state.searchText">
            <button class="btn btn-outline" @click="onSearchMovies()">Search</button>
        </div>

    </div>

</template>


<script>
import { fetchData, state } from '@/store'

export default {
    methods:{
        onSearchMovies(){
            fetchData("movie")
            fetchData("tv")
        }
    },
computed:{
    state(){
        return state
    }
}

}
    


        
</script>

<style lang="scss">
</style>