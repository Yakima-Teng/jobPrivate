import {
    postFn
} from '../../static/js/util.js'

export const GET_BASELIST = 'GET_BASELIST' // 资质

export const GET_FLATLIST = 'GET_FLATLIST' // 工商
export const GET_BRANDLIST = 'GET_BRANDLIST' // 高新
export const GET_WEBLIST = 'GET_WEBLIST' // 知识产权评估
export const GET_DESIGNSEOLIST = 'GET_DESIGNSEOLIST' // 企业seo列表
export const GET_BASENAME = 'GET_BASENAME' // 资质名字
export const GET_FLATNAME = 'GET_FLATNAME' // 工商名字
export const GET_BRANDNAME = 'GET_BRANDNAME' // 高新名字
export const GET_WEBNAME = 'GET_WEBNAME' // 知识产权评估名字
const serviceChannelDesign = {
    state: {
        baseList: [],
        flatList: [],
        brandList: [],
        webList: [],
        designSeoList: [],
        baseName: '',
        flatName: '',
        brandName: '',
        webName: ''
    },
    mutations: {
        commit_baseList(state, list) {
            state.baseList = list;
        },
        commit_flatList(state, list) {
            state.flatList = list;
        },
        commit_brandList(state, list) {
            state.brandList = list;
        },
        commit_webList(state, list) {
            state.webList = list;
        },
        commit_designSeoList(state, list) {
            state.designSeoList = list;
        },
        commit_baseName(state, list) {
            state.baseName = list;
        },
        commit_flatName(state, list) {
            state.flatName = list;
        },
        commit_brandName(state, list) {
            state.brandName = list;
        },
        commit_webName(state, list) {
            state.webName = list;
        },
    },
    actions: {
        [GET_BASELIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['34', '81', '82', '83', '84'];
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
                        commit('commit_baseList', list);
                    }
                });
            })
        },
        [GET_FLATLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['85', '86'];
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
                        commit('commit_flatList', list);
                    }
                });
            })
        },
        [GET_BRANDLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['31', '78', '79', '80', '41'];
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
                        commit('commit_brandList', list);
                    }
                });
            })
        },
        [GET_WEBLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['87', '88', '89', '90', '91'];
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
                        commit('commit_webList', list);
                    }
                });
            })
        },
        [GET_DESIGNSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                    'columnUrl': 'sjfw'
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
                                            commit('commit_designSeoList', seoList);
                                        }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_BASENAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                    'cat_id': 189
                }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_baseName', res.data.data.cat_name);
                    }
                });
            })
        },
         [GET_FLATNAME]({
             commit
         }) {
             return new Promise((resolve, project) => {
                 postFn('/product/category/info', {
                     'cat_id': 190
                 }, function (res) {
                     if (res.data.code == 200) {
                         resolve();
                         commit('commit_flatName', res.data.data.cat_name);
                     }
                 });
             })
         },
        [GET_BRANDNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 188
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_brandName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_WEBNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 191
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_webName', res.data.data.cat_name);
                    }
                });
            })
        },
    }
}
export default serviceChannelDesign;