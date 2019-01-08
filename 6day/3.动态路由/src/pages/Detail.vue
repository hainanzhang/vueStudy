<template>
<div id="detail" class="page">

    <h1>电影详情</h1>
    <div>
        图片
    </div>
    <div>
        电影简介{{messing}}
    </div>
    <ul>
        演员列表
    </ul>
    <button>购票按钮</button>

</div>
</template>

<script>
export default {
	data(){
		return {
			messing:''
		}
	},
    watch: {
        //如果动态路由执行时，对组件进行了复用，组件不会重新创建
        // 为了获得动态路由的参数，需要对$route进行监听
        '$route.params.id': {
            handler(newVal, oldVal){
                console.log(newVal);
                this.messing=newVal;
                //根据新值，向后台请求数据
            },
            immediate: true 
        },
        '$route.query.id': {
            handler(newVal, oldVal){
                console.log('query.id: ', newVal);
                this.messing=newVal;
                //根据新值，向后台请求数据
            },
            immediate: true 
        }
    },
    created(){
        console.log('created');
        // 路由信息的对象
        console.log(this.$route);
    }

}
</script>

<style>

</style>
