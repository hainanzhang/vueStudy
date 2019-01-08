import Vue from 'vue'
import Router from 'vue-router'

import Box from '../components/Box'
import Bar from '../components/Bar'

Vue.use(Router);



export default new Router({
    //路由的切换模式
    mode: 'history',//默认值为hash
    
            //  路由组件传参:布尔模式
            // props: true

            //  路由组件传参:对象模式,当 props 是静态的时候有用
            // props: {
            //     str: 'hello'
            // },

            //  路由组件传参:函数模式
            
		routes:[
			{
				path:'/box',
				name:'box',
				component:Box,
				props:() =>{
					return {str: 'hello',id:'11'};
				}
			},
			{
				path:'/box/:id',
				name:'box',
				component:Box,
				props:true
			},
			{
				path:'/bar',
				component:Bar
			}
			
		]
       

})
