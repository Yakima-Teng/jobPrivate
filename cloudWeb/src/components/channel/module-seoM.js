import {
    postFn
} from '../../static/js/util.js'

export const GET_SEOMCOLUMNFIRST = 'GET_SEOMCOLUMNFIRST' //一级栏目列表

export const GET_SEOMNEWSLIST = 'GET_SEOMNEWSLIST'  //一级栏目 list

export const GET_SEOMTITLE = 'GET_SEOMTITLE'  //一级栏目tdk
export const GET_SEOMDATA = 'GET_SEOMDATA'  //一级栏目数据
const serviceSeoM = {
    state: {
        seoMColumnFirst: [],
        seoMNewsList: [],
        seoMTitle:'',
        seoMDescription: '',
        seoMKeywords: '',
        seoMNewObj: '',
    },
    mutations: {
        commit_seoMColumnFirst(state, list) {
            state.seoMColumnFirst = list;
        },
        commit_seoMNewsList(state, list) {
            state.seoMNewsList = list;
        },
        commit_seoMTitle(state, list) {
            state.seoMTitle = list;
        },
        commit_seoMDescription(state, list) {
            state.seoMDescription = list;
        },
        commit_seoMKeywords(state, list) {
            state.seoMKeywords = list;
        },
        commit_seoMNewObj(state, list) {
            state.seoMNewObj = list;
        },
    },
    actions: {
        [GET_SEOMCOLUMNFIRST]({
            commit
        }, data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_seoMColumnFirst', data);
            })
        },
        [GET_SEOMNEWSLIST]({
            commit
        }, data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_seoMNewsList', data);
            })
        },
        [GET_SEOMTITLE]({
            commit
        }, url) {
            return new Promise((resolve, project) => {

                var cid = '';
                postFn('/content/seoarticlecolumn/index', { 'columnUrl': url.path.replace(/\//g, "")
                }, function (res) {
                    if (res.data.code == 200) {
                        var list = res.data.data[0]; // 从一级栏目开始
                        cid = list.id;
                        // _this.columnFirst = list.next_column;
                        commit('commit_seoMColumnFirst', list.next_column);
                        var columnFirst = [];
                        for (var i = 0; i < list.next_column.length; i++) {
                            columnFirst.push(list.next_column[i].name_cn)
                        }
                        let title = list.name_cn + '-创新科技服务云平台';
                        commit('commit_seoMTitle', title);
                        let description = '创新科技服务云平台为您提供专业的' + list.name_cn + ',办理' + columnFirst.toString().replace(/,/g, '') + '就找创新科技服务云平台.';
                        commit('commit_seoMDescription', description);
                        let keywords = columnFirst.toString() + ',创新科技服务云平台';
                        commit('commit_seoMKeywords', keywords);
                        resolve();
                    }
                });
                
            })
        },
        [GET_SEOMDATA]({
            commit
        }, url) {
            return new Promise((resolve, project) => {
                postFn('/content/seoarticle/GetArticlelistByColumnid', {
                    'columnUrl': url.path.replace(/\//g, ""),
                }, function (result) {
                    console.log()
                    if (result.data.code == 200) {
                        var newsObj = result.data.data;
                        var newsList = newsObj.data;
                        // _this.newsList = newsList;
                        commit('commit_seoMNewObj', newsObj);
                        commit('commit_seoMNewsList', newsList);
                    }
                });
                resolve();
                commit('commit_seoMNewsList', data);
            })
        },
    }
}
export default serviceSeoM;