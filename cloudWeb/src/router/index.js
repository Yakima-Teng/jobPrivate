import Vue from 'vue'
import Router from 'vue-router'
import Api from '../static/js/api.js'
import {getCookie,delCookie,setCookie} from "../static/js/util.js"
import store from "../store"
import Axios from 'axios'
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [{
                path: '/', // 首页
                component: () => System.import('../components/index.vue'),
            },
            {
                path: '/search', // 搜索
                component: () => System.import('../components/search/search.vue')
            },
            {
                path: '/channel_140', //频道商标页
                component: () => System.import('../components/channel/channel.vue')
            },
            {
                path: '/channel_149', //频道版权页
                component: () => System.import('../components/channel/channel-copyright.vue')
            },
            {
                path: '/channel_174', //频道法律页
                component: () => System.import('../components/channel/channel-law.vue')
            },
            {
                path: '/channel_172', //频道国际页
                component: () => System.import('../components/channel/channel-International.vue')
            },
            {
                path: '/channel_175', //频道企业页
                component: () => System.import('../components/channel/channel-enterprise.vue')
            },
            {
                path: '/channel_173', //频道设计页
                component: () => System.import('../components/channel/channel-design.vue')
            },
            {
                path: '/channel_150', //频道专利页
                component: () => System.import('../components/channel/channel-patent.vue')
            },
            {
                path: '/sbfw', //商标服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/sbfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/sbfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue'),
            },
            {
                path: '/zlfw', //专利服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/zlfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/zlfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue'),
            },
            {
                path: '/bqfw', //版权服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/bqfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/bqfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue'),
            },
            {
                path: '/gjfw', //国际服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/gjfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/gjfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue'),
            },
            {
                path: '/qyfw', //企业服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/qyfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/qyfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue'),
            },
            {
                path: '/flfw', //法律服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/flfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue'),
            },
            {
                path: '/flfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue')
            },
            {
                path: '/sjfw', //设计服务
                component: () => System.import('../components/channel/seoM.vue')
            },
            {
                path: '/sjfw/:id(\\d+)', // 详情页
                component: () => System.import('../components/channel/newsDetail.vue')
            },
            {
                path: '/sjfw/:tid(\\D+)', // 单页
                component: () => System.import('../components/channel/seo.vue')
            },
            {
                path: '/news', //新闻
                component: () => System.import('../components/channel/news.vue')
            },
            {
                path: '/news/:tid(\\D+)', // 新闻单页
                component: () => System.import('../components/channel/seo.vue')
            },
            {
                path: '/news/:tid(\\D+)/:id(\\d+)', // 新闻详情页
                component: () => System.import('../components/channel/newsDetail.vue')
            },
            {
                path: '/about', //关于我们
                component: () => System.import('../components/about/aboutUs.vue')
            },
            {
                path: '/about/concatus', //联系我们
                component: () => System.import('../components/about/contactUs.vue')
            },
            {
                path: '/about/cooperats', //合作机构
                component: () => System.import('../components/about/organization.vue')
            },
            {
                path: '/about/events', //细软事记
                component: () => System.import('../components/about/xrNotes.vue')
            },
             {
                 path: '/about/team', //细软团队简介
                 component: () => System.import('../components/about/xrTeam.vue')
             },
            {
                path: '/:id(\\d+)', //商品详情
                component: () => System.import('../components/goodsDetail/detail.vue')
            },
            {
                path: '/login', //登录
                component: () => System.import('../components/login/login.vue')
            },
            {
                path: '/findPassword', //找回密码
                component: () => System.import('../components/login/findPassword.vue')
            },
            {
                path: '/changePassword', //修改密码
                component: () => System.import('../components/login/changePassword.vue')
            },
            {
                path: '/home/order/:id', //订单详情 id:为订单id
                component: () => System.import('../components/user/orderDetails.vue')
                //  name: 'orderDetails'
            },
            {
                path: '/home', //个人中心
                component: () => System.import('../components/user/userView.vue'),
                // redirect: { name: 'homeIndex' },
                children: [{
                        path: '', //个人中心首页
                        component: () => System.import('../components/user/index.vue'),
                        name: 'homeIndex'
                    },
                    {
                        path: 'order', //个人中心订单
                        component: () => System.import('../components/user/userOrder.vue'),
                    },
                    {
                        path: 'my', //个人中心个人信息
                        component: () => System.import('../components/user/userInfo.vue'),
                    },
                    {
                        path: 'coupon', //优惠券
                        component: () => System.import('../components/user/userCoupon.vue'),
                    },
                    {
                        path: 'contacts', //联系人
                        component: () => System.import('../components/user/contacts.vue'),
                    },
                    {
                        path: 'collect', //我的收藏
                        component: () => System.import('../components/user/collection.vue'),
                    },
                    {
                        path: 'contract', //合同主体
                        component: () => System.import('../components/user/contract.vue'),
                    },
                    {
                        path: 'message', //订单消息
                        component: () => System.import('../components/user/orderMessage.vue'),
                    }
                ]
            },
            {
                path: '/cart', //购物车
                component: () => System.import('../components/cart/cart.vue')
            },
            {
                path: '/pay', //核对订单信息
                component: () => System.import('../components/account/account.vue')
            },
            {
                path: '/privacy', // 隐私条款
                component: () => System.import('../components/login/privacy.vue')
            },
            {
                path: '/agreement', // 隐私条款
                component: () => System.import('../components/login/agreement.vue')
            }
           
        ]
    });
}
// routes: [
// {
//     path: '/login', //登录
//     component: resolve => require(['../components/login/login.vue'], resolve)
// },
// {
//     path: '/findPassword', //找回密码
//     component: resolve => require(['../components/login/findPassword.vue'], resolve)
// },
// {
//     path: '/home/order/:id', //订单详情 id:为订单id
//     component: resolve => require(['../components/user/orderDetails.vue'], resolve),
//     //  name: 'orderDetails'
// },
// {
//     path: '/home', //个人中心
//     component: resolve => require(['../components/user/userView.vue'], resolve),
//     // redirect: { name: 'homeIndex' },
//     children: [{
//             path: '', //个人中心首页
//             component: resolve => require(['../components/user/index.vue'], resolve),
//             name: 'homeIndex'
//         },
//         {
//             path: 'order', //个人中心订单
//             component: resolve => require(['../components/user/userOrder.vue'], resolve),
//         },
//         {
//             path: 'my', //个人中心个人信息
//             component: resolve => require(['../components/user/userInfo.vue'], resolve),
//         },
//         {
//             path: 'coupon', //优惠券
//             component: resolve => require(['../components/user/userCoupon.vue'], resolve),
//         },
//         {
//             path: 'contacts', //联系人
//             component: resolve => require(['../components/user/contacts.vue'], resolve),
//         },
//         {
//             path: 'collect', //我的收藏
//             component: resolve => require(['../components/user/collection.vue'], resolve),
//         },
//         {
//             path: 'contract', //合同主体
//             component: resolve => require(['../components/user/contract.vue'], resolve),
//         },
//         {
//             path: 'message', //订单消息
//             component: resolve => require(['../components/user/orderMessage.vue'], resolve),
//         }
//     ]
// },
// {
//     path: '/about', //关于我们
//     component: resolve => require(['../components/about/aboutUs.vue'], resolve)
// },
// {
//     path: '/about/team', //细软团队简介
//     component: resolve => require(['../components/about/xrTeam.vue'], resolve)
// },
// {
//     path: '/about/events', //细软事记
//     component: resolve => require(['../components/about/xrNotes.vue'], resolve)
// },
// {
//     path: '/about/concatus', //联系我们
//     component: resolve => require(['../components/about/contactUs.vue'], resolve)
// },
// {
//     path: '/about/cooperats', //合作机构
//     component: resolve => require(['../components/about/organization.vue'], resolve)
// },
// {
//     path: '/:id(\\d+)', //商品详情
//     component: resolve => require(['../components/goodsDetail/detail.vue'], resolve)
// },
// {
//     path: '/cart', //购物车
//     component: resolve => require(['../components/cart/cart.vue'], resolve)
// },
// {
//     path: '/pay', //核对订单信息
//     component: resolve => require(['../components/account/account.vue'], resolve)
// },
// {
//     path: '/privacy', // 隐私条款
//     component: resolve => require(['../components/login/privacy.vue'], resolve)
// },
// {
//     path: '/agreement', // 隐私条款
//     component: resolve => require(['../components/login/agreement.vue'], resolve)
// }
// ]
// });
// export default router;
