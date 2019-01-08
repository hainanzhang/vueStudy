import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

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
