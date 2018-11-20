import Vue from 'vue'
import Vuex from 'vuex'

import service from '../components/index/module'
import serviceChannel from '../components/channel/module-channel'

import serviceChannelPatent from '../components/channel/module-channel-patent'
import serviceChannelLaw from '../components/channel/module-channel-Law'

import serviceChannelInternational from '../components/channel/module-channel-International'

import serviceChannelEnterprise from '../components/channel/module-channel-enterprise'
import serviceChannelDesign from '../components/channel/module-channel-design'

import serviceChannelCopyright from '../components/channel/module-channel-copyright'

import serviceAboutus from '../components/about/module-aboutus'
import serviceContactUs from '../components/about/module-contactUs'
import serviceOrganization from '../components/about/module-organization'

import serviceXrNotes from '../components/about/module-xrNotes'

import serviceNews from '../components/channel/module-news'
import serviceNewsDetail from '../components/channel/module-newsDetail'

import serviceSeoM from '../components/channel/module-seoM'
import serviceSeo from '../components/channel/module-seo'
import serviceSearch from '../components/search/module-search'

import serviceDetail from '../components/goodsDetail/module-detail'
import {postFn} from '../static/js/util.js'
// import vuexAlong from 'vuex-along'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            service,   //首页
            serviceChannel, //频道商标页
            serviceChannelPatent, //频道专利页
            serviceChannelLaw, //频道法律页
            serviceChannelInternational, //频道国际页
            serviceChannelEnterprise, //频道企业页
            serviceChannelDesign, //频道设计页
            serviceChannelCopyright, //频道专利页
            serviceAboutus, //关于我们
            serviceContactUs, //联系我们
            serviceOrganization, //合作机构
            serviceXrNotes, //细软事记
            serviceNews, //新闻
            serviceNewsDetail, // 新闻详情页
            serviceSeoM, //一级栏目页
            serviceSeo, // 二级栏目页
            serviceSearch,//搜索结果页
            serviceDetail, //商品详情页
        },
        // plugins: [vuexAlong],
        state: {
            userInfo: '',
            cateList: [],
            // product: null,
            // newsList: [],
            current_page: 0, // 当前页
            last_page: 0, // 总页数
            data: null, // 当前页的数据列表
            cartNum: 0,
            isLogin: false,
            msgNum: 0, //消息数量
        },
        mutations: {
            commit_userInfo(state, opt) {
                state.userInfo = opt;
            },
            commit_category(state, list) {
                state.cateList = list;
            },
            // commit_product(state, list) {
            //     state.product = list;
            // },
            // commit_news(state, list) {
            //     state.newsList = list;
            // },
            jumpHandle(state, num) { // 跳到指定页面
                state.current_page = num;
            },
            changeLastPage(state, last_page) { // 总页数
                state.last_page = last_page;
            },
            changeData(state, data) {
                state.data = data;
            },
            getNum(state, num) {
                state.cartNum = num //购物车数量 
            },
            commit_isLogin(state, opt) {
                state.isLogin = opt; //是否登录
            },
            commit_msgNum(state, opt) {
                state.msgNum = opt; //是否登录
            }
        },
        actions: {
            update_userInfo(store, userinfo) {
                store.commit('commit_userInfo', userinfo)
            },
            getServiceCate({ commit }) {
                return new Promise((resolve, project) => {
                    postFn('/product/category/list', '', function(res) {
                        if (res.data.code == 200) {
                            var list = res.data.data;
                            resolve();
                            commit('commit_category', list);
                        }
                    });
                })
            },
            // getProductList(store, idStr) {
            //     return new Promise((resolve, project) => {
            //         postFn('/product/product/infos', { 'product_ids': idStr }, function(res) {
            //             if (res.data.code == 200) {
            //                 var list = res.data.data;
            //                 resolve();
            //                 store.commit('commit_product', list)
            //             }
            //         });
            //     });
            // },
            // getNewsList(store, params) {
            //     return new Promise((resolve, project) => {
            //         postFn('/content/article/getShortList', params, function(res) {
            //             if (res.data.code == 200) {
            //                 var list = res.data.data;
            //                 resolve();
            //                 store.commit('commit_news', list)
            //             }
            //         });
            //     });
            // }
            getLastPage(context, last_page) { // 获取总页码
                context.commit("changeLastPage", last_page);
            },
            jumpAction(context, payload) { //跳转到某页操作
                context.commit("jumpHandle", payload.page);
            },
            update_num(store, num) {
                store.commit('getNum', num) //购物车数量 
            },
            update_isLogin(store, isLogin) {
                store.commit('commit_isLogin', isLogin)
            },
            update_msgNum(store, msgNum) {
                store.commit('commit_msgNum', msgNum)
            },
        }
    })
}
// vuexAlong.onlySession(true);
