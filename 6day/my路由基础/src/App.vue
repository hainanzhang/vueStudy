<template>
	<div id="app">
		<router-view/>
		
		<router-link to='/home'>首页</router-link>
		<router-link to='/discover'>发现</router-link>
		<router-link to='/setting'>设置</router-link>
	</div>
		
</template>

<script>
	export default{
		
	}
	
</script>

<style>
a{
  color: #333;
}
a.router-link-active{
  color: palevioletred;
}
</style>