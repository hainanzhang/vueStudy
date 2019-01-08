<template>
	<div class="tagone">
		<!--<ul>
			<li v-for='(item,key,index) in imgUrl' >
				
				<img :src="item" />
				<img src='../image/tagone/banner02.jpg' />
			</li>
		</ul>-->
		<h1>我是tagone</h1>
		<h1>电影</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgUrl:{
				'一':'/img/banner01.b7788acc.jpg',
				'二':'../image/tagone/banner02.jpg',
				'三':'../image/tagone/banner03.jpg',
				'四':'../image/tagone/banner04.jpg',
				'五':'../image/tagone/banner05.jpg',
				'六':'../image/tagone/banner06.jpg',
				'七':'../image/tagone/banner07.jpg',
				'八':'../image/tagone/banner08.jpg',
				'九':'../image/tagone/banner09.jpg'
			}
			}
		},
		created:function(){
			console.log('电影创建了')
		},
		beforeDestroy:function(){
			console.log('电影销毁了')
		}
	}
</script>

<style>
	.tagone{
		background: cyan;
		height: 100%;
		width: 100%;
	}
</style>