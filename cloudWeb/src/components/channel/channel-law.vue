<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_fl">
        <!-- <img src="../../static/images/channel/banner_fl.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="lawName" :cateInfo="sortInfo03"></mtitle>
                <list type="ordinary" :infoList="lawList"></list>
            </div>
            <div id="change">
                <mtitle type="ordinary" :content="law01Name" :cateInfo="sortInfo01"></mtitle>
                <list type="d-across" :infoList="law01List" :img="law01Img"></list>
            </div>
            <div id="compete">
                <mtitle type="ordinary" :content="law02Name" :cateInfo="sortInfo02"></mtitle>
                <list type="d-across" :infoList="law02List" :img="law02Img"></list>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='fl'></flow>
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

import { GET_LAWLIST } from './module-channel-law'
import { GET_LAW01LIST } from './module-channel-law'
import { GET_lAW02LIST } from './module-channel-law'
import { GET_LAWSEOLIST } from './module-channel-law'
import { GET_LAWTNAME } from './module-channel-law'
import { GET_LAW01TNAME } from './module-channel-law'

import { GET_LAW02TNAME } from './module-channel-law'


export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_LAWLIST),
                store.dispatch(GET_LAW01LIST),
                store.dispatch(GET_lAW02LIST),
                store.dispatch(GET_LAWSEOLIST),
                store.dispatch(GET_LAWTNAME),
                store.dispatch(GET_LAW01TNAME),
                store.dispatch(GET_LAW02TNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '法律文书_法律咨询_法律服务_商标侵权诉讼-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式法律服务,专业提供法律文书,法律咨询,法律服务,商标侵权诉讼,律师在线咨询等服务,,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '法律文书,法律咨询,法律服务,商标侵权诉讼,律师在线咨询'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            lawId: ['43', '77', '44', '46', '45'],
            law01Id: ['47', '74'],
            law02Id: ['75', '76'],
            // lawName: '',
            // law01Name: '',
            // law02Name: '',
            // lawList: [],
            // law01List: [],
            // law02List: [],
            law01Img: require('../../static/images/channel/law01.jpg'),
            law02Img: require('../../static/images/channel/law02.jpg'),
            team: [
                {
                    'id': 1,
                    'name': '黄莉凌',
                    'field': '企业并购重组、房地产开发与建设工程',
                    'desc': '中细软律师事务所高级合伙人，著名资深律师；中央电视台《法律讲堂》栏目主讲人，也曾任众多法律节目嘉宾及评论员。',
                    'img': require('../../static/images/channel/huangliling.jpg')
                },
                {
                    'id': 2,
                    'name': '崔保国',
                    'field': '公司法和民商法',
                    'desc': '中细软律师事务所高级合伙人，北京市律师协会建设工程法律专业委员会委员，擅长诉讼、仲裁和非讼法律服务。',
                    'img': require('../../static/images/channel/cuibaoguo.jpg')
                },
                {
                    'id': 3,
                    'name': '侯伟',
                    'field': '知识产权诉讼和民商事诉讼',
                    'desc': '中细软资深知识产权律师，第三届房山区律师代表大会代表，曾任职公检法机关，代理上千件知识产权案件。',
                    'img': require('../../static/images/channel/houwei.jpg')
                },
                {
                    'id': 4,
                    'name': '刘海英',
                    'field': '知识产权和其他民商事法律实务',
                    'desc': '中细软律师事务所合伙人，曾任职北京多家大型律师事务所，拥有十多年执业经验，擅长知识产权和其他民商事法律事务。',
                    'img': require('../../static/images/channel/liuhaiying.jpg')
                },
                {
                    'id': 5,
                    'name': '石倩',
                    'field': '商标确权授权、商标维权、企业维权、合同风险',
                    'desc': '中细软律师事务所资深知识产权律师，在商标确权授权、商标维权、企业维权及合同风险等方面经验丰富。',
                    'img': require('../../static/images/channel/shiqian.jpg')
                },
                {
                    'id': 6,
                    'name': '尹慧斌',
                    'field': '知识产权、公司事务、投资融资、劳资纠纷',
                    'desc': '中细软律师事务所合伙人，中华全国律师协会会员，专注于知识产权、公司事务、投资融资、劳资纠纷、房地产等领域。',
                    'img': require('../../static/images/channel/yinhuibin.jpg')
                }
            ],
            // seoList: [],
            url: '/flfw',
            sortInfo01: {
                pcat_id: '174',
                cat_id: '192',
                pname: '法律服务',
                name: '法律文书制作'
            },
            sortInfo02: {
                pcat_id: '174',
                cat_id: '193',
                pname: '法律服务',
                name: '不正当竞争诉讼'
            },
            sortInfo03: {
                pcat_id: '174',
                cat_id: '198',
                pname: '法律服务',
                name: '商标民事侵权纠纷'
            }
        }
    },
    // created(){
    //     var _this = this;
    //     // 01
    //     postFn('/product/product/infos', {'product_ids': this.lawId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.lawList = list;
    //         }
    //     });
    //     // 02
    //     postFn('/product/product/infos', {'product_ids': this.law01Id.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.law01List = list;
    //         }
    //     });
    //     // 03
    //     postFn('/product/product/infos', {'product_ids': this.law02Id.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.law02List = list;
    //         }
    //     });
    //     // 法律seo列表
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'flfw'}, function(res){
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
    //     // 知识产权民事侵权诉讼名字
    //     postFn('/product/category/info', {'cat_id': 198}, function(res){
    //         if(res.data.code == 200){
    //             _this.lawName = res.data.data.cat_name;
    //         }
    //     });
    //     // 法律文书制作名字
    //     postFn('/product/category/info', {'cat_id': 192}, function(res){
    //         if(res.data.code == 200){
    //             _this.law01Name = res.data.data.cat_name;
    //         }
    //     });
    //     // 不正当竞争诉讼名字
    //     postFn('/product/category/info', {'cat_id': 193}, function(res){
    //         if(res.data.code == 200){
    //             _this.law02Name = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        lawList(){
			return this.$store.state.serviceChannelLaw.lawList;
        },
        law01List(){
			return this.$store.state.serviceChannelLaw.law01List;
        },
        law02List(){
			return this.$store.state.serviceChannelLaw.law02List;
        },
        seoList(){
			return this.$store.state.serviceChannelLaw.lawSeoList;
        },
        lawName(){
			return this.$store.state.serviceChannelLaw.lawName;
        },
        law01Name(){
			return this.$store.state.serviceChannelLaw.law01Name;
        },
        law02Name(){
			return this.$store.state.serviceChannelLaw.law02Name;
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
    .banner_fl{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_fl.jpg) center center no-repeat;
    }
}
</style>