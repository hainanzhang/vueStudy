<template>
<div class="wrap">

    <!-- slot组件是插槽的功能 -->

   
    
     <slot name="h"/>
    
    <h1>这是wrap组件</h1>
    <h1>这是wrap组件</h1>

    <slot name="p"/>

    <h1>这是wrap组件</h1>
    <h1>这是wrap组件</h1>

    <slot/>

    <p>接收到的数据为：{{boxData}}</p>
    

</div>
</template>

<script>
export default {
    data(){
        return {
            message: 'hello vue',
            boxData: ''
        }
    },
    created(){
        this.$center.$on('send-event', (val)=>{
            this.boxData = val;
        })
    }
}
</script>

<style>

</style>
