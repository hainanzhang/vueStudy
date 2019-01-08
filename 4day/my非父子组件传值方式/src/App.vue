<template>
	<div id="app">
		<one @add='handleAddAction'/>
		<input type="checkbox" v-model='isShow' />
		
		<two v-if='isShow'/>
	</div>
</template>

<script>
	import one from './passchidl/one';
	import two from './passchidl/two';
	export default{
		components:{
			one,
			two
		},
		data(){
			return{
				isShow:true
			}
		},
		methods:{
			handleAddAction(){
				console.log('handleAddAction触发了');
			}
		}
		
	}
	
	
	
</script>

<style>
	
</style>