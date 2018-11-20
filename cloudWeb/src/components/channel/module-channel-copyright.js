import {
    postFn
} from '../../static/js/util.js'

export const GET_SOFTLIST = 'GET_SOFTLIST' // 软件

export const GET_WORKSLIST = 'GET_WORKSLIST' // 作品
export const GET_COPYRIGHTSEOLIST = 'GET_DESIGNSEOLIST' // 版权seo列表
export const GET_SOFTNAME = 'GET_SOFTNAME' // 软件名字
export const GET_WORKSNAME = 'GET_WORKSNAME' // 作品名字

const serviceChannelCopyright = {
    state: {
        softList: [],
        worksList: [],
        copyrightSeoList: [],
        softName: '',
        worksName: '',
    },
    mutations: {
        commit_softList(state, list) {
            state.softList = list;
        },
        commit_worksList(state, list) {
            state.worksList = list;
        },
        commit_copyrightSeoList(state, list) {
            state.copyrightSeoList = list;
        },
        commit_softName(state, list) {
            state.softName = list;
        },
        commit_worksName(state, list) {
            state.worksName = list;
        },
    },
    actions: {
        [GET_SOFTLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['28', '56', '102', '55', '53'];
                postFn('/product/product/infos', { 'product_ids': IdArr.toString() }, function(res) {
                    if (res.data.code == 200) {
                        let list = [];
                        let dataList = res.data.data;
                        for (const key in dataList) {
                            if (dataList.hasOwnProperty(key)) {
                                list.push(dataList[key]);
                            }
                        }
                        resolve();
                        commit('commit_softList', list);
                    }
                });
            })
        },
        [GET_WORKSLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['30', '157', '158', '159', '160'];
                postFn('/product/product/infos', {
                    'product_ids': IdArr.toString()
                }, function (res) {
                    if (res.data.code == 200) {
                        let list = [];
                        let dataList = res.data.data;
                        for (const key in dataList) {
                            if (dataList.hasOwnProperty(key)) {
                                list.push(dataList[key]);
                            }
                        }
                        resolve();
                        commit('commit_worksList', list);
                    }
                });
            })
        },
        [GET_COPYRIGHTSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                    'columnUrl': 'bqfw'
                }, function (res) {
                    if (res.data.code == 200) {
                        var list = res.data.data[0]; // 从一级栏目开始
                        var columnFirst = list.next_column;
                        columnFirst != "" && columnFirst.forEach(function (element, index) {
                            if (index < 4) {
                                postFn('/content/article/getShortList', {
                                    'type': 2,
                                    'columnUrl': element.url
                                }, function (result) {
                                    if (result.data.code == 200) {
                                        element['list'] = result.data.data;
                                        seoList.push(element);
                                        if (seoList.length == columnFirst.length) {
                                            console.log(seoList,'⌛');
                                            resolve();
                                            commit('commit_copyrightSeoList', seoList);
                                            
                                        }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_SOFTNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                    'cat_id': 181
                }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_softName', res.data.data.cat_name);
                    }
                });
            })
        },
         [GET_WORKSNAME]({
             commit
         }) {
             return new Promise((resolve, project) => {
                 postFn('/product/category/info', {
                     'cat_id': 182
                 }, function (res) {
                     if (res.data.code == 200) {
                         resolve();
                         commit('commit_worksName', res.data.data.cat_name);
                     }
                 });
             })
         },
    }
}
export default serviceChannelCopyright;