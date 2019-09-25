<template>
  <button @click="tofather">传值</button>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    tofather () {
      // 通过$emit进行触发
      // 第一个参数为父组件监听的事件名，后续参数为传递给父组件的方法的参数
      this.$emit('tofather', 'data');
    }
  }
}
</script>

<style>

</style>
