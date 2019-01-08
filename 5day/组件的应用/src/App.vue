<template>
	<div id="app">
		<footer id="footer">
			<li v-for='(item,key,index) in obj' @click='event(index)' >
				<i :class="item"></i>
				<button>{{key}}</button>
			</li>
		</footer>
		
		<keep-alive>
			<tagone v-if='isshow ==0' />
			<tagtwo v-if='isshow == 1'></tagtwo>
			<tagtree v-if='isshow ==2' />
			<tagfour v-if='isshow == 3' />
		</keep-alive>
	</div>
</template>
<script src="js/rem.js"></script>
<script>
//	import tagone from './child/tagone';
//	import tagtwo from './child/tagtwo';
//	import tagtree from './child/tagtree';
//	import tagfour from './child/tagfour';
	export default {
		components: {
			tagone:() => import('./child/tagone'),
			tagtwo :() => import('./child/tagone'),
			tagtree :() => import('./child/tagone'),
			tagfour :() => import('./child/tagone')
		},
		data() {
			return {
				arr: ['电影', '剧院', '9.9拼团', '我的'],
				obj:{
					'电影':'glyphicon glyphicon-film',
					'剧院':' glyphicon glyphicon-envelope',
					'9.9拼团':'glyphicon glyphicon-upload',
					'我的':'glyphicon glyphicon-user'
				},
				isshow: '0'
			}

		},
		methods: {
			event: function(index) {
				console.log(index);
				this.isshow = index
			}
		}

	}
</script>

<style>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
	body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select {
		margin: 0;
		padding: 0
	}
	
	body {
		font: .12rem "宋体", "Arial Narrow", HELVETICA;
		background: #fff;
		-webkit-text-size-adjust: 100%
	}
	
	a {
		color: #172c45;
		text-decoration: none
	}
	a:hover {
		color: #cd0200;
		text-decoration: underline
	}
	em {
		font-style: normal
	}
	li {
		list-style: none
	}
	img {
		border: 0;
		vertical-align: middle
	}
	table {
		border-collapse: collapse;
		border-spacing: 0
	}
	p {
		word-wrap: break-word
	}
	#footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		height: 5rem;
		justify-content: space-around;
		background: #E5E5E5;
		font-size: .2rem;
	}
	#footer li{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	#footer li i{
		font-size: 2rem;
	}
	#footer button {
		background: none;
		border: none;
	}
</style>