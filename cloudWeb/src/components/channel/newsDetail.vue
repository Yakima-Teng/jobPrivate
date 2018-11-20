<template>
<div class="page-detail">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="bg">
        <div class="w1190 container" v-if="article!=null">
            <crumb v-if="nav.length" :nav="nav" :url="firstUrl"></crumb>
            <div class="main clearfix">
                <div class="main-right">
                    <div class="my-news recom">
                        <h3 class="my-seris">推荐文章</h3>
                        <newsList type="hot" :heatNews="recomNews"></newsList>
                    </div>
                    <div class="my-news hot">
                        <h3 class="my-seris">热门文章</h3>
                        <newsList type="hot" :heatNews="hotNews"></newsList>
                    </div>
                </div>
                <div class="mina-left">
                    <div class="article" v-if="article != null">
                        <h2>{{article.title}}</h2>
                        <p class="info"><span class="author"><i class="icon icon-user"></i>作者：{{article.author}}</span><span class="time"><i class="icon icon-shizhong"></i>{{article.create_time}}</span><span class="scan"><i class="icon icon-scan"></i>{{article.click}}次浏览</span></p>
                        <div class="article-body" v-html="article.content"></div>
                        <div class="tag">
                            <div class="share">
                                <i class="icon icon-share"></i>
                                <share-part :config="config"></share-part>
                            </div>标签：
                            <span>{{article.tags}}</span>
                        </div>
                    </div>
                    <div class="page-num">
                        <div class="prev" v-if="article.front != null && article.front.title != undefined && article.front.title != ''">上一篇：<router-link @click.native="getData(article.front.id)"   v-if="firstUrl.indexOf('news') == -1" tag="a"  :to="{path: '/'+article.front.parent_columnUrl+'/'+article.front.id}">{{article.front.title}}</router-link><router-link @click.native="getData(article.front.id)" v-else tag="a"  :to="{path: '/news/'+article.front.columnUrl+'/'+article.front.id}">{{article.front.title}}</router-link></div>
                        <div class="next" v-if="article.after != null && article.after.title != undefined && article.after.title != ''">下一篇：<router-link @click.native="getData(article.after.id)" v-if="firstUrl.indexOf('news') == -1" tag="a"  :to="{path: '/'+article.after.parent_columnUrl+'/'+article.after.id}">{{article.after.title}}</router-link><router-link  @click.native="getData(article.after.id)" v-else tag="a"  :to="{path: '/news/'+article.after.columnUrl+'/'+article.after.id}">{{article.after.title}}</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <bottom></bottom>
    <foot></foot>
</div>
</template>

<script>
import top from '../common/top.vue'
import headPart from '../common/head.vue'
import navigate from '../common/nav.vue'
import pagination from '../common/pagination.vue'
import bottom from '../common/bottom.vue'
import foot from '../common/foot.vue'
import news from '../common/channel/news.vue'
import newsList from '../common/search/list.vue'
import crumb from '../common/search/crumb.vue'

// import sharePart from 'vue-social-share'

import { GET_NEWSDETAILARTICLE } from './module-newsDetail'
import { GET_NEWSSEODETAILARTICLE } from './module-newsDetail'
import { GET_NEWSDETAILTITLE } from './module-newsDetail'


import { GET_NEWSRECOMNEWS } from './module-news'
import { GET_NEWSHOTNEWS } from './module-news'

