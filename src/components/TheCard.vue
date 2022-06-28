<template>
    <div>
<h3> {{info.title}} </h3>
<ul>
    <li> {{info.original_title}} </li>
    <li> {{info.original_language}} </li>
    <li> {{info.vote_average}} </li>
    

</ul>

    </div>

</template>


<script>

export default {
props:{
    info:Object
}
}



</script>

<style lang="scss">
</style>