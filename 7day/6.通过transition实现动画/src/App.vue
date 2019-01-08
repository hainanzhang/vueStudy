<template>
<div id="app">

    <p>{{isSelected}}</p>
    <input type="checkbox" v-model="isSelected">
    
    <!-- mode设置动画执行的模式 in-out(先进入后退出)   out-in（先退出后进入） 默认退出和进入同时进行 -->
    <transition name="ani1" mode="out-in">
        <component :is="com"/>
    </transition>

    <transition name="ani1">
        <!-- 离开：缩小，显示：淡入 -->
        <Box v-show="isSelected"/>
    </transition>

    <transition name="ani2">
        <!-- 离开：淡出，显示：放大 -->
        <Box v-if="isSelected"/>
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
.ani1-enter{
    transform: scale(0);
}

.ani1-enter-active{
    transition: 5s;
}

.ani1-leave-to{
    opacity: 0;
}
.ani1-leave-active{
    transition: 5s;
}


.ani2-enter{
    opacity: 0;
}
.ani2-enter-active{
    transition: 1s opacity;
}


.ani2-leave-to{
    transform: scale(0);
}
.ani2-leave-active{
    transition: 1s;
}

.small-box{
    background: red;
    width: 200px;
    height: 40px;
}

</style>
