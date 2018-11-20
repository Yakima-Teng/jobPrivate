import {
    postFn
} from '../../static/js/util.js'

export const GET_COMPANYLIST = 'GET_COMPANYLIST' // 公司

export const GET_BRANDLIST = 'GET_BRANDLIST' // 商标
export const GET_PATENTLIST = 'GET_PATENTLIST' // 专利
export const GET_INTERNATIONALSEOLIST = 'GET_INTERNATIONALSEOLIST' // 国际seo列表
export const GET_COMPANYNAME = 'GET_COMPANYNAME' // 公司名字
export const GET_BRANDNAME = 'GET_BRANDNAME' // 商标名字
export const GET_PATENTNAME = 'GET_PATENTNAME' // 专利名字

const serviceChannelInternational = {
    state: {
        companyList: [],
        brandList: [],
        patentList: [],
        internationalSeoList: [],
        companyName: '',
        brandName: '',
        patentName: '',
    },
    mutations: {
        commit_companyList(state, list) {
            state.companyList = list;
        },
        commit_brandList(state, list) {
            state.brandList = list;
        },
        commit_patentList(state, list) {
            state.patentList = list;
        },
        commit_internationalSeoList(state, list) {
            state.internationalSeoList = list;
        },
        commit_companyName(state, list) {
            state.companyName = list;
        },
        commit_brandName(state, list) {
            state.brandName = list;
        },
        commit_patentName(state, list) {
            state.patentName = list;
        },
    },
    actions: {
        [GET_COMPANYLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['92', '93', '94', '95', '96'];
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
                        commit('commit_companyList', list);
                    }
                });
            })
        },
        [GET_BRANDLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['40', '97', '98', '99', '100'];
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
        [GET_PATENTLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['39', '101'];
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
                        commit('commit_patentList', list);
                    }
                });
            })
        },
        [GET_INTERNATIONALSEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {
                    'columnUrl': 'gjfw'
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
                                            commit('commit_internationalSeoList', seoList);
                                        }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_COMPANYNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                    'cat_id': 187
                }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_companyName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_BRANDNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 185
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_brandName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_PATENTNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 186
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_patentName', res.data.data.cat_name);
                    }
                });
            })
        },
    }
}
export default serviceChannelInternational;