<template>
    <div class="box">
        <h1>box</h1>
        <button @click="btnAction">按钮</button>
    </div>
</template>

<script>
export default {
	props:['str','id'],
    methods:{
    	btnAction:function(){
    		console.log('123')
    		console.log(this.id)
    		console.log(this.str)
    	}
    }
}
</script>

<style>
.box{
    background: paleturquoise;
}
</style>
