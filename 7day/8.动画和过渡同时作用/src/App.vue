<template>
<div id="app">

    <p>{{isSelected}}</p>
    <input type="checkbox" v-model="isSelected">
   

    <!-- 
        如果transition标签同时有动画和过渡效果，时间分别按照css设置的动画和过渡的时间执行。
        设置duration属性，动画和过渡时间都按照duration的时间执行。
     -->
    <!-- <transition :duration='5000'> -->
    <transition :duration='{enter: 1000,leave: 4000}'>
        <!-- 离开：缩小，显示：淡入 -->
        <Box v-show="isSelected"/>
    </transition>

    
    
    
</div>
</template>

<script>
import Box from './components/Box'
export default {
    components: {
        Box,
        one: {template: '<div class="small-box">one组件</div>'},
        two: {template: '<div class="small-box">two组件</div>'}
    },
    data(){
        return {
            isSelected: true
        }
    },
    computed: {
        com(){
            return this.isSelected?'one':'two'
        }
    }
}
</script>

<style>
@keyframes colorAni {
    0%{
        background: red;
    }
    25%{
        background: green;
    }
    50%{
        background: blue;
    }
    75%{
        background: yellow;
    }
    100%{
        background: paleturquoise;
    }
}
.v-enter-active{
    animation: colorAni 6s;
  
}


.v-enter{
    transform: scale(0);
}
.v-enter-to{
    transform: scale(1);
}
.v-enter-active{
    transition: 3s transform;
}


</style>
