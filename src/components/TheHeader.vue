<template>

    <div>
        <div>
            <h1 class="text-center">BOOLFLIX</h1>
        </div>
        <div class="text-end">
            <input type="text" v-model="userInput">
            <button class="btn btn-outline" @click="onsearchMovies">Search</button>
        </div>

    </div>

</template>


<script>

export default {
    data() {
        return {
            userInput: ""


        }
    },
    methods: {
        onsearchMovies() {
            this.$emit("searchTextChanged", this.userInput)
        }
    }
}
</script>

<style lang="scss">
</style>