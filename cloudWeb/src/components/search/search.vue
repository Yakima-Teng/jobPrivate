<template>
<div class="page-search">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part :keywords="keywords"></head-part>
        <navigate></navigate>
    </div>
    <div class="bg">
        <div class="w1190">
            <crumb :id="pcat_id" :levelOne="levelOne" :levelTwo="levelTwo"></crumb>
            <sort v-if="cat_id && cateInfo!=undefined && cateInfo!=null && cateInfo.child!=undefined " :cateInfo="cateInfo" :cat_id="cat_id"></sort>
            <div class="main-part" :class="{'noPadding' : !cat_id}">
                <div class="right-part" v-if="isLogin">
                    <div class="my-print" :class="{'no-list': printArr==''}">
                        <h3 class="my-seris">我的足迹</h3>
                        <list type="my" v-if="printArr!= ''" :myList="printArr"></list>
                        <div v-else class="box">
                            <div class="no-result">
                                <img src="../../static/images/search/no.png" />
                            </div>
                            <p>您还没有浏览过任何服务~</p>
                        </div>
                    </div>
                    <div class="my-collect" :class="{'no-list': collectArr==''}">
                        <h3 class="my-seris"><router-link class="more" target="_blank" :to="{path: '/home/collect'}">更多<i class="icon icon-view"></i></router-link>我的收藏</h3>
                        <list type="my" v-if="collectArr!=''" :myList="collectArr"></list>
                        <div v-else class="box">
                            <div class="no-result">
                                <img src="../../static/images/search/no.png" />
                            </div>
                            <p>您还没有收藏过任何服务~</p>
                        </div>
                    </div>
                    <div class="my-news">
                        <h3 class="my-seris">热门文章</h3>
                        <list type="news" :heatNews="hotNews"></list>
                    </div>
                </div>
                <div class="right-part" v-else>
                    <visitor type="brand"></visitor>
                    <visitor type="patent"></visitor>
                    <visitor type="copyright"></visitor>
                    <div class="my-news">
                        <h3 class="my-seris">热门文章</h3>
                        <list type="news" :heatNews="hotNews"></list>
                    </div>
                </div>
                <div class="left-part" v-if="list.length">
                    <titleP :curIndex="curIndex" @indexChange="indexChange" :total="total" @changePagesInfo="changePagesInfo"></titleP>
                    <div class="main">
                        <list type="img-list" v-if="curIndex == 0" :list="list"></list>
                        <list type="list" :list="list" v-else></list>
                        <pagination @changePagesInfo="changePagesInfo"></pagination>
                    </div>
                </div>
                <div class="left-part" v-else>
                    <div class="no-result">
                        <img src="../../static/images/search/no-result.png" />
                    </div>
                    <p class="prompt">很抱歉~您没有搜索到任何服务！</p>
                </div>
            </div>
        </div>
    </div>
    <bottom></bottom>
    <foot></foot>
    <fixed-part></fixed-part>
</div>
</template>

<script>
import top from '../common/top.vue'
import headPart from '../common/head.vue'
import navigate from '../common/nav.vue'
import crumb from '../common/search/crumb.vue'
import sort from '../common/search/sort.vue'
import titleP from '../common/search/title.vue'
import list from '../common/search/list.vue'
import pagination from '../common/pagination.vue'
import visitor from '../common/search/visitor.vue'
import bottom from '../common/bottom.vue'
import foot from '../common/foot.vue'
import fixedPart from '../index/fixed.vue'

import {mapState} from 'vuex'
import {postFn} from '../../static/js/util.js'

import { GET_SEARCHLIST } from './module-search'
import { GET_SEARCHHOTNEWS } from './module-search'

import { GET_SEARCHDATA } from './module-search'

