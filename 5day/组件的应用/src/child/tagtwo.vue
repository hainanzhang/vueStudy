<template>
	<div class="tagtwo">
		<h1>我是tagtwo</h1>
		<span>剧场</span>
	</div>
</template>

<script>
	export default{
		created:function(){
			console.log('剧场创建了')
		},
		beforeDestroy:function(){
			console.log('剧场销毁了')
		}
	}
</script>

<style>
	.tagtwo{
		background: yellow;
		height: 100%;
		width: 100%;
	}
</style>