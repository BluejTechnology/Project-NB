import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 前端sentry监控
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
process.env.isBuild && Sentry.init({
    dsn: 'https://266aeebd126448cfb530211d02ff9825@report.url.cn/sentry/2163',
    integrations: [new Integrations.Vue({
        Vue,
        attachProps: true
    })],
    logErrors: true,
    release: `qzi`
})
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
