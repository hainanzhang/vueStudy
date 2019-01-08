import Vue from 'vue'
import App from './App.vue'

// v-if   v-show .....

// 声明全局指令：

// v-color="yellow"
// 创建自定义指令
// 参数1：指令名字
// 参数2：指令实现函数
Vue.directive('color', function(el, binding){
  // console.log('color指令调用了');
  // console.log(el, binding);
  el.style.background = binding.value;
})


// v-drag/v-drag.x.y  x y 可以拖拽
// v-drag.x     x轴可以拖拽
// v-drag.y     y轴可以拖拽
Vue.directive('drag', (el, binding)=>{
  console.log(el, binding);
  let {x, y} = binding.modifiers;
  if(/*(x && y) ||*/ (!x && !y)){
    //xy可以拖拽
    x = true;
    y = true;
  }
  // else if(!x && y){
  //   //y可以拖拽
  //   y = true;
  //   x = false;
  // }
  // else if(x & !y){
  //   //x可以拖拽
  //   x = true;
  //   y = false;
  // }

  el.style.position = 'relative';
  let top = 0, left = 0;

  el.onmousedown = function(ev){
    let startX = ev.clientX - left;
    let startY = ev.clientY - top;
    document.onmousemove = function(ev){
      // 计算偏移量
      left = ev.clientX - startX;
      top = ev.clientY - startY;

      // 设置偏移量
      if(x){
        el.style.left = left + 'px';
      }
      if(y){
        el.style.top = top + 'px';
      }
      
    }

    document.onmouseup = function(ev){
      document.onmousemove = null;
      document.onmouseup = null;
    }

  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
