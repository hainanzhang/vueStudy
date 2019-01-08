<template>
<div id="app">

    <nav class="header">
        <router-link to="/guide">教程</router-link>
        <router-link to="/api">api</router-link>
    </nav>
    
    <div class="wrap">
        <router-view class="nav" name="nav"/>

        <router-view class="page"/>
    </div>
  
</div>
</template>

<script>
export default {
    methods: {



    }
}
</script>

<style>
.header{
    height: 70px;
    background: #eee;
    border-bottom: 1px solid #999;
}
.header a{
    float: left;
    width: 200px;
    line-height: 70px;
    text-align: center;
}
.wrap{
    display: flex;
}
.wrap .nav{
    width: 180px;
    background: palegoldenrod;
}
.wrap .page{
    flex: 1;
    background: peru;
}

</style>
