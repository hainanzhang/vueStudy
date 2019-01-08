<template>
<div id="app">

  <!-- 装载路由切换的组件的容器 -->
  <router-view/>

  <!-- <a href="#/home">首页</a>
  <a href="#/discover">发现</a>
  <a href="#/setting">设置</a> -->
<!--标签<router-link to='home'></router-link>相当于<a href="#/home">首页</a>-->
  <router-link to="/home">首页</router-link>
  <router-link to="/discover">发现</router-link>
  <router-link to="/setting">设置</router-link>


</div>
</template>

<script>
export default {

}
</script>

<style>
a{
  color: #333;
}
a.router-link-active{
  color: palevioletred;
}
</style>
