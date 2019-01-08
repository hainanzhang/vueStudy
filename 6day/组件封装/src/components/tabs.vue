<template>
	<div class="tabs">
		<h1>我是tabs</h1>
		<input type="text" v-model='messing'/>
		<span> 这是输入的值：{{messing}}</span>
		<span>这是接收到的：{{val}}</span>
		<slot :title='val'/>
	</div>
</template>

<script>
	export default{
		props:{
			val:String
		},
		data(){
			return{
				messing:'11',
				value:'zhuang'
			}
		},
		
	}
</script>

<style>
	.tabs{
		overflow: hidden;
		width: 400px;
		border: 1px solid salmon;
		background: cyan;
	}
</style>