<template>
  <body>
    <div class="first">
      <h1>第一个界面</h1>
    </div>
    <br>
    <br>
    <div class="parent" @dragover="onDragOver($event)" @drop="onDrop($event)">
      <div id="dragspan" draggable="true" @dragstart="onDragStart($event)" @dragend="dragend">
        draggable-span
      </div>
      <div id="dropzone" draggable="true" @dragstart="onDragStart($event)" @dragend="dragend">
        dropzone
      </div>
      <!-- <div id="drop3" draggable="true" @dragstart="onDragStart($event)">
        drop3
      </div> -->
    </div>
    <div class="child" @dragover="onDragOver($event)" @drop="onDrop($event)">
    </div>
  </body>
</template>

<script>

export default {
  name: 'First',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: ''
    }
  },
  methods: {
    onDragStart (event) {
      event
        .dataTransfer
        .setData('text/plain', event.target.id);
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
    },
    dragend (event) {
      console.log('dragend', event);
      event.dataTransfer.clearData();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/first.scss';
</style>
