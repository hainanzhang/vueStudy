<template>
	<div id="app">
		<h1>wos</h1>

		<div class="box" v-showww.x></div>
		
	</div>
</template>

<script>
	import Box from './components/Box'
	export default {
		
	}
</script>

<style>
	#app{
		height: 10000px;
	}
	
	.box {
		background: yellow;
		height: 300px;
		width: 300px;
		position: absolute;
	}
</style>