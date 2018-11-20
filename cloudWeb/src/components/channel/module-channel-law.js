import {
    postFn
} from '../../static/js/util.js'

export const GET_LAWLIST = 'GET_LAWLIST' // 01

export const GET_LAW01LIST = 'GET_LAW01LIST' // 02
export const GET_lAW02LIST = 'GET_lAW02LIST' // 03
export const GET_LAWSEOLIST = 'GET_LAWSEOLIST' // 法律seo列表
export const GET_LAWTNAME = 'GET_LAWTNAME' // 知识产权民事侵权诉讼名字
export const GET_LAW01TNAME = 'GET_LAW01TNAME' // 法律文书制作名字
export const GET_LAW02TNAME = 'GET_LAW02TNAME' // 不正当竞争诉讼名字


const serviceChannelLaw = {
    state: {
        lawList: [],
        law01List: [],
        law02List: [],
        lawSeoList: [],
        lawName: '',
        law01Name: '',
        law02Name: '',
    },
    mutations: {
        commit_lawList(state, list) {
            state.lawList = list;
        },
        commit_law01List(state, list) {
            state.law01List = list;
        },
        commit_law02List(state, list) {
            state.law02List = list;
        },
        commit_lawSeoList(state, list) {
            state.lawSeoList = list;
        },
        commit_lawName(state, list) {
            state.lawName = list;
        },
        commit_law01Name(state, list) {
            state.law01Name = list;
        },
        commit_law02Name(state, list) {
            state.law02Name = list;
        },
    },
    actions: {
        [GET_LAWLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['43', '77', '44', '46', '45'];
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
                        commit('commit_lawList', list);
                    }
                });
            })
        },
        [GET_LAW01LIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['47', '74']
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
                        commit('commit_law01List', list);
                    }
                });
            })
        },
        [GET_lAW02LIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['75', '76'];
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
                        commit('commit_law02List', list);
                    }
                });
            })
        },
        [GET_LAWSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                            'columnUrl': 'flfw'
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
                                         if(seoList.length==columnFirst.length){
                                             resolve();
                                             commit('commit_lawSeoList', seoList);
                                         }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_LAWTNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 198
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_lawName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_LAW01TNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 192
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_law01Name', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_LAW02TNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 193
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_law02Name', res.data.data.cat_name);
                    }
                });
            })
        },
    }
}
export default serviceChannelLaw;