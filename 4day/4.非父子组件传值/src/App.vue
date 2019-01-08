<template>
<div id="app">
  <h1>app</h1>

  <One @add="handleAddAction"/>

  <input type="checkbox" v-model="isShow">
  <Two v-if="isShow"/>

</div>  
</template>

<script>
import One from './components/One'
import Two from './components/Two'
export default {
  components: {
    One,
    Two
  },
  data(){
    return {
      isShow: true
    }
  },
  methods: {
    handleAddAction(){
      console.log('handleAddAction触发了');
    }
  }
}
</script>

<style>

</style>
