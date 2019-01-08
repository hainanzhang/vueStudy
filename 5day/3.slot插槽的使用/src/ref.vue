<template>
	<div id="app">
		<one></one>
		<h1 ref='h1' @click='aaa'>我是谁</h1>
		<h1 ref='h'>我是谁1</h1>
		<h1 ref='h'>我是谁2</h1>
		<two ref='two'/>
	</div>
</template>

<script>
	import one from './components/lxref';
	import two from './components/lxtworef';
	
	export default{
		components:{
			one,
			two
		},
		mounted(){
			console.log(this.$refs.h)
			console.log(this.$refs.two)
			console.log(this.$refs)
		},
		methods:{
			aaa(){
				console.log('sss',this.$refs.two)
			}
		}
	}
	
	
</script>

<style>
</style>