import Vue from 'vue'

import App from './App.vue'

// 管理项目的路由对象
//引入router文件夹里面的文件
import router from './router'


new Vue({

  // router配置项是给项目配置管理项目的路由对象
  router,

  render: h => h(App)
  
}).$mount('#app')
