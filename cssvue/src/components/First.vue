<template>
  <body>
    <div class="first">
      <h1>第一个界面</h1>
    </div>
  </body>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/first.scss';
</style>
