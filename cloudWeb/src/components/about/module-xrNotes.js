import {
    postFn
} from '../../static/js/util.js'

export const GET_XRNOTESLIST = 'GET_XRNOTESLIST'

export const GET_XRNOTESYEARLIST = 'GET_XRNOTESYEARLIST'

const serviceXrNotes = {
    state: {
        xrNotesList:[],
        xrNotesYearList: [],
    },
    mutations: {
        commit_xrNotesList(state, list) {
            state.xrNotesList = list;
        },
        commit_xrNotesYearList(state, list) {
            state.xrNotesYearList = list;
        },
    },
    actions: {
        [GET_XRNOTESLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/events/allevent', '', function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_xrNotesList', res.data.data);
                    }
                });
            })
        },
        [GET_XRNOTESYEARLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/about/events/allevent', '', function (res) {
                    if (res.data.code == 200) {
                        var yearList = [],
                            list = [];
                        list = res.data.data;
                        for (var i = 0, len = list.length; i < len; i++) {
                            yearList.push(list[i].node)
                        }
                        resolve();
                        commit('commit_xrNotesYearList', yearList);
                    }
                });
            })
        },
    }
}
export default serviceXrNotes;