import {postFn} from '../../static/js/util.js'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch(GET_NEWSRECOMNEWS),
                store.dispatch(GET_NEWSHOTNEWS),
                store.dispatch(GET_NEWSDETAILTITLE,route)
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: this.title,
        meta: [{
            name: 'description',
            content: this.description
        },{
            name: 'keywords',
            content: this.keywords
        }]
      }
    },
    data(){
        return{
            id: '',
            isShadow: true,
            // article: null,
            // recomNews: [],
            // hotNews: [],
            // nav: [],
            type: '',
            firstUrl: '',
            config:{
                url:'',
                title: '',
                image: '',
                description: '',
                source:'',
                disabled:['google', 'facebook', 'twitter','tencent','douban','linkedin','diandian']
            },
            // title: '',
            // description: '',
            // keywords: ''
        }
    },
    created(){
        var _this = this;
        var route = this.$route;
        var path = route.path;
        var id = route.params.id;
        this.firstUrl = path.split('/')[1];
        var url = '';
        var newsUrl = '/content/article/getShortList';;
        if(path.indexOf('news') != -1){
            this.type = 'news';
            url = '/content/article/index';
        }else{
            this.type = 'seo';
            url = '/content/seoarticle/index';
        }
        this.config.title = this.article.title+'-创新科技服务云平台';
         this.config.description = this.article.desc;
        // 文章内容
        // postFn(url, {'id': id}, function(res){
        //     if(res.data.code == 200){
        //                 var article = res.data.data;
        //                 let title = article.title+'-创新科技服务云平台';
        //             // _this.$store.dispatch(GET_NEWSDETAILTITLE,title)
        //             // _this.description = article.desc;
        //             // _this.$store.dispatch(GET_NEWSDETAILDESCRIPTION,article.desc)
        //             // _this.keywords = article.keywords;
        //             // _this.$store.dispatch(GET_NEWSDETAILKEYWORDS,article.keywords)
                        
        //             // _this.config.image = 'http://o3new-cdn1.gbicdn.com/UserWeb/uploads/admin/content/5/b06fa26bde4f934f52ca43efb6492d35.png';
        //                 var nav = article.nav;
        //                 if(nav.length){
        //                     nav.push({'name_cn': article.title});
        //                     _this.nav = nav;    
        //                 }
        //                 if(_this.type=='news'){
        //                      _this.$store.dispatch(GET_NEWSDETAILARTICLE,article);
        //                 }else{
        //                     _this.$store.dispatch(GET_NEWSSEODETAILARTICLE,article);
        //                 }
        //     }
        // });
        // // 推荐文章
        // postFn(newsUrl, {'is_heat': 1, 'showNum': 10}, function(res){
        //     if(res.data.code == 200){
        //         _this.recomNews = res.data.data;
        //     }
        // });
        // // 热门文章
        // postFn(newsUrl, {'is_click': 1, 'showNum': 10}, function(res){
        //     if(res.data.code == 200){
        //         _this.hotNews = res.data.data;
        //     }
        // });
    },
    methods: {
        getData(id){
            window.scrollTo(0, 0);
            // console.log(111);
            // var _this = this;
            var route = this.$route;
            console.log(route,'©route');
            route.params.id=id;
            let oldUrl=route.path.split('/');
            console.log(oldUrl,"=>oldUrl");
            oldUrl.pop();
            oldUrl.push(id);
            let newUrl=oldUrl.join('/');
            console.log(newUrl,"=>newUrl");
            this.$router.push({
                path:newUrl
            })
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            // console.log(route,'©route2');
            // var path = route.path;
            // var id = id;
            // this.firstUrl = path.split('/')[1];
            // var url = '';
            // var newsUrl = '/content/article/getShortList';;
            // if(path.indexOf('news') != -1){
            //     this.type = 'news';
            //     url = '/content/article/index';
            // }else{
            //     this.type = 'seo';
            //     url = '/content/seoarticle/index';
            // }

            // this.$store.dispatch(GET_NEWSDETAILTITLE,route)
            // _this.$nextTick(function(){
            //     var imgArr = $('.page-detail .article').find('img');
            //     if(imgArr.length){
            //         _this.config.image = imgArr.eq(0).attr('src');
            //     }
            //     _this.config.title = this.article.title+'-创新科技服务云平台';
            //     _this.config.description = this.article.desc;
            // });
            
            // 文章内容
            // postFn(url, {'id': id}, function(res){
            //     if(res.data.code == 200){
            //         var article = res.data.data;
            //         _this.article = article;
            //         let title = article.title+'-创新科技服务云平台';
            //         _this.$store.dispatch(GET_NEWSDETAILTITLE,title)
            //         // _this.description = article.desc;
            //         _this.$store.dispatch(GET_NEWSDETAILDESCRIPTION,article.desc)
            //         // _this.keywords = article.keywords;
            //         _this.$store.dispatch(GET_NEWSDETAILKEYWORDS,article.keywords)
            //         _this.config.title = article.title+'-创新科技服务云平台';
            //         _this.config.description = article.desc;
            //         // _this.config.image = 'http://o3new-cdn1.gbicdn.com/UserWeb/uploads/admin/content/5/b06fa26bde4f934f52ca43efb6492d35.png';
                    
            //         var nav = article.nav;
            //         if(nav.length){
            //             nav.push({'name_cn': article.title});
            //             _this.nav = nav;
            //         }
            //     }
            // });
            // // 推荐文章
            // postFn(newsUrl, {'is_heat': 1, 'showNum': 10}, function(res){
            //     if(res.data.code == 200){
            //         _this.recomNews = res.data.data;
            //     }
            // });
            // // 热门文章
            // postFn(newsUrl, {'is_click': 1, 'showNum': 10}, function(res){
            //     if(res.data.code == 200){
            //         _this.hotNews = res.data.data;
            //     }
            // });
        }
    },
    computed: {
        article(){
            if(this.type=='news'){
                return this.$store.state.serviceNewsDetail.newsArticle;
            }else{
                return this.$store.state.serviceNewsDetail.newsSeoArticle;
            }
		},
        recomNews(){
			return this.$store.state.serviceNews.recomNews;
        },
        hotNews(){
			return this.$store.state.serviceNews.hotNews;
        },
        title(){
            return this.$store.state.serviceNewsDetail.newsDetailtitle;
        },
        description(){
            return this.$store.state.serviceNewsDetail.newsDetailtitledescription;
        },
        keywords(){
            return this.$store.state.serviceNewsDetail.newsDetailtitlekeywords;
        },
        article(){
            return this.$store.state.serviceNewsDetail.newDetailArticle;
        },
        nav(){
            return this.$store.state.serviceNewsDetail.newDetailNav;
        }
    },
    beforeMount() {
    // 只会在浏览器执行 
        this.$options.components.sharePart = () => System.import('vue-social-share');
        var _this = this;
        this.config.url=window.location.href
        
        _this.$nextTick(function(){
            var imgArr = $('.page-detail .article').find('img');
            if(imgArr.length){
                _this.config.image = imgArr.eq(0).attr('src');
            }
        });
    },
    mounted() {
        
    },
    components: {
        top,
        headPart,
        navigate,
        pagination,
        bottom,
        foot,
        news,
        newsList,
        crumb,
        // sharePart
    },
}
</script>

