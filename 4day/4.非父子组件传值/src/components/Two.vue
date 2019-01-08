<template>
<div class="two">
    <h1>这是two组件</h1>
    <ul>
        <li v-for="(item, index) in list">
            {{item}}
            <button @click="finishAction(index)">完成</button>
        </li>
    </ul>
</div>
</template>

<script>
// import center from '../center'
// one组件需要传值给two组件
// 所以，two组件需要监听事件，接收数据
export default {
    data(){
        return {
            list: []
        }
    },
    methods: {
        finishAction(index){
            // 删除完成的数据
            this.list.splice(index, 1);
        }
    },
    created(){
        // 监听事件，接收数据
        this.$center.$on('add-event', (val)=>{
            console.log('执行了',this.$center);
            this.list.push(val);
        });
    },
    beforeDestroy(){
        // 移除监听
        this.$center.$off('add-event');
    }
}
</script>

<style>
.two{
    background: peru;
    margin: 10px;
}

</style>
