<template>
	<div class="one">
		<h1>我是lxone</h1>
		<slot/>
		<span>添加的内容是：{{messger}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				messger: '1'
			}
		},
		methods: {

		},
		created(){
				this.$center.$on('add',function(val){
					console.log('触发了1')
					console.log(val)
				})
			}
	}
</script>

<style>

</style>