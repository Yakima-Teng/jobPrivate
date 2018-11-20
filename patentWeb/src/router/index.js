import Vue from 'vue'
import Router from 'vue-router'

import Cookie from 'js-cookie'

Vue.use(Router)

export function createRouter() {
    var router = new Router({
        mode: 'history',
        linkActiveClass: 'cur',
        routes: [{
                path: '/',
                component: () => System.import('@/views/index.vue')
            },
            {
                path: '/matchP',
                component: () => System.import('@/views/match-patent.vue')
            },
            {
                path: '/matchN',
                component: () => System.import('@/views/match-needs.vue')
            },
            {
                path: '/member',
                component: () => System.import('@/views/member.vue'),
                meta: {
                    isLogin: true
                },
                children: [{
                        path: 'data',
                        component: () => System.import('@/views/member/data.vue')
                    },
                    {
                        path: 'head',
                        component: () => System.import('@/views/member/head.vue')
                    },
                    {
                        path: 'patent',
                        component: () => System.import('@/views/member/patentButler.vue')
                    },
                    {
                        path: 'groom',
                        component: () => System.import('@/views/member/groom.vue')
                    },
                    {
                        path: 'groom/edit',
                        component: () => System.import('@/views/member/groomEdit.vue')
                    },
                    {
                        path: 'patent/wait',
                        component: () => System.import('@/views/member/patentWait.vue')
                    },
                    {
                        path: 'patent/collect',
                        component: () => System.import('@/views/member/patentCollect.vue')
                    },
                    {
                        path: 'patent/p',
                        component: () => System.import('@/views/member/patentP.vue')
                    },
                    {
                        path: 'needs',
                        component: () => System.import('@/views/member/needs.vue')
                    },
                    {
                        path: 'needs/quote', // 报价
                        component: () => System.import('@/views/member/needsQuote.vue')
                    },
                    {
                        path: 'needs/collect',
                        component: () => System.import('@/views/member/needsCollect.vue')
                    },
                    {
                        path: 'needs/release',
                        component: () => System.import('@/views/member/needsRelease.vue')
                    },
                    {
                        path: 'myCard/pc',
                        component: () => System.import('@/views/member/myCard-pc.vue')
                    },
                    {
                        path: 'myCard/wap',
                        component: () => System.import('@/views/member/myCard-wap.vue')
                    },

                ]
            },
            {
                path: '/r/:id',
                component: () => System.import('@/views/userRcmd-pc.vue')
                    // component: function() {
                    //     return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? System.import('@/views/userRcmd-wap.vue') : System.import('@/views/userRcmd-pc.vue')
                    // }
            },
            {
                path: '/r/:id/m',
                component: () => System.import('@/views/userRcmd-wap.vue')
            },
            {
                path: '/hall',
                component: () => System.import('@/views/need-hall.vue')
            },
            {
                path: '/login',
                component: () => System.import('@/views/login.vue')
            },
            {
                path: '/forget',
                component: () => System.import('@/views/forget.vue')
            },
            {
                path: '/register',
                component: () => System.import('@/views/regist.vue')
            },
            {
                path: '/patent',
                component: () => System.import('@/views/patent-resource.vue')
            },
            {
                path: '/pDetail/:id',
                component: () => System.import('@/views/patent-detail.vue')
            },
            {
                path: '/policy',
                component: () => System.import('@/views/policy.vue')
            },
            {
                path: '/article/:type/:id',
                component: () => System.import('@/views/article.vue')
            },
            {
                path: '/c/:short',
                // component: function() {
                //     return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? System.import('@/views/preview-wap-card.vue') : System.import('@/views/preview-pc-card.vue');
                // }
                component: () => System.import('@/views/preview-pc-card.vue')
            },
            {
                path: '/c/:short/m',
                component: () => System.import('@/views/preview-wap-card.vue')
            },
            {
                path: '/about',
                component: () => System.import('@/views/about.vue')
            },
            {
                path: '/contact',
                component: () => System.import('@/views/about.vue')
            },
            {
                path: '/pact',
                component: () => System.import('@/views/about.vue')
            },
            {
                path: '/declare',
                component: () => System.import('@/views/about.vue')
            }

        ]
    });
    router.beforeEach((to, from, next) => {
        let token = Cookie.get('token');
        let bl = to.matched.some(function(item) {
            return item.meta.isLogin
        });
        if (bl) { // 必须要登录的页面
            if (token == undefined) {
                next({
                    path: '/login',
                    query: { goback: to.fullPath }
                });
            } else {
                next()
            }
        } else {
            next()
        }
    });
    return router;
}