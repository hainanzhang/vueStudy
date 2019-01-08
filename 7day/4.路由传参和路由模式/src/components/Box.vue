<template>
    <div class="box">
        <h1>box</h1>
        <button @click="btnAction">按钮</button>
    </div>
</template>

<script>
export default {
    props:['id', 'str'],
    created(){
        // console.log(this.$route.params.id);
        console.log(this.id);
    },
    methods: {
        btnAction(){
            console.log(this.id);
            console.log(this.str);
        }
    }
}
</script>

<style>
.box{
    background: paleturquoise;
}
</style>
