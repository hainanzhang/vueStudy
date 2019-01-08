<template>
<div>
    <h4>{{title}}</h4>
    <h6>选择的城市为：{{city}}，该城市的景点有：</h6>
<ul class="list" v-if="cityList && cityList.length>0">
    <li v-for="item in cityList" :key="item">
        {{item}}
    </li>
</ul>

<p v-else>
    对不起，您选择的城市暂时没有景点！
</p>




</div>
</template>

<script>
export default {
    // 外部属性
    // 只可以读取，不可以设置  (单向数据流)
    // props在接收外部属性时，可以设置为数组的形式，也可以设置为对象的形式
    // props: ['city', 'title'],
    props: {
        // 属性校验
        // key: String/Number/Array/Object
        city: {
            type: String,//属性类型
            required: true,//属性是否必须传递
        },
        title: {
            type: [Array, String],
            default: 'vue'//设置默认值
        },
        obj: {
            type: Object,
            default(){
                return {
                    name:'zhangsan',
                    age: 40
                }
            }
        },
        // val: {
        //     validator: function(...rest){
        //         console.log(...rest);
        //         console.log('validator执行了');
        //         // 自定义校验属性的方式

        //         // return true;

        //         let error = new Error('校验失败，原因：类型错误');
        //         console.error(error);
        //         return false;
        //     }
        // }
    },


    // 内部属性（可以读取，可以设置）
    data(){
        return {
            cityMap: {
                '深圳': ['世界之窗', '东部华侨城'],
                '北京': ['故宫', '长城'],
                '上海': ['东方明珠', '外滩'],
                '广州': ['小蛮腰', '长隆'],
                '西安': []
            }
        }
    },
    // 计算属性(计算属性可以依赖其他所有的属性)
    // 如果只有get函数，只可以访问，不可以设置。
    // 如果实现了set和get函数，可以读取也可以设置
    computed: {
        cityList(){
            return this.cityMap[this.city];
        }
    }
}
</script>

<style>

</style>
