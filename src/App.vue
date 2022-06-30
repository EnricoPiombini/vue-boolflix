<template>
  <div id="app">
    <div class="container">
      <TheHeader></TheHeader>
      <TheMain></TheMain>

    </div>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,

  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Bebas Neue', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: rgb(0, 0, 0);
}
</style>