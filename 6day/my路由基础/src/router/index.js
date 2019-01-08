import Vue from 'vue'
import Router from 'vue-router'



//import Home from '../pages/Home'
//import Discover from '../pages/Discover'
//import Setting from '../pages/Setting'
//
//
//Vue.use(Router);
//
//const routes =[
//	{
//		path:'/home',
//		component:Home
//	},
//	{
//		path:'/discover',
//		component:Discover
//	},
//	{
//		path:'/setting',
//		component:Setting
//	}
//];
//const router = new Router({
//	routes
//});
//export default router;






import home from '../pages/Home'
import discover from '../pages/Discover'
import setting from '../pages/Setting'

Vue.use(Router)
const routes=[
	{
		path:'/home',
		component:home
	},{
		path:'/discover',
		component:discover
	}
	

]
const router=new Router({
	routes
})
export default router





