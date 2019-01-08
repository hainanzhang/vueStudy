import Vue from 'vue'//js 框架
import Router from 'vue-router' //vue插件

import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Setting from '../pages/Setting'

import Location from '../pages/Location'
import Search from '../pages/Search'
import Detail from '../pages/Detail'

// 使用插件，vue创建出来的实例才能够使用这个插件
Vue.use(Router);


// 路由管理页面的配置项
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'location',
        component: Location
      },
      {
        path: 'search',
        component: Search
      },
      {
        path: 'detail/:name/:id',
        component: Detail
      }
    ]
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/setting',
    component: Setting
  }
];


// 创建路由对象
const router = new Router({
  routes
});


// 向外输出路由对象
export default router;
