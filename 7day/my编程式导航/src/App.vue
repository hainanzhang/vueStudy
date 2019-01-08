<template>
<div id="app">
  <h1>我是</h1>
  <!--<router-link to='/bar'>bar</router-link>
  <router-link to='/foo'>foo</router-link>-->
  <button @click='barAtion(1)'>bar1</button>
  <button @click='barAtion(2)'>bar2</button>
  <button @click='barAtion(3)'>bar3</button>
  <button @click='fooAtion'>foo</button>
  <router-link :to="{name: 'b', params: {id: 4}, query: {keyword: 'hello vue'}}">test</router-link>

   
  <router-view/>
</div>
</template>

<script>
export default {
    methods:{
    	barAtion:(id) =>{
    		console.log(this.$router)
    		//this.$router.push({name:'b',params:{id},query:{keywrap:'hello'}})
    	},
    	fooAtion:()=>{
    		console.log('foo')
    		console.log(this.$router)
    	}
    }
}
</script>

<style>

</style>
