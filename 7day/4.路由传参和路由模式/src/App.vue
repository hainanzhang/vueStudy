<template>
<div id="app">

    <router-link to="/box/1">box1</router-link><br/>
    <router-link to="/box/2">box2</router-link><br/>
    <router-link to="/box/3">box3</router-link><br/>

    <button @click="$router.push({name: 'box'})">box</button>
    <button @click="$router.push('/bar')">bar</button>

    <router-view/>

    <!-- <Box data=""/> -->

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
