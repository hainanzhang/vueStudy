<template>
<div id="app">
  <p>{{isSelect}}</p>

  <input type="checkbox" v-model="isSelect">

  <transition @beforeEnter="handleBeforeEnter" @enter="handleEnter" @afterEnter="handleAfterEnter">
    <div class="box" v-if="isSelect"></div>
  </transition>

  

</div>
</template>

<script>
export default {
  data(){
    return {
      isSelect: true
    }
  },
  methods: {
    handleBeforeEnter(el){
      console.log('before enter');
      el.style.background = 'red';
      el.style.transition = '1s';
    },
    handleEnter(el, done){//done进入完成的回调函数
      console.log('enter');

      setTimeout(()=>{
        el.style.background = 'yellow';

        setTimeout(()=>{
          el.style.background = 'darkgoldenrod';
          done();//进入完成
        }, 1000);

      }, 1000);

      
    },
    handleAfterEnter(){
      console.log('after enter');
    }

  }
}
</script>

<style>
.box{
  width: 200px;
  height: 200px;
  background: darkgoldenrod;
}
</style>
