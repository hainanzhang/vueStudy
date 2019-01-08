<template>
	<div class="two">
		<h1>我是lxtwo</h1>
		<input type="text" v-model='mess' />
		<button @click='addAtion'>添加</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mess:''
			}
		},
		methods:{
			addAtion:function(){
				//console.log(this.mess)
				this.$center.$emit('add',this.mess);
				
				//this.$center.$off('add')
				this.mess=''
			}
		},
		created(){
			
			}
	}
</script>

<style>
</style>