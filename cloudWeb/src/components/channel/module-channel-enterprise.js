import {
    postFn
} from '../../static/js/util.js'

export const GET_ZIZHILIST = 'GET_ZIZHILIST' // 资质

export const GET_GSHLIST = 'GET_GSHLIST' // 工商
export const GET_GXRDLIST = 'GET_GXRDLIST' // 高新
export const GET_ZCPGLIST = 'GET_ZCPGLIST' // 知识产权评估
export const GET_ENTERPRISELSEOLIST = 'GET_ENTERPRISELSEOLIST' // 企业seo列表
export const GET_ZIZHINAME = 'GET_ZIZHINAME' // 资质名字
export const GET_GSHNAME = 'GET_GSHNAME' // 工商名字
export const GET_GXRDNAME = 'GET_GXRDNAME' // 高新名字
export const GET_ZCPGNAME = 'GET_ZCPGNAME' // 知识产权评估名字
const serviceChannelEnterprise = {
    state: {
        zizhiList: [],
        gshList: [],
        gxrdList: [],
        zcpgList:[],
        enterpriseSeoList: [],
        zizhiName: '',
        gshName: '',
        gxrdName: '',
        zcpgName:''
    },
    mutations: {
        commit_zizhiList(state, list) {
            state.zizhiList = list;
        },
        commit_gshList(state, list) {
            state.gshList = list;
        },
        commit_gxrdList(state, list) {
            state.gxrdList = list;
        },
        commit_zcpgList(state, list) {
            state.zcpgList = list;
        },
        commit_enterpriseSeoList(state, list) {
            state.enterpriseSeoList = list;
        },
        commit_zizhiName(state, list) {
            state.zizhiName = list;
        },
        commit_gshName(state, list) {
            state.gshName = list;
        },
        commit_gxrdName(state, list) {
            state.gxrdName = list;
        },
        commit_zcpgName(state, list) {
            state.zcpgName = list;
        },
    },
    actions: {
        [GET_ZIZHILIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['69', '70', '71', '72', '73'];
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
                        commit('commit_zizhiList', list);
                    }
                });
            })
        },
        [GET_GSHLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['62', '63', '64', '65', '66'];
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
                        commit('commit_gshList', list);
                    }
                });
            })
        },
        [GET_GXRDLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['59', '42', '60', '61'];
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
                        commit('commit_gxrdList', list);
                    }
                });
            })
        },
        [GET_ZCPGLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['67', '68'];
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
                        commit('commit_zcpgList', list);
                    }
                });
            })
        },
        [GET_ENTERPRISELSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                    'columnUrl': 'qyfw'
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
                                            commit('commit_enterpriseSeoList', seoList);
                                        }
                                    }
                                });
                            }
                        });
                      
                    }
                });
            })
        },
        [GET_ZIZHINAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                    'cat_id': 197
                }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_zizhiName', res.data.data.cat_name);
                    }
                });
            })
        },
         [GET_GSHNAME]({
             commit
         }) {
             return new Promise((resolve, project) => {
                 postFn('/product/category/info', {
                     'cat_id': 194
                 }, function (res) {
                     if (res.data.code == 200) {
                         resolve();
                         commit('commit_gshName', res.data.data.cat_name);
                     }
                 });
             })
         },
        [GET_GXRDNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 195
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_gxrdName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_ZCPGNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 196
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_zcpgName', res.data.data.cat_name);
                    }
                });
            })
        },
    }
}
export default serviceChannelEnterprise;