<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_sb">
        <!-- <img src="../../static/images/channel/banner_sb.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="registName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="registList"></list>
            </div>
            <div id="review">
                <mtitle type="ordinary" :content="reviewName" :cateInfo="sortInfo02"></mtitle>
                <list type="ordinary" :infoList="reviewList" :img="reviewImg"></list>
            </div>
            <div id="reply">
                <mtitle type="ordinary" :content="replyName" :cateInfo="sortInfo03"></mtitle>
                <list type="ordinary-img" :infoList="replyList"></list>
            </div>
            <div id="other">
                <mtitle type="ordinary" :content="otherName" :cateInfo="sortInfo05"></mtitle>
                <list type="across" :infoList="otherList"></list>
            </div>
            <div id="change">
                <mtitle type="ordinary" :content="changeName" :cateInfo="sortInfo04"></mtitle>
                <list type="d-across" :infoList="changeList" :img="changeImg"></list>
            </div>
            <div id="trade">
                <mtitle type="trade" content="商标交易"></mtitle>
                <trade></trade>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='sb'></flow>
        </div>
    </div>
    <bottom></bottom>
    <foot></foot>
    <fixed-part></fixed-part>
    <!-- <floor :floorArr="floorArr"></floor> -->
</div>
</template>

<script>
import top from '../common/top.vue'
import headPart from '../common/head.vue'
import navigate from '../common/nav.vue'
import pagination from '../common/pagination.vue'
import bottom from '../common/bottom.vue'
import foot from '../common/foot.vue'
import fixedPart from '../index/fixed.vue'
// import floor from '../index/floor.vue'
import mtitle from '../common/channel/title.vue'
import list from '../common/channel/list.vue'
import trade from '../common/channel/trade.vue'
import team from '../common/channel/team.vue'
import flow from '../common/channel/flow.vue'

import {postFn} from '../../static/js/util.js'
import { GET_REGISTLIST } from './module-channel'
import { GET_CHANGELIST } from './module-channel'
import { GET_REPLYLIST } from './module-channel'
import { GET_REVIEWLIST } from './module-channel'
import { GET_OTHERLIST } from './module-channel'
import { GET_SEOLIST } from './module-channel'