export default {
    asyncData({ store,route}) {
        return Promise.all([
            store.dispatch("getServiceCate"),
            store.dispatch(GET_SEARCHHOTNEWS),
            store.dispatch(GET_SEARCHDATA,route),
        ])
    },
    metaInfo () {
      return {
        title: this.title+'-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您精准提供'+this.description+'信息,'+this.description+'服务价格,专业顾问一对一为您服务，您还可以在我们网站发布知识产权交易信息,最新知识产权与创新创业信息尽在创新科技服务云平台。'
        },{
            name: 'keywords',
            content: this.titleKey,
        }]
      }
    },
    data(){
        return{
            param: null,
            isShadow: true,
            curIndex: 0,
            // list: [],
            printArr: '',
            collectArr: '',
            pcat_id: '',
            cat_id: '',
            levelOne: '',
            levelTwo: '',
            keywords: '',
            total: 0,
            // hotNews: [],
            // title: '',
            keywords: '',
            // description: '',
            // titleKey:''
        }
    },
    computed: {
        ...mapState(["isLogin"]),
		cateInfo(){
            var _this = this;
            var list = this.$store.state.cateList;
            var cateInfo = null;
            if(this.cat_id){
                var cate = list.filter(function(item){
                    return item.cat_id == _this.pcat_id;
                })[0];
                if(cate != undefined){
                    cateInfo = cate;
                }
            }
            return cateInfo;
        },
        hotNews(){
			return this.$store.state.serviceSearch.searchHotNews;
        },
        list(){
			return this.$store.state.serviceSearch.searchList;
        },
        title(){
            if(this.$route.query.cat_id != undefined){
                return this.$route.query.name+'_'+this.$route.query.pname;
            }else if(this.$route.query.keywords!=undefined){
                return this.$route.query.keywords
            }
        },
        description(){
            if(this.$route.query.cat_id != undefined){
                return this.$route.query.name+'+'+this.$route.query.pname;
            }else if(this.$route.query.keywords!=undefined){
                return this.$route.query.keywords
            }
        },
        titleKey(){
            if(this.$route.query.cat_id != undefined){
                return this.$route.query.name+','+this.$route.query.pname+',创新科技服务云平台';
            }else if(this.$route.query.keywords!=undefined){
                return this.$route.query.keywords+',商标查询,专利查询,商标注册,版权登记'
            }
        },
        dataInfo(){
            return this.$store.state.serviceSearch.dataInfo;
        }
    },
    created(){
        console.log(this.title);
        var _this = this;
        if(this.isLogin){
            var data = {
                type:1,
                page:1,
                limit:2
            }
            // 我的收藏
            postFn('/user/user/collect/get',data,function(res){
                if(res.data.code==200){
                    var list = res.data.data.list;
                    var idArr = [];
                    list.forEach(function(element){
                        idArr.push(element.collect_id);
                    });
                    var goodsData = {
                        product_ids: idArr.toString()
                    }
                    postFn('/product/product/infos',goodsData,function(res){
                        if(res.data.code==200){
                            if(res.data.data!=''&&res.data.data_2.valid_sku_num>0){
                                _this.collectArr = res.data.data;
                            }
                        }
                    })
                }
            });
            // 我的足迹
            postFn('/user/user/footprint/get',{page:1,limit:2},function(res){
                if(res.data.code==200){
                    var list = res.data.data.list;
                    var idArr = [];
                    list.forEach(function(element){
                        idArr.push(element.footprint_id);
                    });
                    var goodsData = {
                        product_ids: idArr.toString()
                    }
                    postFn('/product/product/infos',goodsData,function(res){
                        if(res.data.code==200){
                            if(res.data.data!=''&&res.data.data_2.valid_sku_num>0){
                                _this.printArr = res.data.data;
                            }
                        }
                    })
                }
            });
        }
        
        this.init();
        // 热门资讯
        // postFn('/content/article/getShortList', {'is_click': 1, 'showNum': 5}, function(res){
        //     if(res.data.code == 200){
        //         _this.hotNews = res.data.data;
        //         console.log(_this.hotNews,'_this.hotNews');
        //     }
        // });
    },
    watch: {
        '$route': 'init', // 监听路由
        '$store.state.cateList': function(val, oldVal){ // 监听computed属性
            this.$store.commit('commit_category', val);
        }
    },
    methods: {
        init: function(){
            var query = this.$route.query;
            var param = {};
            if(query.cat_id != undefined){
                this.pcat_id = query.pcat_id;
                this.cat_id = query.cat_id;
                this.levelOne = query.pname;
                this.levelTwo = query.name;
                this.$store.dispatch("getServiceCate");
                param['cat_id'] = query.cat_id;
                // this.title = query.name +'_'+query.pname;
                // this.description = query.name +'+'+query.pname;
                // this.titleKey=query.name +','+query.pname+',创新科技服务云平台';
            }else if(query.keywords != undefined){
                this.keywords = query.keywords;
                this.levelOne = '全部搜索结果';
                this.levelTwo = query.keywords;
                param['keywords'] = query.keywords;
                // this.title = this.description = query.keywords;
                // this.titleKey=query.keywords+',商标查询,专利查询,商标注册,版权登记'
            }
            param['page'] = 1;
            this.param = param;
            // this.dataFun();
            this.total = this.dataInfo.total;
            this.$store.dispatch("getLastPage", parseInt(this.dataInfo.last_page));
            this.$store.dispatch("jumpAction", {page: param.page});
        },
        dataFun: function(){
            var _this = this;
            var param = this.param;
            console.log(param,'param')
            postFn('/product/product/search', param, function(res){
                if(res.data.code == 200){
                    var dataInfo = res.data.data;
                    // _this.list = dataInfo.data;
                    _this.$store.dispatch(GET_SEARCHLIST,dataInfo.data);
                    _this.total = dataInfo.total;
                    _this.$store.dispatch("getLastPage", parseInt(dataInfo.last_page));
                    _this.$store.dispatch("jumpAction", {page: param.page});
                    
                }
            });
        },
        changePagesInfo: function(type,curPage){ // 页码更改操作
            var param = this.param;
            var page = curPage;
            if(type == 'add'){
                page = curPage + 1;
            }else if(type == 'less'){
                page = curPage - 1;
            }
            param.page = page;
            this.param = param;
            this.dataFun();
            window.scrollTo(0, 0);
        },
        indexChange: function(index){
            this.curIndex = index;
        }
    },
    components: {
        top,
        headPart,
        navigate,
        crumb,
        sort,
        titleP,
        list,
        pagination,
        visitor,
        bottom,
        foot,
        fixedPart
    }
}
</script>

