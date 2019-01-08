import Vue from 'vue'//js 框架
import Router from 'vue-router' //vue插件



//这是引入pages文件夹的vue文件
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Setting from '../pages/Setting'

// 使用插件，vue创建出来的实例才能够使用这个插件
Vue.use(Router);


// 路由管理页面的配置项
const routes = [
  {
    path: '/home',   //这是url中有/home 打开Home 也就是打开 pages/Home.vue
    component: Home  //  打开Home 也就是打开 pages/Home.vue
  },
  {
    path: '/discover',   //这是url中有/discover 打开Discover 也就是打开 pages/Discover.vue
    component: Discover			//  打开Discover 也就是打开 pages/Discover.vue
  },
  {
    path: '/setting', 		 //这是url中有/setting 打开Setting 也就是打开 pages/Setting.vue
    component: Setting			//  打开Setting 也就是打开 pages/Setting.vue
  }
];


// 创建路由对象
const router = new Router({
  routes
});


// 向外输出路由对象
export default router;
