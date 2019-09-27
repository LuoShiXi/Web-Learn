<template>
  <body>
    <div class="first" @dragover="onDragOver($event)" @drop="onDrop($event)">
      <h1>第一个界面</h1>
    </div>
    <br>
    <br>
    <div class="parent">
      <span id="dragspan" draggable="true" @dragstart="onDragStart($event)">
        draggable-span
      </span>
      <span id="dropzone"> dropzone </span>
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
  },
  methods: {
    onDragStart (event) {
      event
        .dataTransfer
        .setData('text/plain', event.target.id);

      event
        .currentTarget
        .style
        .backgroundColor = 'yellow';
    },
    onDragOver (event) {
      event.preventDefault();
    },
    onDrop (event) {
      const id = event.dataTransfer.getData('text');
      console.log(id);
      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
      event.dataTransfer.clearData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/first.scss';
</style>
