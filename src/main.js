import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 前端sentry监控
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import utils from "./libs/utils.js";
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
Vue.prototype.$utils = utils;
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.name == "result" || to.name == "download") {
        var _event, uuid;
        switch (to.name) {
            case 'result':
                _event = 'upload_time';
                break;
            case 'download':
                _event = 'result_time';
                break;
        }
        window.location.href.substring(window.location.href.lastIndexOf('?') + 1).split('&').forEach(function (val) {
            (val.includes('uuid')) && (uuid = (val.split('='))[1]);
        })
    }
    window.localStorage.setItem("start_time", (new Date()).getTime());
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
