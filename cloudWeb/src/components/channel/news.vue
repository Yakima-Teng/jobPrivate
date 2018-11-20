<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner"><img src="../../static/images/channel/banner_03.jpg"/></div>
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
                <tab :columnFirst="tabList" url="news"></tab>
                <news :newsList="newsList" url="news" type="news"></news>
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

import { GET_NEWSTABLIST } from './module-news'
import { GET_NEWSNEWSLIST } from './module-news'
import { GET_NEWSRECOMNEWS } from './module-news'
import { GET_NEWSHOTNEWS } from './module-news'

import {postFn} from '../../static/js/util.js'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch(GET_NEWSTABLIST),
                store.dispatch(GET_NEWSNEWSLIST),
                store.dispatch(GET_NEWSRECOMNEWS),
                store.dispatch(GET_NEWSHOTNEWS),
                
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '商标资讯_专利资讯_版权资讯_知识产权资讯-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台看资讯频道为您提供专业的商标资讯,专利资讯,版权资讯,知识产权资讯等资讯服务,为创新创业者提供最及时最专业的资讯信息.'
        },{
            name: 'keywords',
            content: '商标资讯,专利资讯,版权资讯,知识产权资讯,创新科技服务云平台'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            // tabList: [],
            curIndex: 0,
            // newsList: [],
            // recomNews: [],
            // hotNews: []
        }
    },
    created(){
        this.$store.dispatch("getLastPage", parseInt(this.newsListParent.last_page));
        this.$store.dispatch("jumpAction", {page: 1});
        // var _this = this;
        // // 新闻栏目列表
        // postFn('/content/articlecolumn/index', '', function(res){
		// 	if(res.data.code == 200){
        //         var list = res.data.data;
        //         _this.tabList = list;
        //         // _this.dataFun(1);
		// 	}
        // });
        // postFn('/content/article/GetArticlelistByColumnid', '', function(result){
        //     if(result.data.code == 200){
        //         var newsObj = result.data.data;
        //         var newsList = newsObj.data;
        //         _this.newsList = newsList;
        //         _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
        //         _this.$store.dispatch("jumpAction", {page: 1});
        //     }
        // });
        // // 推荐文章
        // postFn('/content/article/getShortList', {'is_heat': 1, 'showNum': 10}, function(res){
        //     if(res.data.code == 200){
        //         _this.recomNews = res.data.data;
        //     }
        // });
        // // 热门文章
        // postFn('/content/article/getShortList', {'is_click': 1, 'showNum': 10}, function(res){
        //     if(res.data.code == 200){
        //         _this.hotNews = res.data.data;
        //     }
        // });
    },
    methods: {
        dataFun: function(curPage){
            var _this = this;
            var columnId = this.tabList[this.curIndex].id;
            postFn('/content/article/GetArticlelistByColumnid', {'page': curPage}, function(result){
                if(result.data.code == 200){
                    var newsObj = result.data.data;
                    var newsList = newsObj.data;
                    // _this.newsList = newsList;
                    _this.$store.dispatch("getLastPage", parseInt(newsObj.last_page));
                    _this.$store.dispatch("jumpAction", {page: curPage});
                    _this.$store.dispatch(GET_NEWSNEWSLIST,curPage);
                }
            });
        },
        tabCut: function(index){
            this.curIndex = index;
            this.dataFun(1);
        },
        changePagesInfo: function(type,curPage){ // 页码更改操作
            var page = curPage;
            if(type == 'add'){
                page = curPage + 1;
            }else if(type == 'less'){
                page = curPage - 1;
            }
            this.dataFun(page);
            window.scrollTo(0, 0);
        }
    },
    computed: {
        tabList(){
			return this.$store.state.serviceNews.newsTabList;
		},
		newsListParent(){
			return this.$store.state.serviceNews.newsNewsList;
        },
        newsList(){
			return this.newsListParent.data;
        },
        recomNews(){
			return this.$store.state.serviceNews.recomNews;
        },
        hotNews(){
			return this.$store.state.serviceNews.hotNews;
		}
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