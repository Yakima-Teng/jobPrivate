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
    // 添加路由钩子函数，用于处理asyncData
    // 在初始路由 resolve 后执行，以便不会二次预取已有的数据
    // 使用 router.beforeResolve() , 以便确保所有异步组件都 resolve。
    // 通过路由勾子，执行拉取数据逻辑
    router.beforeResolve((to, from, next) => {
        // 找到增量组件，拉取数据
        console.log('beforeResolve')
            const matched = router.getMatchedComponents(to);
            const prevMatched = router.getMatchedComponents(from)
            let diffed = false;
            const activated = matched.filter((c, i) => {
                return diffed || (diffed = (prevMatched[i] !== c))
            });
            // 组件数据通过执行 asyncData 方法获取
            const asyncDataHooks = activated.map(c => c.asyncData != undefined ? c.asyncData(): next()).filter(_ => _)
            console.log(asyncDataHooks);
            console.log(asyncDataHooks.length,'©');
            if (!asyncDataHooks.length) {
                return next()
            }
            Promise.all(asyncDataHooks.map(hook => hook({ store, route: to }))).then(() => {
                next()
            }).catch(next);
    })

    // 将 vue实例挂载到dom中，完成浏览器端应用启动
    app.$mount('#app')
})
