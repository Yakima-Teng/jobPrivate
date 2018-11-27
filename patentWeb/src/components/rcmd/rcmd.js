import axios from 'axios'

import { api } from '@/assets/js/util.js'
const Api = api();

export const GET_RCMD_DATA = 'GET_RCMD_DATA'

const rcmd = {
    state: {
        tableData: null,
        userData: null
    },
    getters: {},
    mutations: {
        commit_table(state, list) {
            state.tableData = list;
        },
        commit_user(state, list) {
            state.userData = list;
        },
    },
    actions: {
        [GET_RCMD_DATA]({ commit }, url) {
            return new Promise((resolve, reject) => {
                Api.get(url).then(function(res) {
                    if (res.data.code == 200) {
                        delete res.data.code;
                        commit('commit_table', res.data.rcmd);
                        commit('commit_user', res.data.user);
                        resolve();
                    }
                });
            });
        }
    }
}

export default rcmd;