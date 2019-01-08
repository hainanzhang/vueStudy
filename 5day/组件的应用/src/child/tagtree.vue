<template>
	<div class="tagtree">
		<h1>我是tagtree</h1>
		<span>9.9拼团</span>
	</div>
</template>

<script>
	export default {
		created:function(){
			console.log('9.9拼团创建了')
		},
		beforeDestroy:function(){
			console.log('9.9拼团销毁了')
		}
	}
</script>

<style>
	.tagtree{
		background: slateblue;
		height: 100%;
		width: 100%;
	}
</style>