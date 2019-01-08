<template>
	<div id="app">
		<!--这是路由
			
			{
				path: '/detail/:id',
				component:detail
			}
					
		-->
		<ul>
			<li>
				<router-link to="/detail/1">大黄蜂</router-link>
			</li>
			<li>
				<router-link to="/detail/2">来电狂响</router-link>
			</li>
			<li>
				<router-link to="/detail/3">奎迪：英雄再起</router-link>
			</li>
			<li>
				<router-link to="/detail/4">海王</router-link>
			</li>
		</ul>
		
		
		<!--
			这是路由
			{
					path: '/detail',
					component:detail
			}
		-->
		<!--<ul>
			<li>
				<router-link to="/detail?id=1">大黄蜂</router-link>
			</li>
			<li>
				<router-link to="/detail?id=2">来电狂响</router-link>
			</li>
			<li>
				<router-link to="/detail?id=3">奎迪：英雄再起</router-link>
			</li>
			<li>
				<router-link to="/detail?id=4">海王</router-link>
			</li>
		</ul>-->
		<router-view/>

	</div>
</template>

<script>
	export default {

	}
</script>

<style></style>