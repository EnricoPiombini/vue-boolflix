<template>
    <div>
         <div class="container">
            <main>
                <div class="row row-cols-4">
                    <div class="col" v-for="movie in movieList" :key="movie.id">
                     {{movie.original_title}}
                  </div>
                </div>

                <div class="seriesList">


                </div>


            </main>
        </div> 
    </div>

</template>


<script>

export default {
  
    
    
    props:{
        movieList:Array
    },

    data(){
return{
//     searchText:""
 }
    }
    
    }



</script>

<style lang="scss">
</style>