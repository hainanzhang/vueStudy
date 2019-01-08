import Vue from 'vue'

// vue项目的根组件
import App from './App'


//这是导入文件
import AppContent from './components/Content'
import AppHeader from './components/Header'
Vue.component('app-content', AppContent);
Vue.component('app-header', AppHeader);
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


const vm = new Vue({
  el: '#app',

  // components: {
  //   App: App
  // },
  // template: '<App/>'  

  //上面的代码和下面的代码功能是一样的

  // vue实例创建好之后，自动执行render函数，能够获得实例的dom结构
  render: function(createElement){


    let appDOM = createElement(App);
    
    
    return appDOM;

  }


})

// vm.$mount('#app');
