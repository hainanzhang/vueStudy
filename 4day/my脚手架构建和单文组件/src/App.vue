<template>
	<div id="app">
		<button v-for='item in city' @click='listLx(item)'>{{item}}</button>
		<applx :city="selectCity"/>
		<tow :add="handleAddAction"></tow>
	</div>
</template>

<script>
	import Applx from './appChidl/Lx';
	import tow from './appChidl/two'
	//import AppHeader from './appChidl/Header'
	//import AppContent from './appChidl/Content'
	export default {
		components: {
			Applx,
			tow
		},
		data() {
			return {
				city: ['海口', '三亚', '澄迈'],
				selectCity:''
			}
		},
		methods: {
			listLx(text) {
				this.selectCity=text;
			},
			handleAddAction(aa){
				this.city.push(aa)
			}
		}
	}
</script>

<style></style>