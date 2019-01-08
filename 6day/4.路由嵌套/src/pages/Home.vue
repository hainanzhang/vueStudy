<template>
<div>
    <div class="page" id="home">
        <header class="home-header">
            <router-link to="/home/location" class="header-btn btn-left">正在定位...</router-link>
            <h1>首页</h1>
            <router-link to="/home/search" class="header-btn btn-right">搜索</router-link>
        </header>

        <div class="content">
            <ul class="list">
                <li class="item" v-for="item in goods" :key="item.id">
                    <!-- <router-link :to="'/home/detail?name='+item.name+'&id='+item.id"> -->
                    <router-link :to="'/home/detail/'+item.name+'/'+item.id">
                        {{item.name}}
                    </router-link>
                </li>
            </ul>

        </div>


    </div>

    <router-view/>

</div>

</template>

<script>
export default {
    data(){
        return {
            goods: [
                {id: 0, name: '上衣'},
                {id: 1, name: '外套'},
                {id: 2, name: '衬衫'},
                {id: 3, name: '毛衣'},
                {id: 4, name: '棉裤'},
                {id: 5, name: '裙子'},
                {id: 6, name: '上衣'},
                {id: 7, name: '外套'},
                {id: 8, name: '衬衫'},
                {id: 9, name: '毛衣'},
                {id: 10, name: '棉裤'},
                {id: 11, name: '裙子'}
            ]
        }
    }
}
</script>

<style>
#home{
    background: papayawhip;
}
.home-header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    background: #eee;
}
.home-header h1{
    width: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
}
.home-header .header-btn{
    padding: 10px;
    font-size: 14px;
    line-height: 14px;
    background: red;
    position: absolute;
    top: 5px;
}
.header-btn.btn-left{
    left: 10px;
}
.header-btn.btn-right{
    right: 10px;
}
.content{
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    overflow: auto;
}
.item{
    height: 80px;
    line-height: 80px;
    padding-left: 10px;
    border-bottom: 1px solid #ddd;
}

</style>
