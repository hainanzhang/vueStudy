<template>
  <div id="app">


    <div v-size="50" v-color="'yellow'">test</div>

    <Box v-drag.x.y v-color="'red'"/>

  </div>
</template>

<script>
import Box from './Box'
export default {
  components: {
    Box
  },
  // 布局指令
  directives: {
    size(el ,binding){
      el.style.fontSize = binding.value + 'px';
    }
  }
}
</script>

<style>

</style>
