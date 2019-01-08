import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('runoob', function (el, binding) {
    // 简写方式设置文本及背景颜色
    el.innerHTML = binding.value.text
    el.style.backgroundColor = binding.value.color
})

Vue.directive('showww', function (el, binding) {
    // 简写方式设置文本及背景颜色
    //el.innerHTML = binding.value.text
    console.log(el, binding);
    let {x, y} = binding.modifiers;
	  if(/*(x && y) ||*/ (!x && !y)){
	    //xy可以拖拽
	    x = true;
	    y = true;
	  }
       else if(!x && y){
       //y可以拖拽
       y = true;
       x = false;
     }
     else if(x & !y){
       //x可以拖拽
       x = true;
       y = false;
     }
    
    el.style.position="absolute"
    var left=0,top=0;
    var $h=document.querySelector('html')
    el.onmousedown=function(e){
    	var y=e.clientY-e.pageY/2,x=e.clientX-e.pageX/2
    	el.onmousemove=function(ev){
    		left=ev.pageX-x;
    		top=ev.pageY-y-	$h.scrollTop/2;
    		el.style.left=left+'px';
    		el.style.top=top+'px';
    	}
    	$h.onmouseup=function(){
    		el.onmousemove=""
    	}
    }
    //el.style.backgroundColor = binding.value.color
})


new Vue({

  //runtime-only编译方式
  // render: h => h(App),

  // runtime + compiler方式
  components: {
    App
  },
  template: '<App/>',

  router
}).$mount('#app')
