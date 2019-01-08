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
            path: '/guide',
            //别名
            alias: '/',
            components: {
                nav: GuideNav,
                default: GuideIndex
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
            path: '/api',
            alias: '/menu',
            components: {
                nav: ApiNav,
                default: ApiIndex
            }
        },
        {
            path: '/404',
            components: {
                default: ()=>import('../pages/NotFind')
            }
        },
        {
            //其他不满足条件的路径
            path: '**',
            // 重定向
            redirect: '/404'
        }
        




    ]
})
