import Vue from 'vue'
import Router from 'vue-router'

import Detail from '../pages/Detail'
import Discover from '../pages/Discover'
import Home from '../pages/Home'
import Location from '../pages/Location'
import Search from '../pages/Search'
import Setting from '../pages/Setting'

Vue.use(Router)
const routes=[
	{
		path:'/home/detail/:name/:id',
		component:Detail
	},
	{
		path:'/discover',
		component:Discover
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/home/location',
		component:Location
	},
	{
		path:'/home/search',
		component:Search
	},
	{
		path:'/setting',
		component:Setting
	}
]
const router=new Router({
	routes
})
export default router