import { GET_REGISTNAME } from './module-channel'
import { GET_CHANGENAME } from './module-channel'
import { GET_REPLYNAME } from './module-channel'
import { GET_REVIEWNAME } from './module-channel'
import { GET_OTHERNAME } from './module-channel'
export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_REGISTLIST),
                store.dispatch(GET_CHANGELIST),
                store.dispatch(GET_REPLYLIST),
                store.dispatch(GET_REVIEWLIST),
                store.dispatch(GET_OTHERLIST),
                store.dispatch(GET_SEOLIST),
                store.dispatch(GET_REGISTNAME),
                store.dispatch(GET_CHANGENAME),
                store.dispatch(GET_REPLYNAME),
                store.dispatch(GET_REVIEWNAME),
                store.dispatch(GET_OTHERNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '商标查询_商标注册查询_商标注册_商标转让-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式商标服务,专业提供商标查询,商标注册查询,商标注册,商标转让等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '商标查询,商标注册查询,商标注册,商标转让'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            // floorArr: [
            //     {'id': 'regist', 'name': '商标注册'},
            //     {'id': 'review', 'name': '商标复审'},
            //     {'id': 'reply', 'name': '商标答辩'},
            //     {'id': 'other', 'name': '商标其他'},
            //     {'id': 'change', 'name': '商标变更'},
            //     {'id': 'trade', 'name': '商标交易'},
            //     {'id': 'team', 'name': '专家团队'},
            //     {'id': 'flow', 'name': '注册流程'}
            // ]
            registId: ['27', '36', '35', '106', '107'],
            changeId: ['50', '108'],
            replyId: ['109', '110', '111', '112', '113'],
            reviewId: ['48', '114', '115', '116'],
            otherId: ['117', '49', '118', '119', '120'],
            // registList: [],
            // changeList: [],
            // replyList: [],
            // reviewList: [],
            // otherList: [],
            reviewImg: require('../../static/images/channel/review.jpg'),
            changeImg: require('../../static/images/channel/change.jpg'),
            sortInfo01: {
                pcat_id: '140',
                cat_id: '176',
                pname: '商标服务',
                name: '商标注册'
            },
            sortInfo02: {
                pcat_id: '140',
                cat_id: '178',
                pname: '商标服务',
                name: '商标复审'
            },
            sortInfo03: {
                pcat_id: '140',
                cat_id: '179',
                pname: '商标服务',
                name: '商标答辩'
            },
            sortInfo04: {
                pcat_id: '140',
                cat_id: '180',
                pname: '商标服务',
                name: '商标变更'
            },
            sortInfo05: {
                pcat_id: '140',
                cat_id: '177',
                pname: '商标服务',
                name: '商标其他'
            },
            team: [
                {
                    'id': 1,
                    'name': '王彬彬',
                    'field': '商标注册',
                    'desc': '中细软资深知识产权顾问，曾为上千家企业提供知识产权确权、维权等相关服务，服务过香港李福记珠宝、科曼利集团等。',
                    'img': require('../../static/images/channel/wangbinbin.jpg')
                },
                {
                    'id': 2,
                    'name': '陈欣',
                    'field': '商标确权、维权到运用、管理等',
                    'desc': '擅长商标确权维权及运用管理的全流程服务，为不同行业、企业规模制定商标战略规划。服务过紫竹药业、剑南春等。',
                    'img': require('../../static/images/channel/chenxin.jpg')
                },
                {
                    'id': 3,
                    'name': '黄容',
                    'field': '商标、版权、国际知识产权业务',
                    'desc': '中细软资深知识产权顾问，细致专业的服务赢得了一致好评，曾为众多大型企业提供专业服务，TCL集团、神州证券等。',
                    'img': require('../../static/images/channel/huangrong.jpg')
                },
                {
                    'id': 4,
                    'name': '李向阳',
                    'field': '商标/专利交易、商标案件（撤三、异议、无效）',
                    'desc': '曾为多家大型企事业单位提供商标、专利、版权解决方案及品牌布局策划。服务过中交隧道工程局有限公司、万丰集团等。',
                    'img': require('../../static/images/channel/lixiangyang.jpg')
                },
                {
                    'id': 5,
                    'name': '刘静静',
                    'field': '国内外商标注册、交易、版权、国内外专利等',
                    'desc': '中细软高级知识产权顾问，曾为多家大型企业做知识产权的分析和策划，并为客户更好的维护企业的发展。',
                    'img': require('../../static/images/channel/liujingjing.jpg')
                },
                {
                    'id': 6,
                    'name': '刘晓娟',
                    'field': '驳回复审、异议/无效宣告申请及答辩',
                    'desc': '中细软高级知识产权顾问，已为上千家企业及个人提供知识产权服务及优质解决方案，代理商标注册达上万件。',
                    'img': require('../../static/images/channel/liuxiaojuan.jpg')
                }
            ],
            // seoList: [],
            url: '/sbfw',
            // registName: '',
            // changeName: '',
            // replyName: '',
            // reviewName: '',
            // otherName: ''
        }
    },
    // created(){
    //     var _this = this;
    //     // 商标注册
    //     postFn('/product/product/infos', {'product_ids': this.registId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.registList = list;
    //         }
    //     });
    //     // 商标变更
    //     postFn('/product/product/infos', {'product_ids': this.changeId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.changeList = list;
    //         }
    //     });
    //     // 商标答辩
    //     postFn('/product/product/infos', {'product_ids': this.replyId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.replyList = list;
    //         }
    //     });
    //     // 商标复审
    //     postFn('/product/product/infos', {'product_ids': this.reviewId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.reviewList = list;
    //         }
    //     });
    //     // 商标其他
    //     postFn('/product/product/infos', {'product_ids': this.otherId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.otherList = list;
    //         }
    //     });
    //     // 商标seo列表 有问题
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'sbfw'}, function(res){
	// 		if(res.data.code == 200){
    //             var list = res.data.data[0]; // 从一级栏目开始
    //             var columnFirst = list.next_column;
    //             columnFirst != "" && columnFirst.forEach(function(element, index){
    //                 if(index < 4){
    //                     postFn('/content/article/getShortList', {'type': 2, 'columnUrl': element.url}, function(result){
    //                         if(result.data.code == 200){
    //                             element['list'] = result.data.data;
    //                             seoList.push(element);
    //                         }
    //                     });
    //                 }
    //             });
    //             _this.seoList = seoList;
	// 		}
    //     });
    //     // 商标注册名字
    //     postFn('/product/category/info', {'cat_id': 176}, function(res){
    //         if(res.data.code == 200){
    //             _this.registName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标变更名字
    //     postFn('/product/category/info', {'cat_id': 180}, function(res){
    //         if(res.data.code == 200){
    //             _this.changeName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标答辩名字
    //     postFn('/product/category/info', {'cat_id': 179}, function(res){
    //         if(res.data.code == 200){
    //             _this.replyName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标复审名字
    //     postFn('/product/category/info', {'cat_id': 178}, function(res){
    //         if(res.data.code == 200){
    //             _this.reviewName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标其他名字
    //     postFn('/product/category/info', {'cat_id': 177}, function(res){
    //         if(res.data.code == 200){
    //             _this.otherName = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        registList(){
			return this.$store.state.serviceChannel.registList;
        },
        changeList(){
			return this.$store.state.serviceChannel.changeList;
        },
        replyList(){
			return this.$store.state.serviceChannel.replyList;
        },
        reviewList(){
			return this.$store.state.serviceChannel.reviewList;
        },
        otherList(){
			return this.$store.state.serviceChannel.otherList;
        },
        seoList(){
			return this.$store.state.serviceChannel.seoList;
        },
        registName(){
			return this.$store.state.serviceChannel.registName;
        },
        changeName(){
			return this.$store.state.serviceChannel.changeName;
        },
        replyName(){
			return this.$store.state.serviceChannel.replyName;
        },
        reviewName(){
			return this.$store.state.serviceChannel.reviewName;
        },
        otherName(){
			return this.$store.state.serviceChannel.otherName;
		},
    },
    methods: {
        
    },
    components: {
        top,
        headPart,
        navigate,
        pagination,
        bottom,
        foot,
        fixedPart,
        // floor,
        mtitle,
        list,
        trade,
        team,
        flow
    }
}
</script>

<style lang="scss">
$main-color: #333;
.bg-color{
    padding-bottom: 80px;
    background-color: #fafafa;
}
.page-channel{
    overflow: hidden;
    .banner_sb{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_sb.jpg) center center no-repeat;
    }
}
</style>