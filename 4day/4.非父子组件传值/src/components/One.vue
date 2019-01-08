<template>
<div class="one">
    <h1>这是one组件</h1>
    <input type="text" v-model='val'/>
    <button @click="addAction">添加</button>
</div>
</template>

<script>
// import center from '../center'
// one组件需要传值给two组件
// 所以，one组件需要触发事件，传递数据
export default {
    data(){
        return {
            val: ''
        }
    },
    methods: {
        addAction(){
            //触发事件，传值
            this.$center.$emit('add-event', this.val);

            this.val = '';
        }
    }

}
</script>

<style>
.one{
    background: palegoldenrod;
    margin: 10px;
}

</style>
