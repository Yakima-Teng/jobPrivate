<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_qy">
        <!-- <img src="../../static/images/channel/banner_qy.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="zizhiName" :cateInfo="sortInfo04"></mtitle>
                <list type="ordinary" :infoList="zizhiList"></list>
            </div>
            <div id="review">
                <mtitle type="ordinary" :content="gshName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="gshList"></list>
            </div>
            <div id="reply">
                <mtitle type="ordinary" :content="gxrdName" :cateInfo="sortInfo02"></mtitle>
                <list  type="ordinary-img" :infoList="gxrdList" :img="gxrdImg"></list>
            </div>
            <div id="change">
                <mtitle type="ordinary" :content="zcpgName" :cateInfo="sortInfo03"></mtitle>
                <list type="d-across" :infoList="zcpgList" :img="zcpgImg"></list>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='qy'></flow>
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
import pagination from '../common/pagination.vue'
import bottom from '../common/bottom.vue'
import foot from '../common/foot.vue'
import fixedPart from '../index/fixed.vue'
import mtitle from '../common/channel/title.vue'
import list from '../common/channel/list.vue'
import trade from '../common/channel/trade.vue'
import team from '../common/channel/team.vue'
import flow from '../common/channel/flow.vue'

import {postFn} from '../../static/js/util.js'

