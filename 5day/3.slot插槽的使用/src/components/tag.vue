<template>
	<div class="tag" @click='btn'>
		
		<slot />
	</div>
</template>

<script>
	export default{
		methods:{
			btn(){
				console.log('ssaaa',this.$refs)
			},
			testAction(){
				console.log('sssadssczsdw')
			}
		}
	}
</script>

<style>
	
</style>