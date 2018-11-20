export const SELECT_LIST = 'SELECT_LIST'
export const SELECT_SIZE = 'SELECT_SIZE'



const memberPatent = {
    state: {
        selectSize: 0,
        selectList: [],
    },
    getters: {},
    mutations: {
        commit_select_size(state, size) {
            state.selectSize = size;
        },
        commit_select_list(state, list) {
            state.selectList = list;
        },
    },
    actions: {
        [SELECT_LIST]({ commit }, list) {
            commit('commit_select_list', list);
        },
        [SELECT_SIZE]({ commit }, size) {
            commit('commit_select_size', size);
        }
    }
}
export default memberPatent;