import { GET_ZIZHILIST } from './module-channel-enterprise'
import { GET_GSHLIST } from './module-channel-enterprise'
import { GET_GXRDLIST } from './module-channel-enterprise'
import { GET_ZCPGLIST } from './module-channel-enterprise'
import { GET_ENTERPRISELSEOLIST } from './module-channel-enterprise'
import { GET_ZIZHINAME } from './module-channel-enterprise'
import { GET_GSHNAME } from './module-channel-enterprise'
import { GET_GXRDNAME } from './module-channel-enterprise'
import { GET_ZCPGNAME } from './module-channel-enterprise'
export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_ZIZHILIST),
                store.dispatch(GET_GSHLIST),
                store.dispatch(GET_GXRDLIST),
                store.dispatch(GET_ZCPGLIST),
                store.dispatch(GET_ENTERPRISELSEOLIST),
                store.dispatch(GET_ZIZHINAME),
                store.dispatch(GET_GSHNAME),
                store.dispatch(GET_GXRDNAME),
                store.dispatch(GET_ZCPGNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '高新认定_知识产权评估_ICP备案_ISO认证-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式企业服务,专业提供高新认定,知识产权评估,ICP备案,ISO认证,知识产权贯标等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '高新认定,知识产权评估,ICP备案,ISO认证,知识产权贯标'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            zizhiId: ['69', '70', '71', '72', '73'],
            gshId: ['62', '63', '64', '65', '66'],
            gxrdId: ['59', '42', '60', '61'],
            zcpgId: ['67', '68'],
            // zizhiList: [],
            // zizhiName: '',
            // gshName: '',
            // gxrdName: '',
            // zcpgName: '',
            // zizhiList: [],
            // gshList: [],
            // gxrdList: [],
            // zcpgList: [],
            gxrdImg: require('../../static/images/channel/gxrd.jpg'),
            zcpgImg: require('../../static/images/channel/zcpg.jpg'),
            team: [
                {
                    'id': 1,
                    'name': '焦丙辉',
                    'field': '国家高新、中关村高新、双软评估等',
                    'desc': '在高新技术企业认定、双软评估、科技项目申报领域有多年实战经验，曾服务过中国航天科工集团第三研究院、北京特种机械研究所。',
                    'img': require('../../static/images/channel/jiaobinghui.jpg')
                },
                {
                    'id': 2,
                    'name': '苗亚静',
                    'field': '高新申请、双软评估、新技术新产品认定',
                    'desc': '在高新技术企业认定、中关村高新、双软评估、新技术新产品认定等领域有丰富的经验，曾服务过同方工业、龙建集团等企业。',
                    'img': require('../../static/images/channel/miaoyajing.jpg')
                },
                {
                    'id': 3,
                    'name': '李倩倩',
                    'field': '公司成立及变更、税收筹划，代理记账等',
                    'desc': '曾为多家大型企业的成立与变更、疑难注销、异常移除等问题提供优质解决方案，服务行业涵盖金融、互联网、教育、投资等。',
                    'img': require('../../static/images/channel/liqianqian.jpg')
                },
                {
                    'id': 4,
                    'name': '路菲',
                    'field': '工商注册、工商变更、工商注销、企业异常处理',
                    'desc': '工商财税顾问，主要擅长内资/外资/合资公司注册、股权变更、企业增资、企业迁址与变更、企业注销、企业异常处理等。',
                    'img': require('../../static/images/channel/lufei.jpg')
                },
                {
                    'id': 5,
                    'name': '周曌玥',
                    'field': '知识产权分析、布局、管理和保护领域',
                    'desc': '知识产权高级运营经理、贯标内审员；专注于企业知产管理、法律风险防范；可为企业量身定制适合未来战略发展的知产策略及布局。',
                    'img': require('../../static/images/channel/zhouzhaoyue.jpg')
                },
                {
                    'id': 6,
                    'name': '张杰',
                    'field': '商标复审、异议、无效等复杂案件处理',
                    'desc': '中细软资深知识产权顾问，十余年的从业经验，曾就职于国家工商总局商标评审委员会。曾服务过宝能集团、衡水老白干集团等。',
                    'img': require('../../static/images/channel/zhangjie.jpg')
                }
            ],
            // seoList: [],
            url: '/qyfw',
            sortInfo01: {
                pcat_id: '175',
                cat_id: '194',
                pname: '企业服务',
                name: '工商财税'
            },
            sortInfo02: {
                pcat_id: '175',
                cat_id: '195',
                pname: '企业服务',
                name: '高新认定'
            },
            sortInfo03: {
                pcat_id: '175',
                cat_id: '196',
                pname: '企业服务',
                name: '知识产权评估'
            },
            sortInfo04: {
                pcat_id: '175',
                cat_id: '197',
                pname: '企业服务',
                name: '资质认证'
            }
        }
    },
    // created(){
    //     var _this = this;
    //     // 资质
    //     postFn('/product/product/infos', {'product_ids': this.zizhiId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.zizhiList = list;
    //         }
    //     });
    //     // 工商
    //     postFn('/product/product/infos', {'product_ids': this.gshId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.gshList = list;
    //         }
    //     });
    //     // 高新
    //     postFn('/product/product/infos', {'product_ids': this.gxrdId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.gxrdList = list;
    //         }
    //     });
    //     // 知识产权评估
    //     postFn('/product/product/infos', {'product_ids': this.zcpgId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.zcpgList = list;
    //         }
    //     });
    //     // 企业seo列表
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'qyfw'}, function(res){
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
    //     // 资质名字
    //     postFn('/product/category/info', {'cat_id': 197}, function(res){
    //         if(res.data.code == 200){
    //             _this.zizhiName = res.data.data.cat_name;
    //         }
    //     });
    //     // 工商名字
    //     postFn('/product/category/info', {'cat_id': 194}, function(res){
    //         if(res.data.code == 200){
    //             _this.gshName = res.data.data.cat_name;
    //         }
    //     });
    //     // 高新名字
    //     postFn('/product/category/info', {'cat_id': 195}, function(res){
    //         if(res.data.code == 200){
    //             _this.gxrdName = res.data.data.cat_name;
    //         }
    //     });
    //     // 知识产权评估名字
    //     postFn('/product/category/info', {'cat_id': 196}, function(res){
    //         if(res.data.code == 200){
    //             _this.zcpgName = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        zizhiList(){
			return this.$store.state.serviceChannelEnterprise.zizhiList;
        },
        gshList(){
			return this.$store.state.serviceChannelEnterprise.gshList;
        },
        gxrdList(){
			return this.$store.state.serviceChannelEnterprise.gxrdList;
        },
        zcpgList(){
			return this.$store.state.serviceChannelEnterprise.zcpgList;
        },
        seoList(){
			return this.$store.state.serviceChannelEnterprise.enterpriseSeoList;
        },
        zizhiName(){
			return this.$store.state.serviceChannelEnterprise.zizhiName;
        },
        gshName(){
			return this.$store.state.serviceChannelEnterprise.gshName;
        },
        gxrdName(){
			return this.$store.state.serviceChannelEnterprise.gxrdName;
        },
        zcpgName(){
			return this.$store.state.serviceChannelEnterprise.zcpgName;
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
    .banner_qy{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_qy.jpg) center center no-repeat;
    }
}
</style>