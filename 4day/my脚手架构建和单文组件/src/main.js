import Vue from 'vue'
// vue项目的根组件
import App from './App'
//这是导入文件
//import AppContent from './components/Content'
//import AppHeader from './components/Header'
//Vue.component('app-content', AppContent);
//Vue.component('app-header', AppHeader);
const vm = new Vue({
  el: '#app',
  render: function(createElement){
    let appDOM = createElement(App);
    return appDOM;
  }
})

// vm.$mount('#app');
