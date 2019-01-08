<template>
<div id="app">

    <nav class="header">
        <router-link to="/course">教程</router-link>
        <router-link to="/apiindex">api</router-link>
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
    display: flex;
    justify-content: space-around;
}
.header a{
    float: left;
    
    line-height: 70px;
    text-align: center;
}
.wrap{
    display: flex;
    justify-content: space-between;
}
.wrap .nav{
    flex: 1;
    background: palegoldenrod;
}
.wrap .page{
    flex: 1;
    background: peru;
}

</style>
