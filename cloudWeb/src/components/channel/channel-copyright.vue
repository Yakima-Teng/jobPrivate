<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_bq" >
        <!-- <img src="../../static/images/channel/banner_bq.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="softName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="softList"></list>
            </div>
            <div id="review">
                <mtitle type="ordinary" :content="worksName" :cateInfo="sortInfo02"></mtitle>
                <list type="ordinary" :infoList="worksList"></list>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='bq'></flow>
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

import { GET_SOFTLIST } from './module-channel-copyright'
import { GET_WORKSLIST } from './module-channel-copyright'
import { GET_COPYRIGHTSEOLIST } from './module-channel-copyright'
import { GET_SOFTNAME } from './module-channel-copyright'
import { GET_WORKSNAME } from './module-channel-copyright'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_SOFTLIST),
                store.dispatch(GET_WORKSLIST),
                store.dispatch(GET_COPYRIGHTSEOLIST),
                store.dispatch(GET_SOFTNAME),
                store.dispatch(GET_WORKSNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '软件著作权登记_作品著作权登记_版权登记_音乐版权登记-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式版权服务,专业提供软件著作权登记,作品著作权登记,版权注册,著作权查询,版权登记,音乐版权登记等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '软件著作权登记,作品著作权登记,版权登记,版权注册,音乐版权登记'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            softId: ['28', '56', '102', '55', '53'],
            worksId: ['30', '157', '158', '159', '160'],
            // softList: [],
            // worksList: [],
            // softName: '',
            // worksName: '',
            team: [
                {
                    'id': 1,
                    'name': '郑晓雪',
                    'field': '原创作品版权登记、软件著作权登记等',
                    'desc': '丰富的版权确权、维权经验，曾为多家软件技术企业及高校提供版权保护方案，包括海航通信有限公司、北京科技大学等。',
                    'img': require('../../static/images/channel/zhengxiaoxue.jpg')
                },
                {
                    'id': 2,
                    'name': '朱峰峰',
                    'field': '商标、专利、版权、知产交易',
                    'desc': '中细软集团高级知识产权顾问，曾为多家大型企业、高校提供商标注册、专利申请、版权登记、知识产权的交易等服务。',
                    'img': require('../../static/images/channel/zhufengfeng.jpg')
                },
                {
                    'id': 3,
                    'name': '赵兰兰',
                    'field': '商标、专利、版权、诉讼',
                    'desc': '中细软集团资深知识产权顾问，曾为多家大型企业提供长期咨询、战略布局等知产服务，帮助企业分析确权和维权策略。',
                    'img': require('../../static/images/channel/zhaolanlan.jpg')
                },
                {
                    'id': 4,
                    'name': '李攀高',
                    'field': '国内外商标注册、版权、国内外专利等',
                    'desc': '擅长企业品牌规划、商标、版权、专利布局，曾服务过中国农科院、鄂尔多斯集团、中南大学等知名企业院所',
                    'img': require('../../static/images/channel/lipangao.jpg')
                },
                {
                    'id': 5,
                    'name': '朱思远',
                    'field': '著作权领域、商标确权、交易',
                    'desc': '中细软集团高级知识产权顾问/商标代理人，曾为中国气象服务协会、北京青年旅行社等多家大型企业提供知识产权服务。。',
                    'img': require('../../static/images/channel/zhusiyuan.jpg')
                },
                {
                    'id': 6,
                    'name': '朱斯林',
                    'field': '商标、专利、版权、国际知识产权业务',
                    'desc': '凭借细致专业的服务赢得客户一致好评，曾服务过申通快递、青岛海尔股份有限公司、四季沐歌、人和未来等众多企业。',
                    'img': require('../../static/images/channel/zhusilin.jpg')
                }
            ],
            // seoList: [],
            url: '/bqfw',
            sortInfo01: {
                pcat_id: '149',
                cat_id: '181',
                pname: '版权服务',
                name: '软件著作权登记'
            },
            sortInfo02: {
                pcat_id: '149',
                cat_id: '182',
                pname: '版权服务',
                name: '作品著作权登记'
            }
        }
    },
    // created(){
    //     var _this = this;
    //     // 软件名字
    //     postFn('/product/category/info', {'cat_id': 181}, function(res){
    //         if(res.data.code == 200){
    //             _this.softName = res.data.data.cat_name;
    //         }
    //     });
    //     // 作品名字
    //     postFn('/product/category/info', {'cat_id': 182}, function(res){
    //         if(res.data.code == 200){
    //             _this.worksName = res.data.data.cat_name;
    //         }
    //     });
    //     // 软件
    //     postFn('/product/product/infos', {'product_ids': this.softId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.softList = list;
    //         }
    //     });
    //     // 作品
    //     postFn('/product/product/infos', {'product_ids': this.worksId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.worksList = list;
    //         }
    //     });
    //     // 版权seo列表
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'bqfw'}, function(res){
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
    // },
    computed: {
        softList(){
			return this.$store.state.serviceChannelCopyright.softList;
        },
        worksList(){
			return this.$store.state.serviceChannelCopyright.worksList;
        },
        seoList(){
			return this.$store.state.serviceChannelCopyright.copyrightSeoList;
        },
        softName(){
			return this.$store.state.serviceChannelCopyright.softName;
        },
        worksName(){
			return this.$store.state.serviceChannelCopyright.worksName;
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
    .banner_bq{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_bq.jpg) center center no-repeat;
    }
}
</style>