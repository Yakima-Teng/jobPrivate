import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

import ElementUI from 'element-ui';
import VueLazyLoad from 'vue-lazyload';
import $ from 'jquery'
// import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill'
import './static/sass/reset.scss';
import './static/sass/fonts.scss'
import promise from 'es6-promise';
// import Api from './static/js/api.js'

import MetaInfo from 'vue-meta-info'


import {getCookie,delCookie,setCookie} from './static/js/util.js'

import Axios from 'axios'
import Api from './static/js/api'

Vue.use(MetaInfo);

promise.polyfill();

Vue.use(ElementUI);
Vue.use(VueLazyLoad, {
    error: require('./static/images/error.png'),
    loading: require('./static/images/loading.png'),
    preLoad: 1,
    attempt: 1
});

// router.beforeEach((to, from, next) => {
//         //会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
//         let AUTH_TOKEN = (function() {
//             return getCookie("token");
//         })();
//         Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
//         if (AUTH_TOKEN != null) {
//             Api.getUserInfo().then(res => {
//                 if (res.data.code == 501) {
//                     store.dispatch('update_isLogin', false);
//                     store.dispatch('update_userInfo', '');
//                     delCookie('token');
//                     next({
//                         path: '/login',
//                     })
//                 } else if (res.data.code == 200) {
//                     store.dispatch('update_isLogin', true);
//                     store.dispatch('update_userInfo', res.data.data);
//                     next();
//                 } else {
//                     next();
//                 }
//             })
//         } else {
//             store.dispatch('update_isLogin', false);
//             store.dispatch('update_userInfo', '');
//             next();
//         };
//     })
// Vue.config.productionTip = false

export function createApp(context) {
    const router = createRouter();
    const store = createStore();


    // 验证登录
    router.beforeEach((to, from, next) => {
        //会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
        if (typeof window !== 'undefined') {
            // require('tinymce/skins')
        
            window.scrollTo(0, 0);
            let AUTH_TOKEN = (function () {
                return getCookie("token");
            })();
            if (AUTH_TOKEN != null) {
                Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
                Api.getUserInfo().then(res => {
                    if (res.data.code == 501) {
                        store.dispatch('update_isLogin', false);
                        store.dispatch('update_userInfo', '');
                        delCookie('token');
                        next();
                    } else if (res.data.code == 200) {
                        store.dispatch('update_isLogin', true);
                        store.dispatch('update_userInfo', res.data.data);
                        next();
                    } else {
                        next();
                    }
                })
            } else {
                $.ajax({
                    type: 'post',
                    url: 'http://account.ciprun.com/join/get_token',
                    dataType: 'jsonp',
                    success: function (res) {
                        if (res != null) {
                            setCookie('token', res, 1)
                            let AUTH_TOKEN = (function () {
                                return getCookie("token");
                            })();
                            Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
                            Api.getUserInfo().then(res => {
                                if (res.data.code == 501) {
                                    store.dispatch('update_isLogin', false);
                                    store.dispatch('update_userInfo', '');
                                    delCookie('token');
                                    next();
                                } else if (res.data.code == 200) {
                                    store.dispatch('update_isLogin', true);
                                    store.dispatch('update_userInfo', res.data.data);
                                    next();
                                } else {
                                    next();
                                }
                            })
                        } else {
                            store.dispatch('update_isLogin', false);
                            store.dispatch('update_userInfo', '');
                            next();
                        }
                    },
                    error: function () {
                        next();
                    }
                })

            };
        }else{
            next();
        }
    })
    sync(store, router);

    const app = new Vue({
        router,
        store,
        context,
        render: h => h(App)
    });

    return { app, router, store }
}