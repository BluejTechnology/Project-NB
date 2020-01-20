import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/testApi',
        name: 'testApi',
        component: () => import('../views/testApi.vue')
    },
    {
        path: '/download',
        name: 'download',
        component: () => import('../views/DownloadPage.vue')
    },
    {
        path: '/result',
        name: 'result',
        component: () => import('../views/resultPage.vue')
    },
    {
        path: '/animation',
        name: 'animation',
        component: () => import('../views/animation.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
