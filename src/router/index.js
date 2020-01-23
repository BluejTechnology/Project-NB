import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const [routerPush, routerReplace] = [VueRouter.prototype.push, VueRouter.prototype.replace];
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
VueRouter.prototype.replace = function replace(location) {
    return routerReplace.call(this, location).catch(error => error);
};
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
		name: 'app',
		redirect:"/home"
    },
    {
        path: '/home',
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
});
export default router
