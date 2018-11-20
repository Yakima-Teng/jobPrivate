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
                <tab :columnFirst="columnFirst" :url="firstUrl"></tab>
                <news :newsList="newsList" :url="firstUrl" type="seo"></news>
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
import tab from '../common/channel/tab.vue'
import news from '../common/channel/news.vue'
import newsList from '../common/search/list.vue'

import {postFn} from '../../static/js/util.js'

import Axios from 'axios'

import { GET_SEOMCOLUMNFIRST } from './module-seoM'
import { GET_SEOMNEWSLIST } from './module-seoM'
import { GET_SEOMTITLE } from './module-seoM'
import { GET_SEOMDATA } from './module-seoM'
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
                store.dispatch(GET_SEOMTITLE,route),
                store.dispatch(GET_SEOMDATA,route),
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
            // columnFirst: [],
            firstUrl: '',
            // title: '',
            // description: '',
            // keywords: ''
        }
    },
    created(){
        var _this = this;
        var route = this.$route;
        this.firstUrl = route.path;
        var path = route.path.replace(/\//g, "");
        var url = '/content/seoarticlecolumn/index';
        var newsUrl = '/content/article/getShortList';
        var listUrl = '/content/seoarticle/GetArticlelistByColumnid';
        var cid = '';

        // 栏目列表
        // postFn(url, {'columnUrl': path}, function(res){
		// 	if(res.data.code == 200){
        //         var list = res.data.data[0]; // 从一级栏目开始
        //         cid = list.id;
        //         // _this.columnFirst = list.next_column;
        //         _this.$store.dispatch(GET_SEOMCOLUMNFIRST,list.next_column);
        //         var columnFirst = [];
        //         for(var i=0;i<_this.columnFirst.length;i++){
        //             columnFirst.push(_this.columnFirst[i].name_cn)
        //         }
        //         _this.title = list.name_cn+'-创新科技服务云平台';
        //         _this.description = '创新科技服务云平台为您提供专业的'+list.name_cn+',办理'+columnFirst.toString().replace(/,/g, '')+'就找创新科技服务云平台.';
        //         _this.keywords = columnFirst.toString()+',创新科技服务云平台';
        //         // // 推荐文章
        //         // postFn(newsUrl, {'is_heat': 1, 'showNum': 10}, function(res){
        //         //     if(res.data.code == 200){
        //         //         _this.recomNews = res.data.data;
        //         //     }
        //         // });
        //         // // 热门文章
        //         // postFn(newsUrl, {'is_click': 1, 'showNum': 10}, function(res){
        //         //     if(res.data.code == 200){
        //         //         _this.hotNews = res.data.data;
        //         //     }
        //         // });
		// 	}
        // });
        
        // 数据列表
        // this.dataFun(1);
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
            postFn('/content/seoarticle/GetArticlelistByColumnid', {'columnUrl': path, 'page': page}, function(result){
                if(result.data.code == 200){
                    var newsObj = result.data.data;
                    var newsList = newsObj.data;
                    // _this.newsList = newsList;
                    _this.$store.dispatch(GET_SEOMNEWSLIST,newsList);
                    _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
                    _this.$store.dispatch("jumpAction", {page: page});
                }
            });
        }
    },
     computed: {
        columnFirst(){
			return this.$store.state.serviceSeoM.seoMColumnFirst;
		},
		newsList(){
			return this.$store.state.serviceSeoM.seoMNewsList;
        },
        recomNews(){
			return this.$store.state.serviceNews.recomNews;
        },
        hotNews(){
			return this.$store.state.serviceNews.hotNews;
        },
        title(){
			return this.$store.state.serviceSeoM.seoMTitle;
        },
        description(){
			return this.$store.state.serviceSeoM.seoMDescription;
        },
        keywords(){
			return this.$store.state.serviceSeoM.seoMKeywords;
        },
        newsListObj(){
			return this.$store.state.serviceSeoM.seoMNewObj;
        },
    },
    components: {
        top,
        headPart,
        navigate,
        pagination,
        bottom,
        foot,
        tab,
        news,
        newsList
    }
}
</script>

<style lang="scss">
$main-color: #333;
.bg{
    padding-bottom: 80px;
    background-color: #fafafa;
}
.page-channel{
    overflow: hidden;
    .banner{
        width: 1920px;
        margin: 0 auto;
    }
    .container{
        padding-top: 42px;
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