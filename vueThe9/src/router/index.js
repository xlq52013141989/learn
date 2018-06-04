import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Bigs from '@/components/pages/Bigs'
import Tops from '@/components/pages/Tops'
import News from '@/components/pages/News'
import NewsDetail from '@/components/pages/News_Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior (to, from, savePosition){

    },
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        alias: '/index'
    },{
        path: '/tops',
        name: 'Tops',
        component: Tops
    },{
        path: '/bigs',
        name: 'Bigs',
        component: Bigs
    },{
        path: '/news',
        name: 'News',
        component: News
    },{
        path: '/news_detail/:articleId',
        name: 'NewsDetail',
        component: NewsDetail
     },{
        path: '*',
        // redirect: '/'
        redirect: {
            path: '/'
        }
    }
]
})
