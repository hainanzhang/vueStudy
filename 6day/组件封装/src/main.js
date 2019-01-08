import Vue from 'vue'

import App from './App'

import tab from './components/tab'
Vue.component('app-content', tab);
new Vue({
  render: h => h(App)
}).$mount('#app')
