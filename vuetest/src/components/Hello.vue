<template>
  <div id="hello">
    <h1>site: {{site}}</h1>
    <h1>url: {{url}}</h1>
    <h1>{{details()}}</h1>
  </div>
</template>

<script type="text/javascript">
const vm = new Vue({
  el: '#hello',
  data: {
    site: '你好',
    url: 'www',
    alexa: '10000',
  },
  methods: {
    details: function() {
      return this.site + '-虚无之境';
    }
  }
})
</script>