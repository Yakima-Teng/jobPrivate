import {
    postFn
} from '../../static/js/util.js'

export const GET_NEWSDETAILARTICLE = 'GET_NEWSDETAILARTICLE'        //新闻详情页数据

export const GET_NEWSSEODETAILARTICLE = 'GET_NEWSSEODETAILARTICLE'  //seo详情页数据

export const GET_NEWSDETAILTITLE = 'GET_NEWSDETAILTITLE' //获取详情页tdk

const serviceNewsDetail = {
    state: {
        newsArticle: [],
        newsSeoArticle: [],
        newsDetailtitle:'',
        newsDetailtitledescription: '',
        newsDetailtitlekeywords: '',
        newDetailArticle:'',
        newDetailNav:[],
    },
    mutations: {
        commit_newsArticle(state, list) {
            state.newsArticle = list;
        },
        commit_newsSeoArticle(state, list) {
            state.newsSeoArticle = list;
        },
        commit_newsDetailtitle(state, list) {
            state.newsDetailtitle = list;
        },
        commit_newsDetailtitledescription(state, list) {
            state.newsDetailtitledescription = list;
        },
        commit_newsDetailtitlekeywords(state, list) {
            state.newsDetailtitlekeywords = list;
        },
        commit_newDetailArticle(state, list) {
            state.newDetailArticle = list;
        },
        commit_newDetailNav(state, list) {
            state.newDetailNav = list;
        },
    },
    actions: {
        [GET_NEWSDETAILARTICLE]({
            commit
        }, data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_newsArticle', data);
            })
        },
        [GET_NEWSSEODETAILARTICLE]({
            commit
        }, data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_newsSeoArticle', data);
            })
        },
        [GET_NEWSDETAILTITLE]({
            commit
        }, url) {
            return new Promise((resolve, project) => {
                var type,dataUrl;
                if (url.path.indexOf('news')!=-1){
                    dataUrl = '/content/article/index';
                    type = 'news'
                }else{
                    dataUrl = '/content/seoarticle/index';
                     type = 'seo'
                }
                postFn(dataUrl, {
                            'id': url.params.id
                        }, function (res) {   
                    if (res.data.code == 200) {
                        var article = res.data.data;
                        commit('commit_newDetailArticle', article);
                        let title = article.title + '-创新科技服务云平台';
                        commit('commit_newsDetailtitle', title);
                        // _this.$store.dispatch(GET_NEWSDETAILTITLE,title)
                        // _this.description = article.desc;
                        commit('commit_newsDetailtitledescription', article.desc);
                        // _this.$store.dispatch(GET_NEWSDETAILDESCRIPTION,article.desc)
                        commit('commit_newsDetailtitlekeywords', article.keywords);
                        // _this.keywords = article.keywords;
                        // _this.$store.dispatch(GET_NEWSDETAILKEYWORDS,article.keywords)
                        // _this.config.image = 'http://o3new-cdn1.gbicdn.com/UserWeb/uploads/admin/content/5/b06fa26bde4f934f52ca43efb6492d35.png';
                        var nav = article.nav;
                        if (nav.length) {
                            nav.push({ 'name_cn': article.title });
                            // _this.nav = nav;
                            commit('commit_newDetailNav', nav);
                        }
                        if (type == 'news') {
                            // _this.$store.dispatch(GET_NEWSDETAILARTICLE, article);
                            commit('commit_newsArticle', article);
                        } else {
                            // _this.$store.dispatch(GET_NEWSSEODETAILARTICLE, article);
                            commit('commit_newsSeoArticle', article);
                        }
                        resolve();
                    }
                });
                
            })
        },
        
    }
}
export default serviceNewsDetail;