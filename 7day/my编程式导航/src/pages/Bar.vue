<template>
<div class="bar">
    <h1>bar组件</h1>
    <p>id为： {{$route.params.id}}</p>
    <p>id为： {{$route.query.keyword}}</p>
</div>
</template>

<script>
export default {
	
}
</script>

<style>

</style>
