import Vue from 'vue'
import Router from 'vue-router'

import detail from '../pages/detail'

Vue.use(Router)

const routes=[
//	{
//		path:'/detail',
//		component:detail
//	}
	{
		path: '/detail/:id',
		component:detail
	}
];

const router=new Router({
	routes
});

export default router;

