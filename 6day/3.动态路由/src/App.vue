<template>
<div id="app">

   <ul>
    <li>
      <router-link to="/detail/1">大黄蜂</router-link> 
    </li>
    <li>
      <router-link to="/detail/2">来电狂响</router-link>
    </li>
    <li>
      <router-link to="/detail/3">奎迪：英雄再起</router-link>
    </li>
    <li>
      <router-link to="/detail/4">海王</router-link>
    </li>
  </ul> 

  <!--<ul>
    <li>
      <router-link to="/detail?id=1">大黄蜂</router-link>
    </li>
    <li>
      <router-link to="/detail?id=2">来电狂响</router-link>
    </li>
    <li>
      <router-link to="/detail?id=3">奎迪：英雄再起</router-link>
    </li>
    <li>
      <router-link to="/detail?id=4">海王</router-link>
    </li>
  </ul>-->


  <!-- 装载路由切换的组件的容器 -->
  <router-view/>

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
