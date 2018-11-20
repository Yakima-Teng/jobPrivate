import axios from 'axios'

import { api } from '@/assets/js/util.js'

export const GET_PATENT = 'GET_PATENT'
export const GET_PATENT_LIST = 'GET_PATENT_LIST'
export const GET_NEEDS_LIST = 'GET_NEEDS_LIST'
export const GET_PATENT_DETAIL = 'GET_PATENT_DETAIL'
export const GET_MORE_PATENT_LIST = 'GET_MORE_PATENT_LIST'
export const GET_MORE_NEEDS_LIST = 'GET_MORE_NEEDS_LIST'

const Api = api();

const patent = {
    state: {
        needs: null,
        patent: null,
        detailInfo: null
    },
    getters: {},
    mutations: {
        commit_needs(state, list) {
            state.needs = list;
        },
        commit_patent(state, list) {
            state.patent = list;
        },
        commit_detail(state, info) {
            state.detailInfo = info;
        },
        commit_more_patent(state, list) {
            if (state.patent == null) {
                state.patent = list;
            } else {
                var oldObj = state.patent;
                var oldP = oldObj.patent;
                var oldC = oldObj.collect;
                var oldList = oldP.list;
                var newList = oldList.concat(list.patent.list);
                var newPage = list.patent.page;
                var newP = {
                    'list': newList,
                    'page': newPage,
                    'total': list.patent.total,
                    'totalPage': list.patent.totalPage
                }
                var newC = oldC.concat(list.collect);
                var newObj = {
                    'patent': newP,
                    'collect': newC
                }
                state.patent = newObj;
            }
        }
    },
    actions: {
        [GET_PATENT]({ commit }, url) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                axios.all([Api.get('/needs?page_size=5&token=' + token), Api.get(url + '&token=' + token)]).then(axios.spread(function(needs, patent) {
                    // 需求列表
                    if (needs.data.code == 200) {
                        commit('commit_needs', needs.data.needs);
                    }
                    // 专利列表
                    if (patent.data.code == 200) {
                        delete patent.data.code;
                        commit('commit_patent', patent.data);
                        commit("jumpHandle", patent.data.patent.page);
                        commit("changeLastPage", patent.data.patent.totalPage);
                    }
                    resolve();
                }));
            });
        },
        [GET_PATENT_LIST]({ commit }, payload) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&p=' + payload.page + '&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_patent', res.data);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.patent.totalPage);
                        resolve();
                    }
                });
            });
        },
        [GET_NEEDS_LIST]({ commit }, payload) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_needs', res.data);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.needs.totalPage);
                        resolve();
                    }
                });
            });
        },
        [GET_PATENT_DETAIL]({ commit }, id) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get('/patent/detail?id=' + id + '&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_detail', res.data);
                        resolve();
                    }
                });
            });
        },
        [GET_MORE_PATENT_LIST]({ commit }, payload) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&p=' + payload.page + '&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_more_patent', res.data);
                        commit("jumpHandle", payload.page);
                        resolve();
                    }
                });
            });
        },
        [GET_MORE_NEEDS_LIST]({ commit }, payload) {
            let token = '';
            if (this.state.token !== undefined) {
                token = this.state.token;
            }
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&page_size=' + payload.page_size + '&p=1&token=' + token).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_needs', res.data);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.needs.totalPage);
                        resolve();
                    }
                });
            });
        }
    }
}
export default patent;