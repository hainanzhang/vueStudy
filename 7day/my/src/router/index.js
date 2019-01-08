import Vue from 'vue'
import Router from 'vue-router'


import course from '../nav/Course'
import apiindex from '../nav/apiIndex'

Vue.use(Router);



export default new Router({
   routes:[
   	{
   		path:'/course',
   		components:{
   			nav:course,
   			default:apiindex
   		}
   	},
   	{
   		path:'/apiindex',
   		components:{
   			nav:apiindex,
   			default:course
   		}
   	}
   ]
})
