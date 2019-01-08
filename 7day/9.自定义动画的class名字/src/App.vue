<template>
<div id="app">

    <p>{{isSelected}}</p>
    <input type="checkbox" v-model="isSelected">
   

   <!-- 自定义class名字
     enter-class="" enter-to-class="" enter-active-class=""
     leave-class="" leave-to-class="" leave-active-class=""
     appear-class="" appear-to-class="" appear-active-class=""
    -->
    <transition  leave-active-class="hinge" enter-active-class="wobble"
        appear-active-class="jello" appear
    >
        <Box :v-show="isSelected"/>
    </transition>

    
    
    
</div>
</template>

<script>
import Box from './components/Box'
export default {
    components: {
        Box
    },
    data(){
        return {
            isSelected: true
        }
    }
}
</script>

<style>
.hinge, .wobble, .jello{
    animation-duration: 1500ms;
}

</style>
