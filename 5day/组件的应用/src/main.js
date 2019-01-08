import Vue from 'vue';

import App from './App';
Vue.prototype.$center= new Vue();

const vm=new Vue({
	render:h=>h(App),
	
}).$mount('#app')

