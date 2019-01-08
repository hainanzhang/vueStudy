<template>
<header class="app-header">
    <h1>千锋教育</h1>
    <ul class="nav">
        <li v-for="item in courseList" :key="item">
            {{item}}
        </li>
    </ul>
</header>
</template>

<script>
export default {
    data(){
        return {
            courseList: ['HTML5', 'JAVA', 'Python', 'UI', '大数据', '测试', '云计算']
        }
    }
}
</script>

<style>
.app-header{
    width: 980px;
    height: 60px;
    margin: 0 auto;
    background: lavender;
    display: flex;
}
.app-header h1{
    width: 100px;
    font-size: 18px;
    text-align: center;
    line-height: 60px;
}
.app-header .nav{
    flex: 1;
    display: flex;
}
.app-header .nav li{
    flex: 1;
    text-align: center;
    line-height: 60px;
    list-style: none;
    color: #333;
}
</style>
