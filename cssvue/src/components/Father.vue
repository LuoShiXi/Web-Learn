<template>
  <div id="father">
    <!-- 监听child的toFather时间 -->
    <!-- <h1>{{message}}</h1> -->
    <child @tofather="toFather"></child>
  </div>
</template>

<script>
import child from '@/components/Child';
export default {
  name: 'father',
  components: {
    child
  },
  data () {
    return {
      message: '123'
    }
  },
  methods: {
    toFather (msg) {
      console.log(msg);
      this.message = msg;
      alert(msg);
    }
  }
};
</script>

<style>

</style>
