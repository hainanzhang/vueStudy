<template>
	<div class="two">
		<h2>我是h2</h2>
		<input type="text" v-model='city' />
		<button @click='addcity'>添加</button>
	</div>
</template>

<script>
	export default {
		props: {
			add: Function
		},
		data() {
			return {
				city: ''
			}
		},
		methods: {
			addcity: function() {
				this.add(this.city);
			}
		}
	}
</script>

<style>

</style>