<style lang="scss">
$main-color: #333;
.bg{
    padding-bottom: 80px;
    background-color: #fafafa;
}
.page-detail{
    overflow: hidden;
    .main{
        padding-top: 26px;
        overflow: hidden;
    }
    .main-right{
        width: 230px;
        float: right;
        &>div{
            width: 100%;
            background-color: white;
            margin-bottom: 10px;
        }
    }
    .mina-left{
        width: 930px;
        .article{
            h2{
                font-size: 24px;
                line-height: 1;
                text-align: center;
            }
            .info{
                margin-top: 30px;
                font-size: 12px;
                line-height: 14px;
				height: 14px;
                text-align: center;
                overflow: hidden;
                span{
                    display: inline-block;
                    margin-right: 27px;
                    color: #999;
                    &.author, &.scan{
                        margin-top: -8px;
                    }
                    .icon{
                        color: #999;
                        font-size: 13px;
                        vertical-align: middle;
                        &.icon-user, &.icon-scan{
                            font-size: 30px;
                        }
                        &.icon-shizhong{
                            margin-right: 7px;
                        }
                    }
                }
            }
            .article-body{
                margin-top: 28px;
                padding: 23px 0;
                border-top: 1px dashed #ccc;
                border-bottom: 1px dashed #ccc;
                p{
                    font-size: 14px;
                    line-height: 26px;
                    // color: #666;
                    // text-indent: 2em;
                    margin-bottom: 10px;
                    img{
                      margin: 0 auto;
                    }
                }
                em,i{
                    font-style: italic;
                }
                strong,b{
                    font-weight: bold;
                }
            }
            .tag{
                margin-top: 20px;
                font-size: 14px;
                line-height: 32px;
                .share{
                    float: right;
                    .icon-share,.social-share-icon{
                        display: inline-block;
                        font-size: 32px;
                        vertical-align: top;
                        margin-right: 10px;
                    }
                    .icon-share{
                        color: #9b9b9b;;
                    }
                    .social-share{
                        display: inline-block;
                        .icon-weibo{
                            color: #e45656;
                        }
                        .icon-qq{
                            color: #4dafea;
                        }
                        .icon-wechat{
                            position: relative;
                            &:before {
                                color: #3eb135;
                                content: "\e65b";
                            }
                            &:hover{
                                .wechat-qrcode{
                                    display: block;
                                }
                            }
                            .wechat-qrcode{
                                display: none;
                                background: #fff;
                                color: $main-color;
                                border: 1px solid #eee;
                                height: 220px;
                                position: absolute;
                                right: -100px;
                                bottom:5px;
                                width: 220px;
                                z-index: 40;
                                h4{
                                    font-size: 16px;
                                    line-height: 50px;
                                    text-align: center;
                                }
                                .qrcode{
                                    img{
                                        display: block;
                                        margin: 0 auto;
                                    }
                                }
                                .help{
                                    padding: 10px 0 0;
                                    text-align: center;
                                    p{
                                        font-size: 12px;
                                        line-height: 20px;
                                    }
                                }
                            }
                        }
                        .icon-qzone{
                            color: #eecf3d;
                            margin-right: 0;
                            &:before {
                                content: "\e6e4";
                            }
                        }
                    }
                }
                .label{
                    line-height: inherit;
                    color: #999;
                    span{
                        color: #666;
                        margin-right: 18px;
                        &:hover{
                            color: #e52e3a;
                        }
                    }
                }
            }
        }
        .page-num{
            margin-top: 53px;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            color: #999;
            a{
                color: #666;
                &:hover{
                    color: #e52e3a;
                }
            }
            &>div{
                font-size: 14px;
                line-height: 30px;
                width: 450px;
            }
        }
    }
}
.my-seris{
    padding-left: 16px;
	background-color: #f0f0f0;
	font-size: 14px;
	color: $main-color;
	line-height: 40px;
	overflow: hidden;
}
</style>