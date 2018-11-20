import { createApp } from './main'

export default context => {
    return new Promise((resolve, reject) => {

        const { app, router, store } = createApp(context);

        // if (context.cookies) {
        //     store.state.cookies = context.cookies;
        // }

        router.push(context.url)

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }

            // 执行asyncData方法，预拉取数据
            Promise.all(matchedComponents.map(Component => {
                if (Component.asyncData) { // asyncData方法只能用于路由绑定的组件
                    return Component.asyncData({
                        store: store,
                        route: router.currentRoute,
                        // cookies: context.cookies
                    })
                }
            })).then(() => {
                // 将 store 快照挂到ssr上下文中
                context.state = store.state
                resolve(app)
            }).catch(reject)
        }, reject)
    })
}