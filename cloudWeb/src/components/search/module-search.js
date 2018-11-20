import {
    postFn
} from '../../static/js/util.js'

export const GET_SEARCHLIST = 'GET_SEARCHLIST' //搜索结果list

export const GET_SEARCHHOTNEWS = 'GET_SEARCHHOTNEWS' //搜索结果热门文章

export const GET_SEARCHDATA = 'GET_SEARCHDATA' //搜索结果热门文章

const serviceSearch = {
    state: {
        searchHotNews: [],
        searchList: [],
        dataInfo:'',
    },
    mutations: {
        commit_searchHotNews(state, list) {
            state.searchHotNews = list;
        },
        commit_searchList(state, list) {
            state.searchList = list;
        },
        commit_dataInfo(state, list) {
            state.dataInfo = list;
        },
    },
    actions: {
        [GET_SEARCHHOTNEWS]({
            commit
        }) {
            return new Promise((resolve, project) => {
                 postFn('/content/article/getShortList', {
                             'is_click': 1,
                             'showNum': 5
                         }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_searchHotNews', res.data.data);
                    }
                });
            })
        },
        [GET_SEARCHLIST]({
            commit
        },data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_searchList', data);
            })
        },
        [GET_SEARCHDATA]({
            commit
        },url) {
            return new Promise((resolve, project) => {
                var param = {};
                if (url.query.cat_id != undefined){
                    param['cat_id'] = url.query.cat_id; 
                } else if (url.query.keywords != undefined) {
                    param['keywords'] = url.query.keywords;
                }
                param['page'] = 1;
                postFn('/product/product/search',param, function (res) {
                    if (res.data.code == 200) {
                        var dataInfo = res.data.data;
                        // _this.list = dataInfo.data;
                        commit('commit_dataInfo', dataInfo);
                        commit('commit_searchList', dataInfo.data);
                        resolve();
                    }
                });
            })
        },
    }
}
export default serviceSearch;