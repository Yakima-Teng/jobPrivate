import axios from 'axios'
import { api } from '@/assets/js/util.js'

export const GET_INDEX = 'GET_INDEX'
export const GET_INDEX_NEEDS_LIST = 'GET_INDEX_NEEDS_LIST'
export const GET_LINK = 'GET_LINK'

const Api = api();

const index = {
    state: {
        needs: null,
        patent: null,
        userStatic: null,
        sortList: null,
        newsList: null,
        linkList: []
    },
    getters: {

    },
    mutations: {
        commit_needs(state, list) {
            state.needs = list;
        },
        commit_patent(state, list) {
            state.patent = list;
        },
        commit_userStatic(state, list) {
            state.userStatic = list;
        },
        commit_sort(state, list) {
            state.sortList = list;
        },
        commit_news(state, list) {
            state.newsList = list;
        },
        commit_link(state, list) {
            state.linkList = list;
        }
    },
    actions: {
        [GET_INDEX]({ commit }) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                axios.all([Api.get('/needs?page_size=5&p=1&token=' + token), Api.get('/patent?page_size=10&p=1&token=' + token), Api.get('/index/user_static?token=' + token), Api.get('/news/type'), Api.get('/news?page_size=4&p=1')]).then(axios.spread(function(needs, patent, userStatic, sortList, newsList) {
                    // 首页需求列表
                    if (needs.data.code == 200) {
                        commit("jumpHandle", 1);
                        commit('commit_needs', needs.data.needs);
                    }
                    // 首页专利列表
                    if (patent.data.code == 200) {
                        delete patent.data.code;
                        commit('commit_patent', patent.data);
                    }
                    // 首页用户统计信息
                    if (userStatic.data.code == 200) {
                        delete userStatic.data.code;
                        commit('commit_userStatic', userStatic.data);
                    }
                    // 省份
                    if (sortList.data.code == 200) {
                        delete sortList.data.code;
                        commit('commit_sort', sortList.data);
                    }
                    // 最新政策
                    if (newsList.data.code == 200) {
                        delete newsList.data.code;
                        commit('commit_news', newsList.data);
                    }
                    resolve();
                }));
            });
        },
        [GET_LINK]({ commit }) {
            return new Promise((resolve, project) => {
                Api.get('/index/link').then(function(res) {
                    if (res.data.code == 200) {
                        commit('commit_link', res.data.list);
                        resolve();
                    }
                });
            });
        },
        [GET_INDEX_NEEDS_LIST]({ commit }, payload) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&p=' + payload.page + '&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_needs', res.data.needs);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.needs.totalPage);
                        resolve();
                    }
                });
            });
        },
    }
}
export default index;