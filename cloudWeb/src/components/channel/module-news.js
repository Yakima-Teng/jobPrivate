import {
    postFn
} from '../../static/js/util.js'

export const GET_NEWSTABLIST = 'GET_NEWSTABLIST' //  新闻栏目列表

export const GET_NEWSNEWSLIST = 'GET_NEWSNEWSLIST' // 新闻栏目内容

export const GET_NEWSRECOMNEWS = 'GET_NEWSRECOMNEWS' // 推荐文章

export const GET_NEWSHOTNEWS = 'GET_NEWSHOTNEWS' // 热门文章

const serviceNews = {
    state: {
        newsTabList:[],
        newsNewsList: [],
        recomNews:[],
        hotNews:[],
    },
    mutations: {
        commit_newsTabList(state, list) {
            state.newsTabList = list;
        },
        commit_newsNewsList(state, list) {
            state.newsNewsList = list;
        },
        commit_recomNews(state, list) {
            state.recomNews = list;
        },
        commit_hotNews(state, list) {
            state.hotNews = list;
        },
    },
    actions: {
        [GET_NEWSTABLIST]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/articlecolumn/index', '', function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_newsTabList', res.data.data);
                    }
                });
            })
        },
        [GET_NEWSNEWSLIST]({
            commit
        },page) {
            return new Promise((resolve, project) => {
                postFn('/content/article/GetArticlelistByColumnid', {'page':page}, function (res) {
                    if (res.data.code == 200) {
                        var newsObj = res.data.data;
                        resolve();
                        commit('commit_newsNewsList', newsObj);
                    }
                });
            })
        },
        [GET_NEWSRECOMNEWS]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', {
                            'is_heat': 1,
                            'showNum': 10
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_recomNews', res.data.data);
                    }
                });
            })
        },
        [GET_NEWSHOTNEWS]({
            commit
        }) {
            return new Promise((resolve, project) => {
                postFn('/content/article/getShortList', {
                            'is_click': 1,
                            'showNum': 10
                        }, function (res) {
                    if (res.data.code == 200) {
                        resolve();
                        commit('commit_hotNews', res.data.data);
                    }
                });
            })
        },
    }
}
export default serviceNews;