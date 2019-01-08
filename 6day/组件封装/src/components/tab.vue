<template>
	<div class="tab">
		<li v-for='item in city'>
			{{item}}
		</li>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				city:['深圳','广州','上海','北京']
			}
		}
	}
</script>

<style>
	.tab{
		height: 200px;
		width: 400px;
		border: 1px solid salmon;
		margin-top: 50px;
	}
</style>