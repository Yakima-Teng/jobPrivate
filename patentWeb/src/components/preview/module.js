import { api } from '@/assets/js/util.js'

export const GET_CARD_INFO = 'GET_CARD_INFO'
export const GET_CARD_PATENT_LIST = 'GET_CARD_PATENT_LIST'
export const GET_MORE_CARD_PATENT_LIST = 'GET_MORE_CARD_PATENT_LIST'

const Api = api();

const card = {
    state: {
        cardInfo: null,
        patentObj: null
    },
    getters: {},
    mutations: {
        commit_card(state, info) {
            state.cardInfo = info;
        },
        commit_patentObj(state, list) {
            state.patentObj = list;
        },
        commit_more_patentObj(state, list) {
            if (state.patentObj == null) {
                state.patentObj = list;
            } else {
                var oldObj = state.patentObj;
                var oldList = oldObj.list;
                var newP = oldObj;
                if (list.list.length) {
                    var newList = oldList.concat(list.list);
                    var newPage = list.page;
                    var newP = {
                        'list': newList,
                        'page': newPage,
                        'total': list.total,
                        'totalPage': list.totalPage
                    }
                }
                state.patentObj = newP;
            }
        }
    },
    actions: {
        [GET_CARD_INFO]({ commit }, url) {
            return new Promise((resolve, project) => {
                Api.get(url).then((res) => {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_card', res.data.card);
                        commit('commit_patentObj', res.data.patent);
                        resolve();
                    }
                });
            });
        },
        [GET_CARD_PATENT_LIST]({ commit }, payload) {
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&p=' + payload.page).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_patentObj', res.data.patent);
                        commit("jumpHandle", payload.page);
                        commit("changeLastPage", res.data.patent.totalPage);
                        resolve();
                    }
                });
            });
        },
        [GET_MORE_CARD_PATENT_LIST]({ commit }, payload) {
            return new Promise((resolve, project) => {
                Api.get(payload.url + '&p=' + payload.page).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_more_patentObj', res.data.patent);
                        commit("jumpHandle", payload.page);
                        resolve();
                    }
                });
            });
        }
    }
}
export default card;