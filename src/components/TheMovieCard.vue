<template>
    <div class="my-card p-3">
        <div class="card card-img">
            <img :src="posterImg" alt="" class="w-100">

        </div>
        <div class="card-body p-2">
            <div class="card-title ">
                <h4>{{ movie.title }}</h4>
                <p>{{ movie.original_title }}</p>
            </div>

            <div>Language: {{ movie.original_language }}
                <span class="fi" :class="'fi-' + linkedLanguage"></span>
            </div>

            <div>Rate:
                <span v-for="i in 5" :key="i">
                    <i v-if="i <= voteUptofive" class="fa-solid fa-star text-warning"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        movie: Object,
        vote: Number
    },
    computed: {
        linkedLanguage() {
            const lang = {
                "en": "us",
                "ja": "jp",
                "el": "gr",
            };
            if (lang[this.movie.original_language]) {
                return lang[this.movie.original_language];
            }
            return this.movie.original_language;
        },

        posterImg() {
            if (this.movie.poster_path === null) {
                return "../img/placeholder-movie.png"
            }
            return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path;
        },

        voteUptofive() {
            return Math.ceil(this.vote / 2)
        }
    },

}

</script>


<style lang="scss" scoped>

.my-card{
    height: 100%;
}


</style>