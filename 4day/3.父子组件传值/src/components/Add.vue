<template>
<div class="add">
    添加城市：
    <input type="text" v-model="text">
    <button @click="addAction">添加</button>
</div>
</template>

<script>
export default {
    // props: ['add'],
    props: {
        add: Function
    },
    data(){
        return {
            text: ''
        }
    },
    methods: {
        addAction(){
            console.log(this.text);
            //调用组件上的自定义事件
            // this.$emit('add', this.text);
            this.add(this.text);
        }
    }
}
</script>

<style>

</style>
