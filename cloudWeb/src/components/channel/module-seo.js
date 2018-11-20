import {
    postFn
} from '../../static/js/util.js'

export const GET_SEONEWLIST = 'GET_SEONEWLIST'      //二级栏目 list
export const GET_SEONEWTITLE = 'GET_SEONEWTITLE'   //二级栏目 tdk

export const GET_SEONEWDATA = 'GET_SEONEWDATA'  //二级栏目 数据
const serviceSeo = {
    state: {
        seoNewsList: [],
        seoNewTitle:'',
        seoNewDescription:'',
        seoNewKeywords:'',
        seoNewLevelOne:'',
        seoNewlevelTwo:'',
        seoNewObj:'',
    },
    mutations: {
        commit_seoNewsList(state, list) {
            state.seoNewsList = list;
        },
        commit_seoNewTitle(state, list) {
            state.seoNewTitle = list;
        },
        commit_seoNewDescription(state, list) {
            state.seoNewDescription = list;
        },
        commit_seoNewKeywords(state, list) {
            state.seoNewKeywords = list;
        },
        commit_seoNewLevelOne(state, list) {
            state.seoNewLevelOne = list;
        },
        commit_seoNewlevelTwo(state, list) {
            state.seoNewlevelTwo = list;
        },
        commit_seoNewObj(state, list) {
            state.seoNewObj = list;
        },
    },
    actions: {
        [GET_SEONEWLIST]({
            commit
        }, data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_seoNewsList', data);
            })
        },
        [GET_SEONEWTITLE]({
            commit
        }, url) {
            return new Promise((resolve, project) => {
                var dataUrl,type,params,levelOne,levelTwo;
                if (url.path.indexOf('news') != -1) {
                    dataUrl = '/content/articlecolumn/index';
                    type = 'news'
                    params = '';
                } else {
                    dataUrl = '/content/seoarticlecolumn/index';
                    type = 'seo'
                    params = {'columnUrl':url.path.split('/')[1]};
                }
                postFn(dataUrl, params, function (res) {
                    if (res.data.code == 200) {
                        if (type == 'seo') {
                            var list = res.data.data[0]; // 从一级栏目开始
                            // _this.levelOne = list.name_cn;
                            levelOne = list.name_cn;
                            commit('commit_seoNewLevelOne', levelOne);
                            var columnList = list.next_column;
                            var TwoList = [];
                            columnList.forEach(function (element) {
                                TwoList.push(element.name_cn);
                                if (element.url == url.params.tid) {
                                    // _this.levelTwo = element.name_cn;
                                    levelTwo = element.name_cn;
                                    commit('commit_seoNewlevelTwo', levelTwo);
                                }
                            });
                            let title = levelTwo + '_' + levelOne + '-创新科技服务云平台';
                            commit('commit_seoNewTitle', title);
                            let description = '创新科技服务云平台为您提供专业的' +levelOne + ',办理' + TwoList.toString().replace(/,/g, '') + '就找创新科技服务云平台.';
                            commit('commit_seoNewDescription', description);
                            let keywords = TwoList.toString() + ',创新科技服务云平台';
                            commit('commit_seoNewKeywords', keywords);
                        } else {
                            var list = res.data.data;
                            var tid = url.params.tid
                            if (tid == 'zcgl') { // 知产攻略
                                let title = '商标攻略_专利攻略_版权攻略_知识产权攻略-创新科技服务云平台';
                                commit('commit_seoNewTitle', title);
                                let description = '创新科技服务云平台新闻资讯频道为您提供商标攻略,专利攻略,版权攻略,知识产权攻略,并全面介绍商标注册,版权登记,专利申请及科技服务等相关专业知识，为创新创业者提供最及时最专业的资讯信息.';
                                commit('commit_seoNewDescription', description);
                                let keywords = '商标攻略,专利攻略,版权攻略,知识产权攻略,创新科技服务云平台';
                                commit('commit_seoNewKeywords', keywords);
                            } else if (tid == 'hlhw') { // 行里行外
                                let title = '商标新闻_专利新闻_版权新闻_知识产权新闻-创新科技服务云平台';
                                commit('commit_seoNewTitle', title);
                                let description = '创新科技服务云平台新闻资讯频道为您提供网络热点知识产权事件行业前沿信息等资讯服务,为创新创业者提供最及时最专业的资讯信息,实时推送商标新闻,专利新闻,版权新闻,知识产权新闻等资讯.';
                                commit('commit_seoNewDescription', description);
                                let keywords = '商标新闻,专利新闻,版权新闻,知识产权新闻,创新科技服务云平台';
                                commit('commit_seoNewKeywords', keywords);
                            } else if (tid == 'zcqy') { // 政策前沿
                                let title = '政策前沿_新闻资讯_知识产权资讯-创新科技服务云平台';
                                commit('commit_seoNewTitle', title);
                                let description = '创新科技服务云平台新闻资讯频道实时发布知识产权新闻资讯,商标版权专利等知识产权政策动态,为您提供最全面的政策解读.';
                                commit('commit_seoNewDescription', description)
                                let keywords = '政策前沿,新闻资讯,知识产权资讯,商标资讯,专利资讯';
                                commit('commit_seoNewKeywords', keywords);
                            } else if (tid == 'xrdt') { // 细软动态
                                let title = '细软动态_细软资讯_知识产权资讯-创新科技服务云平台';
                                commit('commit_seoNewTitle', title);
                                let description = '创新科技服务云平台新闻资讯频道为您提供细软动态,细软资讯,商标版权专利等知识产权资讯服务,为创新创业者提供最及时最专业的资讯信息.';
                                commit('commit_seoNewDescription', description)
                                let keywords = '细软动态,细软资讯,知识产权资讯,商标资讯,专利资讯';
                                commit('commit_seoNewKeywords', keywords);
                            }
                            list.forEach(function (element) {
                                if (element.url == tid) {
                                    // _this.levelTwo = element.name_cn;
                                    console.log(element.name_cn, 'element.name_cn')
                                    commit('commit_seoNewlevelTwo', element.name_cn);
                                }
                            });
                        }
                        resolve();
                    }
                });
                
            })
        },
        [GET_SEONEWDATA]({
            commit
        }, url) {
            return new Promise((resolve, project) => {
                var  listUrl;
                if (url.path.indexOf('news') != -1) {
                    listUrl = '/content/article/GetArticlelistByColumnid';
                    
                } else {
                    listUrl = '/content/seoarticle/GetArticlelistByColumnid';
                }
                postFn(listUrl, {
                    'columnUrl': url.params.tid
                }, function (result) {
                    if (result.data.code == 200) {
                        var newsObj = result.data.data;
                        var newsList = newsObj.data;
                        // _this.newsList = newsList;
                        commit('commit_seoNewObj', newsObj);
                        commit('commit_seoNewsList', newsList);
                        resolve();
                    }
                });
            })
        },
    }
}
export default serviceSeo;