import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import testApi from '../views/testApi.vue'
import download from '../views/DownloadPage.vue'
import resultPage from '../views/resultPage.vue'

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
    component: testApi
  },
  {
    path: '/download',
    name: 'download',
    component: download
  },
  {
    path: '/result',
    name: 'result',
    component: resultPage
  }
]

const router = new VueRouter({
    routes
})

export default router
