<template>
	<div class="tags" @click='sss'>
		<slot/>
	</div>
</template>

<script>
	export default{
		methods:{
			sss(){
				console.log('sss',this.$refs)
			}
		}
	}
</script>

<style>
	.tags{
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		height: 49px;
		background: burlywood;
		width: 100%;
		justify-content: space-around;
		align-items: center;
	}
</style>