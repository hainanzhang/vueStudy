import Vue from 'vue'
import Router from 'vue-router'

import Bar from '../pages/Bar'
import Foo from '../pages/Foo'


Vue.use(Router);



export default new Router({
    routes:[
    	{	name:'b',
    		path:'/bar/:id',
    		components:Bar
    	},
    	{	name:'f',
    		path:'/foo',
    		components:Foo
    	}
    ]
})
