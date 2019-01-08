<template>
	<div class="two">
		<h1>我是two</h1>
		<ul>
			<li v-for='(item,index) in list'>
				{{item}}
				<button @click='finishAction(index)'>删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		methods:{
			finishAction(index){
				this.list.splice(index,1);
			}
		},
		created(){
			this.$center.$on('add-event',(val)=>{
				console.log('执行了');
				this.list.push(val);
			})
		}
	}
</script>

<style>
	.two{
		height: 200px;
		width: 200px;
		background: yellow;
	}
</style>