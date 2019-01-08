<template>
	<div class="lx">
		<h1>我是lx01</h1>
		<span>当前的城市：{{city}}</span>
		<span>景点：</span>
		<li v-for='item in Scenic[city]'>
			{{item}}
		</li>
	</div>
</template>

<script>
	export default{
		props: {
			city:{
				type:String,
				required:true
			}
		},
		data(){
			return{
				Scenic:{
					'海口':['骑楼','万绿园'],
					'三亚':['天涯海角','观音'],
					'澄迈':['迎宾','金山寺']
				}
			}
		}
	}
	
</script>

<style>
</style>