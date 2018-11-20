<template>
<div class="page-channel">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <div class="banner_zl">
        <!-- <img src="../../static/images/channel/banner_zl.jpg"/> -->
    </div>
    <div class="bg-color">
        <div class="w1190 bg">
            <div id="regist">
                <mtitle type="ordinary" :content="inventName" :cateInfo="sortInfo02"></mtitle>
                <list type="ordinary-img" :infoList="inventList" :img="inventImg"></list>
            </div>
            <div id="review">
                <mtitle type="ordinary" :content="practicalName" :cateInfo="sortInfo01"></mtitle>
                <list type="ordinary" :infoList="practicalList"></list>
            </div>
            <div id="reply">
                <mtitle type="ordinary" :content="outwardName" :cateInfo="sortInfo03"></mtitle>
                <list  type="ordinary-img" :infoList="outwardList"></list>
            </div>
            <div id="team">
                <mtitle type="ordinary" content="专家团队" :isMore="isMore"></mtitle>
                <team :team="team"></team>
            </div>
            <flow v-if="seoList.length" :seoList="seoList" :url="url" type='zl'></flow>
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

import { GET_INVENTLIST } from './module-channel-patent'
import { GET_PRACTICALLIST } from './module-channel-patent'
import { GET_OUTWARDLIST } from './module-channel-patent'
import { GET_PATENTSEOLIST } from './module-channel-patent'
import { GET_INVENTNAME } from './module-channel-patent'
import { GET_PRACTICALNAME } from './module-channel-patent'
import { GET_OUTWARDNAME } from './module-channel-patent'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_INVENTLIST),
                store.dispatch(GET_PRACTICALLIST),
                store.dispatch(GET_OUTWARDLIST),
                store.dispatch(GET_PATENTSEOLIST),
                store.dispatch(GET_INVENTNAME),
                store.dispatch(GET_PRACTICALNAME),
                store.dispatch(GET_OUTWARDNAME),
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '专利查询_专利检索_实用新型专利申请_专利申请-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台为您提供一站式专利服务,专业提供发明专利申请,外观专利申请,实用新型专利申请,专利检索,专利查询等服务费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '发明专利申请,外观专利申请,实用新型专利申请,专利检索,专利查询'
        }]
      }
    },
    data(){
        return{
            isShadow: true,
            isMore: false,
            inventId: ['52', '121', '51', '37'],
            practicalId: ['29', '122', '123', '124', '125'],
            outwardId: ['38', '126', '127', '128', '129'],
            // inventList: [],
            // practicalList: [],
            // outwardList: [],
            inventImg: require('../../static/images/channel/invent.jpg'),
            team: [
                {
                    'id': 1,
                    'name': '刘冬梅',
                    'field': '电学领域专利文件撰写、专利挖掘、侵权分析',
                    'desc': '资深专利代理人，在专利布局及挖掘领域有着丰富的代理经验。凭借扎实的专业能力服务过京东方、海信等知名企业。',
                    'img': require('../../static/images/channel/liudongmei.jpg')
                },
                {
                    'id': 2,
                    'name': '刘静培',
                    'field': '生化医药专利文件撰写、专利预警、PCT申请',
                    'desc': '资深专利代理人，并擅长专利申请的布局和挖掘。服务过北汽福田、比亚迪、华电重工、北京大学等知名企业及高校。',
                    'img': require('../../static/images/channel/liujingpei.jpg')
                },
                {
                    'id': 3,
                    'name': '尚文文',
                    'field': '电学领域专利文件撰写及PCT申请',
                    'desc': '资深专利代理人，擅长专利申请文件撰写、审查意见答复、复审案件的质检工作，服务过腾讯科技、高德地图等知名企业',
                    'img': require('../../static/images/channel/shangwenwen.jpg')
                },
                {
                    'id': 4,
                    'name': '岳凤羽',
                    'field': '电学领域专利文件撰写及PCT申请',
                    'desc': '资深专利代理人，擅长专利申请文件撰写、复审及无效案件的质检，曾为联通、百度、美的等知名企业提供专业服务。',
                    'img': require('../../static/images/channel/yuefengyu.jpg')
                },
                {
                    'id': 5,
                    'name': '张丹',
                    'field': '机电领域专利文件撰写、外观设计申请',
                    'desc': '资深专利代理人，具有丰富专利代理经验，擅长专利申请的布局和挖掘验。服务过华为、格力、海尔等知名企业。',
                    'img': require('../../static/images/channel/zhangdan.jpg')
                },
                {
                    'id': 6,
                    'name': '张雄',
                    'field': '专利文件撰写、复审、无效及PCT申请',
                    'desc': '资深专利代理人，在新申请撰写、审查意见答复方面具有较丰富的经验。曾为三星电子、格力等知名企业提供专业服务。',
                    'img': require('../../static/images/channel/zhangxiong.jpg')
                }
            ],
            // seoList: [],
            url: '/zlfw',
            sortInfo01: {
                pcat_id: '150',
                cat_id: '156',
                pname: '专利服务',
                name: '实用新型专利'
            },
            sortInfo02: {
                pcat_id: '150',
                cat_id: '183',
                pname: '专利服务',
                name: '发明专利'
            },
            sortInfo03: {
                pcat_id: '150',
                cat_id: '184',
                pname: '专利服务',
                name: '外观设计专利'
            },
            // inventName: '',
            // practicalName: '',
            // outwardName: '',
        }
    },
    // created(){
    //     var _this = this;
    //     // 发明
    //     postFn('/product/product/infos', {'product_ids': this.inventId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.inventList = list;
    //         }
    //     });
    //     // 实用新型
    //     postFn('/product/product/infos', {'product_ids': this.practicalId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.practicalList = list;
    //         }
    //     });
    //     // 外观
    //     postFn('/product/product/infos', {'product_ids': this.outwardId.toString()}, function(res){
    //         if(res.data.code == 200){
    //             var list = [];
    //             var dataList = res.data.data;
    //             for (const key in dataList) {
    //                 if (dataList.hasOwnProperty(key)) {
    //                     list.push(dataList[key]);
    //                 }
    //             }
    //             _this.outwardList = list;
    //         }
    //     });
    //     // 专利seo列表 有问题
    //     var seoList = [];
    //     postFn('/content/seoarticlecolumn/index', {'columnUrl': 'zlfw'}, function(res){
	// 		if(res.data.code == 200){
    //             var list = res.data.data[0]; // 从一级栏目开始
    //             var columnFirst = list.next_column;
    //             columnFirst != "" && columnFirst.forEach(function(element, index){
    //                 if(index < 4){
    //                     postFn('/content/article/getShortList', {'type': 2, 'columnUrl': element.url}, function(result){
    //                         if(result.data.code == 200){
    //                             element['list'] = result.data.data;
    //                             seoList.push(element);
    //                             console.log(seoList,"=>seo");
    //                         }
    //                     });
    //                 }
    //             });
    //             _this.seoList = seoList;
	// 		}
    //     });
    //     // 发明名字
    //     postFn('/product/category/info', {'cat_id': 183}, function(res){
    //         if(res.data.code == 200){
    //             _this.inventName = res.data.data.cat_name;
    //         }
    //     });
    //     // 实用新型名字
    //     postFn('/product/category/info', {'cat_id': 156}, function(res){
    //         if(res.data.code == 200){
    //             _this.practicalName = res.data.data.cat_name;
    //         }
    //     });
    //     // 外观名字
    //     postFn('/product/category/info', {'cat_id': 184}, function(res){
    //         if(res.data.code == 200){
    //             _this.outwardName = res.data.data.cat_name;
    //         }
    //     });
    // },
    computed: {
        inventList(){
			return this.$store.state.serviceChannelPatent.inventList;
        },
        practicalList(){
			return this.$store.state.serviceChannelPatent.practicalList;
        },
        outwardList(){
			return this.$store.state.serviceChannelPatent.outwardList;
        },
        seoList(){
			return this.$store.state.serviceChannelPatent.patentSeoList;
        },
        inventName(){
			return this.$store.state.serviceChannelPatent.inventName;
        },
        practicalName(){
			return this.$store.state.serviceChannelPatent.practicalName;
        },
        outwardName(){
			return this.$store.state.serviceChannelPatent.outwardName;
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
    .banner_zl{
        // width: 1920px;
        margin: 0 auto;
        height: 420px;
        background: url(../../static/images/channel/banner_zl.jpg) center center no-repeat;
    }
}
</style>