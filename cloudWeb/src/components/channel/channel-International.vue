<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_gj">
        <!-- <img src="../../static/images/channel/banner_gj.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="company">
                <mtitle type="ordinary" :content="companyName" :cateInfo="sortInfo03"></mtitle>
                <list type="ordinary" :infoList="companyList"></list>
            </div>
            <div id="brand">
                <mtitle type="ordinary" :content="brandName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="brandList"></list>
            </div>
            <div id="patent">
                <mtitle type="ordinary" :content="patentName" :cateInfo="sortInfo02"></mtitle>
                <list type="d-across" :infoList="patentList" :img="patentImg"></list>
            </div>
            <!-- <div id="other">
                <mtitle type="ordinary" content="商标其他服务"></mtitle>
                <list  type="ordinary-img"></list>
            </div> -->
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type="gj"></flow>
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


import { GET_COMPANYLIST } from './module-channel-international'
import { GET_BRANDLIST } from './module-channel-international'
import { GET_PATENTLIST } from './module-channel-international'
import { GET_INTERNATIONALSEOLIST } from './module-channel-international'
import { GET_COMPANYNAME } from './module-channel-international'
import { GET_BRANDNAME } from './module-channel-international'
import { GET_PATENTNAME } from './module-channel-international'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_COMPANYLIST),
                store.dispatch(GET_BRANDLIST),
                store.dispatch(GET_PATENTLIST),
                store.dispatch(GET_INTERNATIONALSEOLIST),
                store.dispatch(GET_COMPANYNAME),
                store.dispatch(GET_BRANDNAME),
                store.dispatch(GET_PATENTNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '国际商标注册_国际商标查询_国际专利查询_国际公司注册-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式国际服务,专业提供国际商标注册,国际商标查询,国际专利查询,国际公司注册,国际专利申请等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '国际商标注册,国际商标查询,国际专利查询,国际公司注册,国际专利申请'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            companyId: ['92', '93', '94', '95', '96'],
            brandId: ['40', '97', '98', '99', '100'],
            patentId: ['39','101'],
            // companyList: [],
            // brandList: [],
            // patentList: [],
            // companyName: '',
            // brandName: '',
            // patentName: '',
            patentImg: require('../../static/images/channel/patent.jpg'),
            team: [
                {
                    'id': 1,
                    'name': '陈影',
                    'field': '涉外商标的确权及维权等',
                    'desc': '专业涉外商标代理人，专注于涉外商标申请、续展、转让等，代理案件超过2000例，涉及30多个国家。',
                    'img': require('../../static/images/channel/chenying.jpg')
                },
                {
                    'id': 2,
                    'name': '贺帅',
                    'field': '国际商标确权监控与运营、有偿转让谈判',
                    'desc': '拥有九年涉外商标实务操作经验。曾服务过蒙牛、吉利、江中集团、喜之郎、鸿星尔克、我爱我家等诸多知名企业。',
                    'img': require('../../static/images/channel/heshuai.jpg')
                },
                {
                    'id': 3,
                    'name': '宋琴',
                    'field': '海外公司业务、涉外商标、国际品牌建设规划',
                    'desc': '海外公司产品线负责人，协助国际品牌建设，至今已代理全球各类型商标及海外公司案件1500余件。',
                    'img': require('../../static/images/channel/songqin.jpg')
                },
                {
                    'id': 4,
                    'name': '苏斌',
                    'field': '涉外知识产权保护与布局等',
                    'desc': '从事国际知识产权服务10余年，熟悉各国知识产权法律，专注于国际商标战略规划。曾服务过ARMANI、倍耐力等。',
                    'img': require('../../static/images/channel/subin.jpg')
                },
                {
                    'id': 5,
                    'name': '郑和平',
                    'field': '国际商标申请、驳回复审、异议答辩/撤销等',
                    'desc': '专业涉外商标代理人，擅长国际商标确权维权。在马德里、单一国家商标申请及驳回复审/异议答辩领域有较丰富的经验。',
                    'img': require('../../static/images/channel/zhengheping.jpg')
                },
                {
                    'id': 6,
                    'name': '郭冠亚',
                    'field': '国际专利',
                    'desc': '熟悉中国、美国、欧洲地区、日本、韩国等国专利制度，曾服务过联想企业解决方案(新加坡)有限公司、京东方等。',
                    'img': require('../../static/images/channel/guoguanya.jpg')
                }
            ],
            // seoList: [],
            url: '/gjfw',
            sortInfo01: {
                pcat_id: '172',
                cat_id: '185',
                pname: '国际服务',
                name: '国际商标服务'
            },
            sortInfo02: {
                pcat_id: '172',
                cat_id: '186',
                pname: '国际服务',
                name: '国际专利服务'
            },
            sortInfo03: {
                pcat_id: '172',
                cat_id: '187',
                pname: '国际服务',
                name: '国际公司服务'
            }
        }
    },
    // created(){
    //     var _this = this;
    //     // 公司
    //     postFn('/product/product/infos', {'product_ids': this.companyId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.companyList = list;
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
    //     // 专利
    //     postFn('/product/product/infos', {'product_ids': this.patentId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.patentList = list;
    //         }
    //     });
    //     // 国际seo列表
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'gjfw'}, function(res){
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
    //     // 公司名字
    //     postFn('/product/category/info', {'cat_id': 187}, function(res){
    //         if(res.data.code == 200){
    //             _this.companyName = res.data.data.cat_name;
    //         }
    //     });
    //     // 商标名字
    //     postFn('/product/category/info', {'cat_id': 185}, function(res){
    //         if(res.data.code == 200){
    //             _this.brandName = res.data.data.cat_name;
    //         }
    //     });
    //     // 专利名字
    //     postFn('/product/category/info', {'cat_id': 186}, function(res){
    //         if(res.data.code == 200){
    //             _this.patentName = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        companyList(){
			return this.$store.state.serviceChannelInternational.companyList;
        },
        brandList(){
			return this.$store.state.serviceChannelInternational.brandList;
        },
        patentList(){
			return this.$store.state.serviceChannelInternational.patentList;
        },
        seoList(){
			return this.$store.state.serviceChannelInternational.internationalSeoList;
        },
        companyName(){
			return this.$store.state.serviceChannelInternational.companyName;
        },
        brandName(){
			return this.$store.state.serviceChannelInternational.brandName;
        },
        patentName(){
			return this.$store.state.serviceChannelInternational.patentName;
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
    .banner_gj{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_gj.jpg) center center no-repeat;
    }
}
</style>