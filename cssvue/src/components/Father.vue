<template>
  <div id="father">
    <!-- 监听child的toFather时间 -->
    <h1>{{message}}</h1>
    <child @tofather="toFather" @loginok="loginOk"></child>
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
      message: '95XILUO',
      username: '',
      password: ''
    }
  },
  methods: {
    toFather (msg) {
      console.log(msg);
      this.message = msg;
      alert(msg);
    },
    loginOk (username) {
      console.log(username);
      this.username = username;
    }
  }
};
</script>

<style>

</style>
