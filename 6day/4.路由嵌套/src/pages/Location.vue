<template>
<div id="location" class="page subpage">
    <header class="home-header">
        <span class="header-btn btn-left" @click="backAction">返回</span>
        <h1>定位</h1>
    </header>


</div>
</template>

<script>
export default {
    methods: {
        backAction(){
            //执行路由的返回
            console.log(this.$router);

            this.$router.back();
        }
    }
}
</script>

<style>
#location{
    background: darksalmon;
}
</style>
