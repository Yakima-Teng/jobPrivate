<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_sj">
        <!-- <img src="../../static/images/channel/banner_sj.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="baseName" :cateInfo="sortInfo02"></mtitle>
                <list type="ordinary" :infoList="baseList"></list>
            </div>
            <div id="change">
                <mtitle type="ordinary" :content="flatName" :cateInfo="sortInfo03"></mtitle>
                <list type="d-across" :infoList="flatList" :img="flatImg"></list>
            </div>
            <div id="review">
                <mtitle type="ordinary" :content="brandName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="brandList"></list>
            </div>
            <div id="reply">
                <mtitle type="ordinary" :content="webName" :cateInfo="sortInfo04"></mtitle>
                <list  type="ordinary" :infoList="webList"></list>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='sj'></flow>
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

import { GET_BASELIST } from './module-channel-design'
import { GET_FLATLIST } from './module-channel-design'
import { GET_BRANDLIST } from './module-channel-design'
import { GET_WEBLIST } from './module-channel-design'
import { GET_DESIGNSEOLIST } from './module-channel-design'
import { GET_BASENAME } from './module-channel-design'
import { GET_FLATNAME } from './module-channel-design'
import { GET_BRANDNAME } from './module-channel-design'
import { GET_WEBNAME } from './module-channel-design'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_BASELIST),
                store.dispatch(GET_FLATLIST),
                store.dispatch(GET_BRANDLIST),
                store.dispatch(GET_WEBLIST),
                store.dispatch(GET_DESIGNSEOLIST),
                store.dispatch(GET_BASENAME),
                store.dispatch(GET_FLATNAME),
                store.dispatch(GET_BRANDNAME),
                store.dispatch(GET_WEBNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: 'logo设计_vi设计_网页设计_商标设计-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式设计服务,专业提供VI基础设计,logo设计,vi设计,网页设计,商标设计等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: 'VI基础设计,logo设计,vi设计,网页设计,商标设计'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            baseId: ['34','81', '82', '83', '84'],
            flatId:['85', '86'],
            brandId:['31', '78', '79', '80', '41'],
            webId: ['87', '88', '89', '90', '91'],
            // baseList: [],
            // flatList: [],
            // brandList: [],
            // webList: [],
            // baseName: '',
            // flatName: '',
            // brandName: '',
            // webName: '',
            flatImg: require('../../static/images/channel/flat.jpg'),
            team: [
                {
                    'id': 1,
                    'name': '尚朋立',
                    'field': '企业建站、小程序/微信公众号搭建、APP开发、店铺装修',
                    'desc': '网站建设、网络营销推广专家，专注于中小型企业及个体电商互联网发展进行规划与指导，并提供专业的互联网定制方案。',
                    'img': require('../../static/images/channel/shangpengli.jpg')
                },
                {
                    'id': 2,
                    'name': '郭灵果',
                    'field': '域名注册、小程序/微信公众号搭建、APP开发、店铺装修',
                    'desc': '曾为众多大中型企业及互联网平台提供建站服务。服务过北京嘉孚科技有限公司、广州龙凤食品有限公司等。',
                    'img': require('../../static/images/channel/guolingguo.jpg')
                },
                {
                    'id': 3,
                    'name': '任子玉',
                    'field': '互联网开发',
                    'desc': '网站部资深顾问专家，曾为多家公司撰写出优秀的行业软件解决方案并帮助企业解决互联网难做、如何做大品牌等困扰。',
                    'img': require('../../static/images/channel/renziyu.jpg')
                },
                {
                    'id': 4,
                    'name': '高仲弘',
                    'field': '商标设计、平面设计',
                    'desc': '专注于品牌设计和用户研究，能够凭借对企业形态的理解及敏锐的市场洞察力，准确挖掘客户需求、提供超预期的服务。',
                    'img': require('../../static/images/channel/gaozhonghong.jpg')
                },
                {
                    'id': 5,
                    'name': '甘世贤',
                    'field': '商标设计、平面设计',
                    'desc': '擅长品牌设计、全案开发、产品包装等领域，曾为国家电网、中铁十六局等多家知名企业量身定制品牌形象提升策划方案。',
                    'img': require('../../static/images/channel/ganshixian.jpg')
                },
                {
                    'id': 6,
                    'name': '高林',
                    'field': '商标设计、平面设计',
                    'desc': '专注于平面设计，能够准确把握企业在品牌设计与应用中的诉求。熟悉业界行情，擅长企业品牌宣传、品牌包装设计等。',
                    'img': require('../../static/images/channel/gaolin.jpg')
                }
            ],
            // seoList: [],
            url: '/sjfw',
            sortInfo01: {
                pcat_id: '173',
                cat_id: '188',
                pname: '设计服务',
                name: '商标设计'
            },
            sortInfo02: {
                pcat_id: '173',
                cat_id: '189',
                pname: '设计服务',
                name: 'VI基础设计'
            },
            sortInfo03: {
                pcat_id: '173',
                cat_id: '190',
                pname: '设计服务',
                name: '平面设计'
            },
            sortInfo04: {
                pcat_id: '173',
                cat_id: '191',
                pname: '设计服务',
                name: '网站设计开发'
            }
        }
    },
    // created(){
    //     var _this = this;
    //     // VI基础
    //     postFn('/product/product/infos', {'product_ids': this.baseId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.baseList = list;
    //         }
    //     });
    //     // 平面
    //     postFn('/product/product/infos', {'product_ids': this.flatId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.flatList = list;
    //         }
    //     });
    //     // 商标
    //     postFn('/product/product/infos', {'product_ids': this.brandId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.brandList = list;
    //         }
    //     });
    //     // 网站
    //     postFn('/product/product/infos', {'product_ids': this.webId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.webList = list;
    //             console.log(_this.webList,"=>_this.webList");
    //         }
    //     });
    //     // 设计seo列表
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'sjfw'}, function(res){
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
    //     // VI基础名字
    //     postFn('/product/category/info', {'cat_id': 189}, function(res){
    //         if(res.data.code == 200){
    //             _this.baseName = res.data.data.cat_name;
    //         }
    //     });
    //     // 平面名字
    //     postFn('/product/category/info', {'cat_id': 190}, function(res){
    //         if(res.data.code == 200){
    //             _this.flatName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标名字
    //     postFn('/product/category/info', {'cat_id': 188}, function(res){
    //         if(res.data.code == 200){
    //             _this.brandName = res.data.data.cat_name;
    //         }
    //     });
    //     // 网站名字
    //     postFn('/product/category/info', {'cat_id': 191}, function(res){
    //         if(res.data.code == 200){
    //             _this.webName = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        baseList(){
			return this.$store.state.serviceChannelDesign.baseList;
        },
        flatList(){
			return this.$store.state.serviceChannelDesign.flatList;
        },
        brandList(){
			return this.$store.state.serviceChannelDesign.brandList;
        },
        webList(){
			return this.$store.state.serviceChannelDesign.webList;
        },
        seoList(){
			return this.$store.state.serviceChannelDesign.designSeoList;
        },
        baseName(){
			return this.$store.state.serviceChannelDesign.baseName;
        },
        flatName(){
			return this.$store.state.serviceChannelDesign.flatName;
        },
        brandName(){
			return this.$store.state.serviceChannelDesign.brandName;
        },
        webName(){
			return this.$store.state.serviceChannelDesign.webName;
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

<style lang="scss" >
$main-color: #333;
.bg-color{
    padding-bottom: 80px;
    background-color: #fafafa;
}
.page-channel{
    overflow: hidden;
    .banner_sj{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_sj.jpg) center center no-repeat;
    }
}
</style>