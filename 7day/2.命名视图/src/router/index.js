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
            components: {
                nav: ApiNav,
                default: ApiIndex
            }
        }
        




    ]
})
