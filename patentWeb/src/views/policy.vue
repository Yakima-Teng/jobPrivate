<template>
  <div class="page-policy">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="content">
        <div class="content_ctt">
            <div class="inquire">
                <div class="left_top">
                    <p>为您申报高新企业认证</p>
                    <p>享最高百万资金扶持</p>
                    <a href="javascript:void(0);" class="btn" @click="contactFun">我要申报</a>
                </div>
                <div class="left_bottom">
                    <h3>政策查询</h3>
                    <div class="ipt">
                        <input type="text" v-model="search" placeholder="政策关键词">
                        <a class="find" href="javascript:void(0)" @click="searchList"></a>
                    </div>
                    <p>省份筛选</p>
                    <dl v-if="sortsList">
                        <dd :class="{'cur': curIndex == -1 && id == 6}" @click="filterNews(6, -1)">全部<em>{{sortsList.total}}</em></dd>
                        <dd :class="{'cur': curIndex == index || id == sort.arc_type_id}" v-for="(sort, index) in sortsList.list" :key="index" @click="filterNews(sort.arc_type_id, index)">{{sort.name}}<em>{{sort.count}}</em></dd>
                    </dl>
                </div>
            </div>
            <div class="content_right">
                <p>找到相关政策{{newsList ? newsList.total : 0}}条</p>
                <div class="box-content" v-if="newsList">
                    <Item v-for="(news, index) in newsList.list" :key="index" :news="news"></Item>
                </div>
                <Pagination v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo"></Pagination>
            </div>
        </div>
    </div>
    <FootModel :isLink="footLink"></FootModel>
    <Fixed></Fixed>
  </div>
</template>

<script>
import Top from '@/components/top.vue';
import HeadModel from '@/components/header.vue';
import FootModel from '@/components/footer.vue';
import Pagination from '@/components/pagination.vue';
import Fixed from '@/components/patent/fixed.vue';

import Item from '@/components/policy/List.vue';

import { GET_INIT_NEWS_LIST,GET_NEWS_LIST } from '@/components/policy/module'

import { api, openzx } from '@/assets/js/util'

export default {
  name: 'Policy',
  asyncData({ store, route }){
    var url = '/news';
    var query = route.query;
    if(query.search != undefined && query.search.length){
      url += '?search='+query.search;
    }else if(query.id != undefined){
      url += '?tid='+ query.id;
    }
    return store.dispatch("GET_INIT_NEWS_LIST", url);
  },
  data () {
    return {
      search: '',
      curIndex: -1,
      id: 6,
      footLink: false
    }
  },
  metaInfo () {
    return {
      title: '地区政策_专利政策_政策新闻-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软专利超市政策新闻频道为您提供全面的专利政策,地区政策,想要了解有关专利的相关政策就到中细软专利超市.'
      },{
          name: 'keywords',
          content: '地区政策,专利政策,政策新闻,中细软,中细软专利超市'
      }]
    }
  },
  created(){
    var query = this.$route.query;
    if(query.search != undefined && query.search.length){
      this.search = query.search;
    }else if(query.id != undefined){
      this.id = query.id;
    }
  },
  mounted(){ // 此处数据不会被ssr读取到
    var url = '/news';
    if(this.search.length){
      url += '?search='+this.search;
    }else{
      url += '?tid='+this.id;
    }
    this.$store.dispatch("GET_INIT_NEWS_LIST", url);
  },
  components: {
    Top,
    HeadModel,
    FootModel,
    Pagination,
    Item,
    Fixed
  },
  computed: {
    sortsList(){
      return this.$store.state.policy.sortList
    },
    newsList(){
      return this.$store.state.policy.newsList
    }
  },
  methods: {
    contactFun: function(){
        openzx();
    },
    filterNews: function(id, index){
      this.id = id;
      this.curIndex = index;
      var url = '/news?tid='+ id+ '&p=1';
      this.$store.dispatch("GET_NEWS_LIST", {url: url, page: 1});
    },
    searchList: function(){
      location.href = '/policy?search='+this.search;
    },
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        var url = '/news?';
        if(this.search.length){
          url += 'search='+this.search;
        }else{
          url += 'tid='+this.id;
        }
        url+='&p='+page;
        this.$store.dispatch(GET_NEWS_LIST, {url: url, page: page});
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border01: #ccc;
$border02: #ddd;
.page-policy{
    .content{width: 100%; margin: 0 auto;padding-bottom: 50px;clear: both;background-color:#f2f3f4;overflow: hidden;}
    .inquire{float: left;width: 280px;margin-right: 20px;
      .left_top{width: 280px;height: 190px;box-sizing: border-box;padding:20px 20px 0; background: -webkit-linear-gradient(left top,#6666cc,#663399);
        p:nth-child(1){font-size: 18px;color: #fff;text-align: center;line-height: 40px;}
        p:nth-child(2){font-size: 22px;color: #fff;text-align: center;line-height: 44px;}
        .btn{display: block;width: 240px;height: 40px;background-color: #fff;color:#6666cc;text-align: center;line-height: 40px;border-radius: 5px;margin-top: 16px;}
      }
      .left_bottom{width: 280px;height: 610px;box-sizing: border-box;padding-left: 20px;padding-top: 20px; background-color: #fff;
        h3{font-size: 14px;color: #666666;line-height: 30px;}
        .ipt{position: relative;width: 240px;height: 40px;margin-top: 10px;
          .find{position: absolute;top: 10px;right: 10px;width: 22px;height: 22px;background: url(../assets/images/policy/find.png) no-repeat 0 0;}
          input{width: 100%;height: 100%;padding-left:10px;box-sizing: border-box; border-radius: 5px;border: 1px solid #dddddd;}
        }
        p{font-size: 14px;color: #666666;margin-top: 20px;line-height: 30px;}
        dl{width: 100%; height: 430px; margin-top: 10px;overflow-y: scroll;
          dd{width: 230px;height: 30px; margin-bottom: 10px;background-color:#fff;font-size: 14px;color: #333;line-height: 30px;box-sizing: border-box; padding: 0px 10px;border-radius: 5px;
            em{float: right; line-height: 30px;}
            &:hover,&.cur{background-color:$red;color: #fff;}
          }
        }
      }
    }
    .content_ctt{width: 1190px;margin: 0 auto;margin-top: 20px;overflow: hidden;}
    .content_ctt .content_right{float: left;width: 890px;}
    .content_right p{font-size: 14px;color: #999999;line-height: 70px;}
    .content_right .box-content{width: 890px;overflow: hidden;}
    .content_right .box-content .right-box:nth-of-type(2n){margin-right: 0px;}
}
</style>
