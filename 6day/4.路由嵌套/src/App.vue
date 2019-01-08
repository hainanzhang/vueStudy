<template>
<div id="app">

  <!-- 装载路由切换的组件的容器 -->
  <router-view/>
  

  <!-- <a href="#/home">首页</a>
  <a href="#/discover">发现</a>
  <a href="#/setting">设置</a> -->

  <nav class="tabs">
    <router-link to="/home">首页</router-link>
    <router-link to="/discover">发现</router-link>
    <router-link to="/setting">设置</router-link>
  </nav>


</div>
</template>

<script>
export default {

}
</script>

<style>
.tabs{
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background: #eee;
}
a{
  color: #333;
  flex: 1;
  text-align: center;
  line-height: 49px;
}
a.router-link-active{
  color: palevioletred;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
}
.subpage{
    bottom: 0;
    z-index: 10;
}
</style>
