<template>
	<div class="detail">
		<h1>我是详情页</h1>
	</div>
</template>

<script>
	export default{
		watch:{
			'$route.params.id':{
				handler(newVal,oldVal){
					console.log(newVal)
				},
				immediate:true
			},
			'$route.query.id':{
				handler(newVal,oldVal){
					console.log('query.id:',newVal)
				},
				immediate:true
			}
		}
		
	}
</script>

<style>
</style>