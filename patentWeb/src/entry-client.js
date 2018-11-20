import Vue from 'vue'
import { createApp } from './main'

// 路由组件重用时，要调用 asyncData 函数
Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
})

const { app, router, store } = createApp();

// 初始化数据   bug  window.__INITIAL_STATE__中无数据
// (function getInitialData() {
//     const { dispatch } = store;
//     // 头部导航
//     dispatch("getServiceCate");
// })();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false;
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        });
        // 组件数据通过执行 asyncData 方法获取
        if (!activated.length) {
            return next()
        }

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {
            next()
        }).catch(next);
    })

    // 将 vue实例挂载到dom中，完成浏览器端应用启动
    app.$mount('#app')
})