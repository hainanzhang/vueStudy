<template>
	<div class="one">
		<h1>我是one</h1>
		<input type="text" v-model='val' />
		<button @click='addAction'>添加</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				'val':''
			}
		},
		methods:{
			addAction(){
				this.$center.$emit('add-event',this.val)
				this.val=''
			}
		}
	}
</script>

<style>
	.one{
		height: 200px;
		width: 200px;
		background: red;
	}
</style>