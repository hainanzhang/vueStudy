<template>
<div id="app">

  <p>
    <button v-for="city in cityList" :key="city" @click="btnAction(city)">
      {{city}}
    </button>
  </p>

  <!-- <Add @add="handleAddAction"/> -->
  <Add :add="handleAddAction"/>

  <List :city="selectCity" title="hello" val="test"/>




</div>
</template>

<script>
import List from './components/List'
import Add from './components/Add'
export default {
  components: {
    List,
    Add
  },
  data(){
    return {
      cityList: ['北京', '上海', '广州', '深圳'],
      selectCity: ''
    }
  },
  methods: {
    btnAction(city){
      console.log(city);
      this.selectCity = city;
    },
    handleAddAction(city){
      console.log('handleAddAction调用了:', city);
      this.cityList.push(city);
    }
  }
}
</script>

<style>

</style>
