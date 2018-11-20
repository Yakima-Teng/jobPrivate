import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill';

import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

import $ from 'jquery'

import './assets/sass/base.scss'

import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
    // Vue.config.productionTip = false

export function createApp(context) {
    const router = createRouter()
    const store = createStore()

    sync(store, router);

    const app = new Vue({
        router,
        store,
        context,
        render: h => h(App)
    })
    return { app, router, store }
}