import Vue from 'vue'
import Router from 'vue-router'

import ApiNav from '../nav/api'
import GuideNav from '../nav/guide'

import ApiIndex from '../pages/ApiIndex'
import GuideIndex from '../pages/GuideIndex'
import GuideInter from '../pages/GuideInter'


Vue.use(Router);



export default new Router({
    routes: [
       {
       		path:'/guide',
       		alias:'/',
       		components:{
       			nav:GuideNav,
       			default:GuideIndex
       		}
       },
       {
       		path:'/api',
       		alias:'/',
       		components:{
       			nav:ApiNav,
       			default:ApiIndex
       		}
       },
       {
       		path: '/inter',
            components: {
                nav: GuideNav, 
                default: GuideInter
            }
       },
       {
       		path: '/404',
            components: {
                default: ()=>import('../pages/NotFind')
            }
       },{
       		path:'**',
       		redirect:'/404'
       }
//      




    ]
})
