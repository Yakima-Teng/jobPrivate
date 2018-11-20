import axios from 'axios'

import { api } from '@/assets/js/util.js'

export const GET_INIT_NEWS_LIST = 'GET_INIT_NEWS_LIST'
export const GET_SORT_LIST = 'GET_SORT_LIST'
export const GET_NEWS_LIST = 'GET_NEWS_LIST'
export const GET_NEWS_DETAIL = 'GET_NEWS_DETAIL'
export const GET_DETAIL = 'GET_DETAIL'

const Api = api();

const policy = {
    state: {
        sortList: null,
        newsList: null,
        detailInfo: null,
        patent: null
    },
    getters: {},
    mutations: {
        commit_sort(state, list) {
            state.sortList = list;
        },
        commit_news(state, list) {
            state.newsList = list;
        },
        commit_detail(state, detail) {
            state.detailInfo = detail;
        },
        commit_patent(state, patent) {
            state.patent = patent;
        }
    },
    actions: {
        [GET_INIT_NEWS_LIST]({ commit }, url) {
            return new Promise((resolve, project) => {
                axios.all([Api.get('/news/type'), Api.get(url)]).then(axios.spread(function(sorts, news) {
                    // 分类列表
                    if (sorts.data.code == 200) {
                        delete sorts.data.code;
                        commit('commit_sort', sorts.data);
                    }
                    // 新闻列表
                    if (news.data.code == 200) {
                        delete news.data.code;
                        commit('commit_news', news.data);
                        commit("jumpHandle", news.data.page);
                        commit("changeLastPage", news.data.totalPage);
                    }
                    resolve();
                }));
            });
        },
        [GET_NEWS_LIST]({ commit }, payload) { // 获取结果列表
            return new Promise((resolve, project) => {
                Api.get(payload.url).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_news', res.data);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.totalPage);
                        resolve();
                    }
                });
            });
        },
        [GET_NEWS_DETAIL]({ commit }, payload) { // 获取新闻详情
            return new Promise((resolve, project) => {
                axios.all([Api.get('/news/detail?id=' + payload.id), Api.get('/news?page_size=5&p=1&tid=' + payload.type), Api.get('/patent?page_size=3&p=1')]).then(axios.spread(function(detail, news, patent) {
                    if (detail.data.code == 200) {
                        delete detail.data.code;
                        commit('commit_detail', detail.data);
                    }
                    if (news.data.code == 200) {
                        delete news.data.code;
                        commit('commit_news', news.data);
                    }
                    if (patent.data.code == 200) {
                        delete patent.data.code;
                        commit('commit_patent', patent.data.patent);
                    }
                    resolve();
                }));
            });
        },
        [GET_DETAIL]({ commit }, id) { // 获取新闻详情
            return new Promise((resolve, project) => {
                Api.get('/news/detail?id=' + id).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_detail', res.data.detail);

                        resolve();
                    }
                });
            });
        }
    }
}
export default policy;