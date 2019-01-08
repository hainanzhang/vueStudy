<template>
	<div id="app">
		<tabs :val='sssValue'>
			
		</tabs>
		<box></box>
	</div>
</template>

<script>
	import tab from './components/tab'
	import tabs from './components/tabs'
	import box from './components/box'
	import lxOne from './page/lxone'
	export default{
		components :{
			tab,
			tabs,
			box,
			lxOne
		},
		data(){
			return{
				sssValue:'wos'
			}
		}
	}
</script>

<style>
</style>