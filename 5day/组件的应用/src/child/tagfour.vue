<template>
	<div class="tagfour">
		<h1>我是tagfour</h1>
		<span>我的</span>
	</div>
</template>

<script>
	export default {
		created:function(){
			console.log('我的创建了')
		},
		beforeDestroy:function(){
			console.log('我的销毁了')
		}
	}
</script>

<style>
	.tagfour{
		background: wheat;
		height: 100%;
		width: 100%;
	}
</style>