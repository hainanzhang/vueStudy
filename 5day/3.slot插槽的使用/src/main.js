import Vue from 'vue'

import App from './zuoye'

Vue.prototype.$center = new Vue();

new Vue({
  render: h => h(App),
  errorCaptured(error){
      console.log('vm捕获异常');
      console.log(error);
      return false;
    }
}).$mount('#app')

