import { postFn } from '../../static/js/util.js'

export const GET_CONVENIENT = 'GET_CONVENIENT' // 首页便捷服务

export const GET_BRAND_CONVENIENT = 'GET_BRAND_CONVENIENT' // 首页商标服务
export const GET_BRAND_NEWS = 'GET_BRAND_NEWS' // 首页商标热点新闻
export const GET_BRAND_SEO = 'GET_BRAND_SEO' // 首页商标锦囊

export const GET_PATENT_CONVENIENT = 'GET_PATENT_CONVENIENT' // 首页专利服务
export const GET_PATENT_NEWS = 'GET_PATENT_NEWS' // 首页专利热点新闻
export const GET_PATENT_SEO = 'GET_PATENT_SEO' // 首页专利锦囊

export const GET_COPYRIGHT_CONVENIENT = 'GET_COPYRIGHT_CONVENIENT' // 首页版权服务
export const GET_COPYRIGHT_NEWS = 'GET_COPYRIGHT_NEWS' // 首页版权热点新闻
export const GET_COPYRIGHT_SEO = 'GET_COPYRIGHT_SEO' // 首页版权锦囊

const service = {
    state: {
        convenient: [],
        brandList: [],
        patentList: [],
        copyrightList: [],
        brandNews: [],
        brandSEO: [],
        patentNews: [],
        patentSEO: [],
        copyrightNews: [],
        copyrightSEO: []
    },
    getters: {
        convenientCount: state => state.convenient.length
    },
    mutations: {
        commit_convenient(state, list) {
            state.convenient = list;
        },
        commit_brandList(state, list) {
            state.brandList = list;
        },
        commit_patentList(state, list) {
            state.patentList = list;
        },
        commit_copyrightList(state, list) {
            state.copyrightList = list;
        },
        commit_brandNews(state, list) {
            state.brandNews = list;
        },
        commit_brandSEO(state, list) {
            state.brandSEO = list;
        },
        commit_patentNews(state, list) {
            state.patentNews = list;
        },
        commit_patentSEO(state, list) {
            state.patentSEO = list;
        },
        commit_copyrightNews(state, list) {
            state.copyrightNews = list;
        },
        commit_copyrightSEO(state, list) {
            state.copyrightSEO = list;
        },
    },
    actions: {
        [GET_CONVENIENT]({ commit }) {
            return new Promise((resolve, project) => {
                let IdArr = [36, 37, 29, 38, 28, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47];
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
                        commit('commit_convenient', list);
                    }
                });
            })
        },
        [GET_BRAND_CONVENIENT]({ commit }) {
            return new Promise((resolve, project) => {
                let IdArr = ['27', '35', '36'];
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
        [GET_PATENT_CONVENIENT]({ commit }) {
            return new Promise((resolve, project) => {
                let IdArr = ['37', '29', '38'];
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
        [GET_COPYRIGHT_CONVENIENT]({ commit }) {
            return new Promise((resolve, project) => {
                let IdArr = ['28', '30', '53'];
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
                        commit('commit_copyrightList', list);
                    }
                });
            })
        },
        [GET_BRAND_NEWS]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'content_type': 1, 'type': 1, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_brandNews', res.data.data);
                    }
                });
            })
        },
        [GET_BRAND_SEO]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'columnUrl': 'sbfw', 'type': 2, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_brandSEO', res.data.data);
                    }
                });
            })
        },
        [GET_PATENT_NEWS]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'content_type': 2, 'type': 1, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_patentNews', res.data.data);
                    }
                });
            })
        },
        [GET_PATENT_SEO]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'columnUrl': 'zlfw', 'type': 2, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_patentSEO', res.data.data);
                    }
                });
            })
        },
        [GET_COPYRIGHT_NEWS]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'content_type': 3, 'type': 1, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_copyrightNews', res.data.data);
                    }
                });
            })
        },
        [GET_COPYRIGHT_SEO]({ commit }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', { 'columnUrl': 'bqfw', 'type': 2, 'is_heat': 1 }, function(res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_copyrightSEO', res.data.data);
                    }
                });
            })
        }
    }
}
export default service;