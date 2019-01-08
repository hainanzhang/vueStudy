<template>
<div id="search" class="page subpage">
    <header class="home-header">
        <span class="header-btn btn-left" @click="backAction">返回</span>
        <h1>搜索</h1>
    </header>

</div>
</template>

<script>
export default {
    methods: {
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style>
#search{
    background: plum;
}
</style>
