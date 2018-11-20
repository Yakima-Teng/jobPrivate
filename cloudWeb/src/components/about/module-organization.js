import {
    postFn
} from '../../static/js/util.js'

export const GET_ORGANIZATIONLIST = 'GET_ORGANIZATIONLIST' 

export const GET_ORGANIZATIONWLIST = 'GET_ORGANIZATIONWLIST'

const serviceOrganization = {
    state: {
        organizationList:[],
        organizationWList:[],
    },
    mutations: {
        commit_organizationList(state, list) {
            state.organizationList = list;
        },
        commit_organizationWList(state, list) {
            state.organizationWList = list;
        },
    },
    actions: {
        [GET_ORGANIZATIONLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/cooperates', '', function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_organizationList', res.data.data.list);
                    }
                });
            })
        },
        [GET_ORGANIZATIONWLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/cooperates', '', function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_organizationWList', res.data.data.beyond);
                    }
                });
            })
        },
    }
}
export default serviceOrganization;