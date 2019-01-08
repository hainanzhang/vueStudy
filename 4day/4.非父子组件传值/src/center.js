import Vue from 'vue'

const center = new Vue();

export default center;


/*
// 发布订阅模式
// 多对多
// 先监听后触发，才有效

// 监听自定义事件的监听
// 参数1：需要监听的自定义事件名字
// 参数2：监听事件的回调函数
let listener = function (){
    console.log('add事件触发了1');
};
center.$on('add', listener);
center.$on('add', function (){
    console.log('add事件触发了2');
});

center.$on('reduce', function (){
    console.log('reduce事件触发了2');
});

// 触发事件
// 参数1：触发的事件名字
// 剩余参数：触发事件时传的数据
center.$emit('add');
center.$emit('reduce');




// 移除监听
// center.$off();
// center.$off('add');
center.$off('add', listener);
console.log('移除了');

center.$emit('add');
center.$emit('reduce');

*/