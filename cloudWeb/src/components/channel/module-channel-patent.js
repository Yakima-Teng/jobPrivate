import {
    postFn
} from '../../static/js/util.js'

export const GET_INVENTLIST = 'GET_INVENTLIST' // 发明

export const GET_PRACTICALLIST = 'GET_PRACTICALLIST' // 实用新型
export const GET_OUTWARDLIST = 'GET_OUTWARDLIST' // 外观
export const GET_PATENTSEOLIST = 'GET_PATENTSEOLIST' // 专利seo列表
export const GET_INVENTNAME = 'GET_INVENTNAME' // 发明名字
export const GET_PRACTICALNAME = 'GET_PRACTICALNAME' // 实用新型名字
export const GET_OUTWARDNAME = 'GET_OUTWARDNAME' // 外观名字

const serviceChannelPatent = {
    state: {
        inventList: [],
        practicalList: [],
        outwardList: [],
        patentSeoList: [],
        inventName: '',
        practicalName: '',
        outwardName: '',
    },
    mutations: {
        commit_inventList(state, list) {
            state.inventList = list;
        },
        commit_practicalList(state, list) {
            state.practicalList = list;
        },
        commit_outwardList(state, list) {
            state.outwardList = list;
        },
        commit_patentSeoList(state, list) {
            state.patentSeoList = list;
        },
        commit_inventName(state, list) {
            state.inventName = list;
        },
        commit_practicalName(state, list) {
            state.practicalName = list;
        },
        commit_outwardName(state, list) {
            state.outwardName= list;
        },
    },
    actions: {
        [GET_INVENTLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['52', '121', '51', '37'];
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
                        commit('commit_inventList', list);
                    }
                });
            })
        },
        [GET_PRACTICALLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['29', '122', '123', '124', '125'];
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
                        commit('commit_practicalList', list);
                    }
                });
            })
        },
        [GET_OUTWARDLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['38', '126', '127', '128', '129'];
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
                        commit('commit_outwardList', list);
                    }
                });
            })
        },
        [GET_PATENTSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                    'columnUrl': 'zlfw'
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
                                            resolve();
                                            commit('commit_patentSeoList', seoList);
                                        }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_INVENTNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                    'cat_id': 183
                }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_practicalName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_PRACTICALNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 156
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_practicalName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_OUTWARDNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 184
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_outwardName', res.data.data.cat_name);
                    }
                });
            })
        },
    }
}
export default serviceChannelPatent;