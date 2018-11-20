import {
    postFn
} from '../../static/js/util.js'

export const GET_REGISTLIST = 'GET_REGISTLIST'  // 商标注册

export const GET_CHANGELIST = 'GET_CHANGELIST' // 商标变更
export const GET_REPLYLIST = 'GET_REPLYLIST' // 商标答辩
export const GET_REVIEWLIST = 'GET_REVIEWLIST' // 商标复审

export const GET_OTHERLIST = 'GET_OTHERLIST' // 商标其他
export const GET_SEOLIST = 'GET_PATENT_NEWS' // 商标seo列表
export const GET_REGISTNAME = 'GET_REGISTNAME' // 商标注册名字
export const GET_CHANGENAME = 'GET_CHANGENAME' // 商标变更名字
export const GET_REPLYNAME = 'GET_REPLYNAME' // 商标答辩名字
export const GET_REVIEWNAME = 'GET_REVIEWNAME' // 商标复审名字
export const GET_OTHERNAME = 'GET_OTHERNAME' // 商标其他名字


const serviceChannel = {
    state: {
        registList: [],
        changeList: [],
        replyList: [],
        reviewList: [],
        otherList: [],
        seoList: [],
        registName: '',
        changeName: '',
        replyName:'',
        reviewName: '',
        otherName:''
    },
    mutations: {
        commit_registList(state, list) {
            state.registList = list;
        },
        commit_changeList(state, list) {
            state.changeList = list;
        },
        commit_replyList(state, list) {
            state.replyList = list;
        },
        commit_reviewList(state, list) {
            state.reviewList = list;
        },
        commit_otherList(state, list) {
            state.otherList = list;
        },
        commit_seoList(state, list) {
            state.seoList = list;
        },
        commit_registName(state, list) {
            state.registName = list;
        },
        commit_changeName(state, list) {
            state.changeName = list;
        },
        commit_replyName(state, list) {
            state.replyName = list;
        },
        commit_reviewName(state, list) {
            state.reviewName = list;
        },
        commit_otherName(state, list) {
            state.otherName = list;
        },
    },
    actions: {
        [GET_REGISTLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['27', '36', '35', '106', '107'];
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
                        commit('commit_registList', list);
                    }
                });
            })
        },
        [GET_CHANGELIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['50', '108']
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
                        commit('commit_changeList', list);
                    }
                });
            })
        },
        [GET_REPLYLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['109', '110', '111', '112', '113'];
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
                        commit('commit_replyList', list);
                    }
                });
            })
        },
        [GET_REVIEWLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['48', '114', '115', '116'];
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
                        commit('commit_reviewList', list);
                    }
                });
            })
        },
        [GET_OTHERLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                let IdArr = ['117', '49', '118', '119', '120'];
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
                        commit('commit_otherList', list);
                    }
                });
            })
        },
        [GET_SEOLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                var seoList = [];
                postFn('/content/seoarticlecolumn/index', {'columnUrl': 'sbfw'}, function (res) {
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
                                             commit('commit_seoList', seoList);
                                         }
                                    }
                                });
                            }
                        });
                        
                    }
                });
            })
        },
        [GET_REGISTNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 176
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_registName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_CHANGENAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 180
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_changeName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_REPLYNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 179
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_replyName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_REVIEWNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 178
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_reviewName', res.data.data.cat_name);
                    }
                });
            })
        },
        [GET_OTHERNAME]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/product/category/info', {
                            'cat_id': 177
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_otherName', res.data.data.cat_name);
                    }
                });
            })
        }
    }
}
export default serviceChannel;