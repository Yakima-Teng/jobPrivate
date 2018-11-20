<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner"><img src="../../static/images/channel/banner_02.jpg"/></div>
    <div class="bg">
        <div class="w1190 container">
            <div class="crumb" v-if="type == 'seo'">
                <router-link tag="a" target="_blank" class="level-one" :to="{path: firstUrl}" >{{levelOne}}</router-link><i class="icon icon-view"></i><a class="level-two" href="javascript:void(0)">{{levelTwo}}</a>
            </div>
            <div class="tab" v-else>
                <div class="tab-box">
                    <ul>
                        <li class="cur">
                            <a href="javascript:void(0)">{{levelTwo}}</a>
                        </li>
                    </ul>
                </div>
            </div>
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
                <news :newsList="newsList" :type="type" :url="firstUrl"></news>
                <pagination @changePagesInfo="changePagesInfo"></pagination>
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

import {postFn} from '../../static/js/util.js'

import { GET_SEONEWLIST } from './module-seo'
import { GET_SEONEWTITLE } from './module-seo'
import { GET_SEONEWDATA } from './module-seo'
import { GET_NEWSRECOMNEWS } from './module-news'
import { GET_NEWSHOTNEWS } from './module-news'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch(GET_NEWSRECOMNEWS),
                store.dispatch(GET_NEWSHOTNEWS), 
                store.dispatch(GET_SEONEWTITLE,route), 
                store.dispatch(GET_SEONEWDATA,route), 
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
            isShadow: true,
            // newsList: [],
            // recomNews: [],
            // hotNews: [],
            // levelOne: '',
            // levelTwo: '',
            firstUrl: '',
            type: '',
            tid:'',
            // title: '',
            // description: '',
            // keywords: ''
        }
    },
    created(){
        var route = this.$route;
        var path = route.path;
        var tid = route.params.tid;
        this.tid=tid;
        var firstUrl = path.split('/')[1];
        this.firstUrl = '/'+firstUrl;
        var _this = this;
        var url = '';
        var listUrl = '';
        var params = null;
        var newsUrl = '/content/article/getShortList';
        if(path.indexOf('news') != -1){
            this.type = 'news';
            url = '/content/articlecolumn/index';
            listUrl = '/content/article/GetArticlelistByColumnid';
            params = '';
        }else{
            this.type = 'seo';
            url = '/content/seoarticlecolumn/index';
            listUrl = '/content/seoarticle/GetArticlelistByColumnid';
            params = {'columnUrl': firstUrl}
        }
        // 栏目列表
        // postFn(url, params, function(res){
		// 	if(res.data.code == 200){
        //         if(_this.type == 'seo'){
        //             var list = res.data.data[0]; // 从一级栏目开始
        //             _this.levelOne = list.name_cn;
        //             var columnList = list.next_column;
        //             var TwoList = [];
        //             columnList.forEach(function(element){
        //                 TwoList.push(element.name_cn);
        //                 if(element.url == tid){
        //                     _this.levelTwo = element.name_cn;
        //                 }
        //             });
        //             _this.title = _this.levelTwo+'_'+_this.levelOne+'-创新科技服务云平台';
        //             _this.description = '创新科技服务云平台为您提供专业的'+_this.levelOne+',办理'+TwoList.toString().replace(/,/g, '')+'就找创新科技服务云平台.';
        //             _this.keywords = TwoList.toString()+',创新科技服务云平台';
        //         }else{
        //             var list = res.data.data;
        //             if(tid == 'zcgl'){ // 知产攻略
        //                 _this.title = '商标攻略_专利攻略_版权攻略_知识产权攻略-创新科技服务云平台';
        //                 _this.description = '创新科技服务云平台新闻资讯频道为您提供商标攻略,专利攻略,版权攻略,知识产权攻略,并全面介绍商标注册,版权登记,专利申请及科技服务等相关专业知识，为创新创业者提供最及时最专业的资讯信息.';
        //                 _this.keywords = '商标攻略,专利攻略,版权攻略,知识产权攻略,创新科技服务云平台';
        //             }else if(tid == 'hlhw'){ // 行里行外
        //                 _this.title = '商标新闻_专利新闻_版权新闻_知识产权新闻-创新科技服务云平台';
        //                 _this.description = '创新科技服务云平台新闻资讯频道为您提供网络热点知识产权事件行业前沿信息等资讯服务,为创新创业者提供最及时最专业的资讯信息,实时推送商标新闻,专利新闻,版权新闻,知识产权新闻等资讯.';
        //                 _this.keywords = '商标新闻,专利新闻,版权新闻,知识产权新闻,创新科技服务云平台';
        //             }else if(tid == 'zcqy'){ // 政策前沿
        //                 _this.title = '政策前沿_新闻资讯_知识产权资讯-创新科技服务云平台';
        //                 _this.description = '创新科技服务云平台新闻资讯频道实时发布知识产权新闻资讯,商标版权专利等知识产权政策动态,为您提供最全面的政策解读.';
        //                 _this.keywords = '政策前沿,新闻资讯,知识产权资讯,商标资讯,专利资讯';
        //             }else if(tid == 'xrdt'){ // 细软动态
        //                 _this.title = '细软动态_细软资讯_知识产权资讯-创新科技服务云平台';
        //                 _this.description = '创新科技服务云平台新闻资讯频道为您提供细软动态,细软资讯,商标版权专利等知识产权资讯服务,为创新创业者提供最及时最专业的资讯信息.';
        //                 _this.keywords = '细软动态,细软资讯,知识产权资讯,商标资讯,专利资讯';
        //             }
        //             list.forEach(function(element){
        //                 if(element.url == tid){
        //                     _this.levelTwo = element.name_cn;
        //                 }
        //             });
        //         }
                
		// 	}
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
        // 列表
        // postFn(listUrl, {'columnUrl': tid}, function(result){
        //     if(result.data.code == 200){
        //         var newsObj = result.data.data;
        //         var newsList = newsObj.data;
        //         // _this.newsList = newsList;
        //         _this.$store.dispatch(GET_SEONEWLIST,newsList);
        //         _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
        //         _this.$store.dispatch("jumpAction", {page: 1});
        //     }
        // });
        this.$store.dispatch("getLastPage", parseInt(this.newsListObj.last_page));
        this.$store.dispatch("jumpAction", {page: 1});
    },
    methods: {
        changePagesInfo: function(type,curPage){ // 页码更改操作
            var page = curPage;
            if(type == 'add'){
                page = curPage + 1;
            }else if(type == 'less'){
                page = curPage - 1;
            }
            this.dataFun(page);
            window.scrollTo(0, 0);
        },
        dataFun: function(page){
            var _this = this;
            var route = this.$route;
            var path = route.path.replace(/\//g, "");
            // 数据列表
            if(this.type=='seo'){
                postFn('/content/seoarticle/GetArticlelistByColumnid', {'columnUrl':this.tid, 'page': page}, function(result){
                    if(result.data.code == 200){
                        var newsObj = result.data.data;
                        var newsList = newsObj.data;
                        // _this.newsList = newsList;
                        _this.$store.dispatch(GET_SEONEWLIST,newsList);
                        _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
                        _this.$store.dispatch("jumpAction", {page: page});
                    }
                });
            }else{
                postFn('/content/article/GetArticlelistByColumnid', {'columnUrl':this.tid, 'page': page}, function(result){
                    if(result.data.code == 200){
                        var newsObj = result.data.data;
                        var newsList = newsObj.data;
                        // _this.newsList = newsList;
                        _this.$store.dispatch(GET_SEONEWLIST,newsList);
                        _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
                        _this.$store.dispatch("jumpAction", {page: page});
                    }
                });
            }
        }
    },
     computed: {
        newsList(){
			return this.$store.state.serviceSeo.seoNewsList;
        },
        recomNews(){
			return this.$store.state.serviceNews.recomNews;
        },
        hotNews(){
			return this.$store.state.serviceNews.hotNews;
        },
        title(){
            return this.$store.state.serviceSeo.seoNewTitle;
        },
        description(){
            return this.$store.state.serviceSeo.seoNewDescription;
        },
        keywords(){
            return this.$store.state.serviceSeo.seoNewKeywords;
        },
        levelOne(){
            return this.$store.state.serviceSeo.seoNewLevelOne;
        },
        levelTwo(){
            return this.$store.state.serviceSeo.seoNewlevelTwo;
        },
        newsListObj(){
			return this.$store.state.serviceSeo.seoNewObj;
        },
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
        crumb
    }
}
</script>

<style lang="scss">
$main-color: #333;
$red: #e52e3a;
.bg{
    padding-bottom: 80px;
    background-color: #fafafa;
}
.tab{
	width: 930px;
	border-bottom: 1px solid #ccc;
	overflow: hidden;
	ul{
		overflow: hidden;
		margin-bottom: -1px;
		li{
			float: left;
			margin-right: 80px;
			a{
				display: block;
				width: 100%;
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				color: lighten($main-color, 20%);
                cursor: default;
				box-sizing: border-box;
			}
			&.cur,&:hover{
				a{
					color: $red;
					border-bottom: 2px solid $red;
				}
				
			}
		}
	}
}
.page-channel{
    overflow: hidden;
    .banner{
        width: 1920px;
        margin: 0 auto;
    }
    .container{
        overflow: hidden;
    }
    .crumb{
        padding: 16px 0 0;
        height: 38px;
        box-sizing: border-box;
        overflow: hidden;
        div{
            float: left;
        }
        a,em{
            display: inline-block;
            font-size: 12px;
            line-height: 22px;
            color: lighten($main-color, 20%);
        }
        a:hover{
            color: $red;
        }
        .icon{
            color: $main-color;
            vertical-align: middle;
        }
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