import Vue from 'vue'//js 框架
import Router from 'vue-router' //vue插件

//import Detail from '../pages/Detail'

import Detail from '../pages/Detail'
// 使用插件，vue创建出来的实例才能够使用这个插件
Vue.use(Router);


// 路由管理页面的配置项
const routes = [

     {
       path: '/detail/:id',
       component: Detail
     }

//{
//  path: '/detail',
//  component: Detail
//}

];


// 创建路由对象
const router = new Router({
  routes
});


// 向外输出路由对象
export default router;