<style lang="scss">
$main-color: #333;
.bg{
    background-color: #fafafa;
}
.page-search{
    .crumb{
        height: 54px !important;
        padding: 16px 0 !important;
    }
    .main-part{
        padding-top: 20px;
        padding-bottom: 80px;
        width: 100%;
        overflow: hidden;
        .right-part{
            float: right;
            width: 230px;
        }
        .left-part{
            width: 950px;
            overflow: hidden;
            .no-result{
                margin: 35px auto 0;
                width: 261px;
                height: 255px;
            }
            .prompt{
                margin-top: 33px;
                font-size: 16px;
                line-height: 24px;
                color: $main-color;
                text-align: center;
            }
        }
        &.noPadding{
            padding-top: 0;
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
	.more{
		float: right;
		font-size: 12px;
		line-height: 20px;
		margin-top: 10px;
		.icon{
			display: inline-block;
			font-size: 20px;
			vertical-align: top;
		}
	}
}
.right-part{
    &>div{
        width: 100%;
        background-color: white;
        margin-bottom: 10px;
        &.no-list{
            padding-bottom: 28px;
            .box{
                margin: 30px auto 0;
                width: 172px;
                .no-result{
                    width: 172px;
                    height: 128px;
                }
                p{
                    margin-top: 17px;
                    font-size: 12px;
                    line-height: 18px;
                    color: lighten($main-color, 20%);
                    text-align: center;
                }
            }
        }
    }
}
</style>