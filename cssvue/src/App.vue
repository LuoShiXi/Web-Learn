<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$background: url(./assets/image/home01.jpg);
#app {
  margin-top: 50px;
  background: $background;
  background-size: 200%;
}
</style>
