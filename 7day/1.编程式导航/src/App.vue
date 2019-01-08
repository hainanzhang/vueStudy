<template>
<div id="app">
    <button @click="btnAction1(1)">Bar1</button>
    <button @click="btnAction1(2)">Bar2</button>
    <button @click="btnAction1(3)">Bar3</button>

    <button @click="btnAction2">Foo</button>

    <router-link :to="{name: 'b', params: {id: 4}, query: {keyword: 'hello vue'}}">test</router-link>

    <router-view/>
  
</div>
</template>

<script>
export default {
    methods: {
        btnAction1(id){
        	//this.$router.replace({name:'b'});
            // this.$router.push('/bar');
            // this.$router.push({path: '/bar/'+id});
            this.$router.push({name: 'b', params: {id}, query: {keyword: 'hello vue'}});
        },
        btnAction2(){
            // this.$router.replace('/foo');
            // this.$router.replace({path: '/foo'});
            this.$router.replace({name: 'f'});
        }
    }
}
</script>

<style>

</style>
