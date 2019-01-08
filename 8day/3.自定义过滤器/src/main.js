import Vue from 'vue'
import App from './App.vue'

// 自定义过滤器
// 参数1：过滤器的名字
// 参数2：过滤器的实现函数
// 调用过滤器  {{value | 过滤器名字}}    v-bind:prop="value | 过滤器名字"
Vue.filter('price', (value, ...rest)=>{   

  let result = '';

  if(rest[0] === '$'){
    result = value;
  }
  if(rest[0] === '¥'){
    result = value * 6.8529;
  }
  if(rest[0] === '€'){
    result = value * 0.8737;
  }

  return rest[0] + result;
  
})



new Vue({
  render: h => h(App),
}).$mount('#app')
