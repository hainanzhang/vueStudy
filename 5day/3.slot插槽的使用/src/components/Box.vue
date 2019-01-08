<template>
<div class="box">

    <input type="text" v-model="text">
    <button @click="btnAction">发送</button>

</div>
</template>

<script>
export default {
    data(){
        return {
            text: ''
        }
    },
    methods: {
        btnAction(){
            // 触发事件，传输数据
            this.$center.$emit('send-event', this.text);

            this.text = '';
        }
    }
}
</script>

<style>
.box{
    width: 300px;
    height: 200px;
    background: darkseagreen;
}
</style>
